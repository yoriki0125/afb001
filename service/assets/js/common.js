//文字コードはutf-8

//定数定義
const MEDIA_QUERY = window.matchMedia("(max-width: 768px)");
const CHART_CONFIG = {
  type: "radar",
  options: {
    responsive: false,
    scales: {
      r: {
        min: 0,
        max: 11,
        ticks: {
          color: "#fff",
          backdropColor: "transparent",
          stepSize: 1,
          callback: function (value) {
            return value <= 10 ? value : "";
          },
        },
        pointLabels: {
          color: "#fff",
          backgroundColor: "transparent",
        },
        angleLines: {
          display: true,
          color: "#fff",
        },
        grid: {
          color: "#fff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

/**
 * レーダーチャートを初期化する
 */
function initializeRadarChart() {
  $.getJSON("/assets/json/chart-data.json", function (json) {
    const ctx = $("#radarChart")[0].getContext("2d");
    const chartData = {
      labels: json.labels,
      datasets: json.datasets,
    };

    new Chart(ctx, {
      ...CHART_CONFIG,
      data: chartData,
    });
  }).fail(function () {
    console.error("JSONの読み込みに失敗しました");
  });
}

/**
 * サイドメニューの開閉機能を初期化する
 */
function initializeSideMenu() {
  $(".jsSidebarItemTitle").on("click", function (e) {
    e.preventDefault();

    // サイドバーが閉じている場合はクリックイベントを無効化
    if ($(".jsSidebar").hasClass("is-close")) {
      return;
    }

    // クリックされたタイトル直下のサブメニューを取得
    const $chaildMenu = $(this).siblings(".jsSidebarChaildMenu");
    // クリックされたタイトル
    const $title = $(this);

    if ($chaildMenu.hasClass("is-open")) {
      $chaildMenu.removeClass("is-open").slideUp(300);
      $title.removeClass("is-open");
    } else {
      // 他の兄弟サブメニューとタイトルを閉じる
      $(this)
        .parent()
        .siblings(".item")
        .find(".jsSidebarChaildMenu.is-open")
        .removeClass("is-open")
        .slideUp(300);
      $(this)
        .parent()
        .siblings(".item")
        .find(".jsSidebarItemTitle.is-open")
        .removeClass("is-open");
      $chaildMenu.addClass("is-open").slideDown(300);
      $title.addClass("is-open");
    }
  });
}

/**
 * サイドバーの開閉ボタン機能を初期化する
 */
function initializeSidebarBtn() {
  $(".jsSidebarBtn").on("click", function () {
    const $sidebar = $(".jsSidebar");
    const isClosing = !$sidebar.hasClass("is-close");

    $sidebar.toggleClass("is-close");

    // サイドバーが閉じられる場合、開いている子メニューを閉じる
    if (isClosing) {
      // is-closedクラスが付いている場合は子メニューを閉じない
      if (!$sidebar.hasClass("is-closed")) {
        $(".jsSidebarChaildMenu.is-open").removeClass("is-open").slideUp(300);
        $(".jsSidebarItemTitle.is-open").removeClass("is-open");
      }

      // アニメーション完了後にis-closedクラスを追加
      $sidebar.on("transitionend", function () {
        $sidebar.addClass("is-closed");
        // is-closed時にjsSidebarChaildMenuのdisplayをblockにする
        $(".jsSidebarChaildMenu").each(function () {
          if ($(this).css("display") === "none") {
            $(this).css("display", "block");
          }
        });
        // イベントリスナーを削除して重複実行を防ぐ
        $sidebar.off("transitionend");
      });
    } else {
      $sidebar.removeClass('is-closed');
      // サイドバーが開く場合、アニメーション中にis-openを付与
      if (!$sidebar.hasClass('is-close')) {
        $sidebar.addClass('is-open');
        $sidebar.one('transitionend', function() {
          $sidebar.removeClass('is-open');
        });
      }
    }
  });
}

/**
 * AIチャットの開閉ボタン機能を初期化する
 */
function initializeAiChatBtn() {
  $(".jsAiChatBtn").on("click", function () {
    $(".jsAiChat").toggleClass("is-open");
  });
}

/**
 * モーダル機能を初期化する
 */
function initializeModal() {
  // モーダルを開く
  $('.jsModalOpen').on('click', function (e) {
    e.preventDefault();
    const btnId = $(this).attr('id');
    const modalId = btnId.replace('Btn', 'Modal');
    const $modal = $(`#${modalId}`);
    
    if ($modal.length) {
      $modal.addClass('is-open');
      $('body').addClass('modal-open scrollLock');
    }
  });

  // モーダルを閉じる（閉じるボタン）
  $('.jsModalClose').on('click', function () {
    const $modal = $(this).closest('.modModal');
    closeModal($modal);
  });

  // モーダルを閉じる（背景クリック）
  $('.modModal').on('click', function (e) {
    if (e.target === this) {
      closeModal($(this));
    }
  });

  // ESCキーでモーダルを閉じる
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      const $openModal = $('.modModal.is-open');
      if ($openModal.length) {
        closeModal($openModal);
      }
    }
  });
}

/**
 * モーダルを閉じる共通関数
 */
function closeModal($modal) {
  $modal.removeClass('is-open');
  $('body').removeClass('modal-open scrollLock');
}

/**
 * アコーディオン機能を初期化する（共通部分のみ）
 */
function initializeAccordion() {
  //accordion toggle
  const accordionTrigger = $(".jsAccordionTrigger");
  accordionTrigger.on("click", function () {
    $(this).toggleClass("isActive")
    
    let accordionItem = $(this).closest('.accordion__item__wrapper').find('.accordion__subItem').first();

    if (accordionItem) {
      accordionItem.slideToggle();
    }
  });
}

/**
 * skillmapページ専用のアコーディオン詳細・チャートトグル機能
 */
function initializeSkillmapAccordion() {
  //detail toggle
  const detailTrigger = $(".jsDetailTrigger");
  const detailContainer = $(".jsDetailContainer");
  const detailInner = detailContainer.find(".accordionDetail__wrapper")

  detailTrigger.on("click", function (e) {
    if (!$(e.target).hasClass("jsAccordionTrigger")) {
      // すべてのjsDetailTriggerからisOpenを削除
      detailTrigger.removeClass("isOpen");
      // クリックした要素にisOpenを追加
      let accordionItem = $(this).siblings(".jsAccordionitem");
      if (accordionItem && $(this).siblings('.jsAccordionitem').length > 0 ) {
        $(".jsAccordionitem").not(accordionItem).slideUp();
        $(this).find(".jsAccordionTrigger").first().addClass("isActive")
        accordionItem.slideDown();
      }
      
      $(this).addClass("isOpen");
      if ( window.innerWidth > 1000)  {
        const detailItem = $(this).find(".jsDetailItem").first();

        const level = $(this).parent().attr("class").match(/lv\d+/)?.[0];
        
        
        if (detailItem && detailContainer && detailInner) {

          if(level) detailItem.attr("data-level", level);
          detailContainer.addClass("isShowingDetail");
          detailInner
          .empty()
          .append(detailItem.clone(true, true))
        }
      } else {
        const detailItem = $(this).find(".jsDetailItem").first();
        
        if (detailItem) {
          $(".jsDetailItem").not(detailItem).slideUp();
          detailItem.slideToggle();
        }
      }
    }
  });

  //chart toggle
  const chartTrigger = $('.jsChartBtn');

  chartTrigger.on("click", function() {
    if (detailContainer && detailInner) {
      detailContainer.removeClass("isShowingDetail");
      detailTrigger.removeClass("isOpen");
      detailInner.empty()
    }
  })
}

/**
 * サイドバーメニューボタン（jsSidebarMenu）の開閉機能を初期化する
 */
function initializeSidebarMenuBtn() {
  $(".jsSidebarMenu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-open");
    $(".jsSidebarNav").toggleClass("is-open");
  });
}

/**
 * SP時にsidebar--userのjsSidebarからis-close, is-open, is-closedを削除する
 */
function adjustSidebarForSP() {
  if (MEDIA_QUERY.matches) {
    $(".sidebar--user.jsSidebar").removeClass("is-close is-open is-closed");
  }
}

//simple bar
function simpleBarInit() {
  $(function () {
    const jsSimpleBar = $(".jsSimpleBar");
    jsSimpleBar.each((index, el) => new SimpleBar(el));
  });
}
//skillmapContent

function skillMapContentToggle() {
  $(function () {
    const skillMapContent = $(".jsSkillMapContent");
    const skillMapBtn = $(".jsSkillMapBtn");
    const detailContainer = $(".jsDetailContainer");
    const detailInner = detailContainer.find(".accordionDetail__wrapper")
    const accordionItem = $('.jsAccordionitem')
  
    $(skillMapContent[0]).show();
    $(skillMapBtn[0]).addClass("isActive");  
  
    skillMapBtn.on("click", function (e) {
      e.preventDefault();

      if (window.innerWidth < 1000) {
        $(".jsDetailItem").each(function() {
          $(this).slideUp();
        })
        
      }
      let index = $(this).index();
      $(this).addClass("isActive")

      detailContainer.removeClass("isShowingDetail");
      detailInner.empty();
      
      skillMapBtn.not(this).removeClass("isActive");
      accordionItem.slideUp();
      $(".jsAccordionTrigger").removeClass("isActive");
      $(".jsDetailTrigger").removeClass("isActive");

      skillMapContent.hide();
      $(skillMapContent[index]).show();
    });
  });
}

//初期化処理
$(function () {
  initializeRadarChart();
  initializeSideMenu();
  initializeSidebarBtn();
  initializeAiChatBtn();
  initializeModal();
  initializeAccordion(); // 共通
  initializeSkillmapAccordion(); // skillmapページ専用
  initializeSidebarMenuBtn(); // サイドバーメニューボタン
  adjustSidebarForSP(); // SP時のサイドバー調整
  simpleBarInit();
  skillMapContentToggle();
  $(window).on("resize", adjustSidebarForSP);
});




