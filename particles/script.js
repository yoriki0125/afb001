// グローバル変数
let canvas
let ctx
let particles = []
let textImageData = null
let mousePosition = { x: 0, y: 0 }
let isTouching = false
let isMobile = false
let animationFrameId

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  initializeCanvas()
  initializeEventListeners()
  createBackgroundParticles()
  createFloatingParticles()
})

// Canvas初期化
function initializeCanvas() {
  canvas = document.getElementById("particleCanvas")
  if (!canvas) return

  const context = canvas.getContext("2d")
  if (!context) return

  ctx = context
  updateCanvasSize()
  createTextImage()
  createInitialParticles()
  animate()
}

// Canvas サイズ更新
function updateCanvasSize() {
  if (!canvas) return

  const width = Math.max(window.innerWidth / 2, 1)
  const height = Math.max(window.innerHeight, 1)

  canvas.width = width
  canvas.height = height
  isMobile = window.innerWidth < 768
}

// テキスト画像作成
function createTextImage() {
  if (!ctx || !canvas) return 0

  if (canvas.width <= 0 || canvas.height <= 0) {
    return 0
  }

  ctx.fillStyle = "black"
  ctx.save()

  const fontSize = isMobile ? 40 : 64
  const subFontSize = isMobile ? 28 : 48

  // メインタイトル
  ctx.font = `bold ${fontSize}px 'Inter', sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  const mainText = "assist for business"
  const mainY = canvas.height / 2 - 60
  ctx.fillText(mainText, canvas.width / 2, mainY)

  // サブタイトル
  ctx.font = `${subFontSize}px 'Inter', sans-serif`
  const subText = "～ SELFing ～"
  const subY = mainY + fontSize + 30
  ctx.fillText(subText, canvas.width / 2, subY)

  ctx.restore()

  try {
    textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  } catch (error) {
    console.warn("Failed to get image data:", error)
    return 0
  }

  return 1
}

// パーティクル作成
function createParticle() {
  if (!ctx || !canvas || !textImageData || canvas.width <= 0 || canvas.height <= 0) return null

  const data = textImageData.data

  for (let attempt = 0; attempt < 200; attempt++) {
    const x = Math.floor(Math.random() * canvas.width)
    const y = Math.floor(Math.random() * canvas.height)

    if (data[(y * canvas.width + x) * 4 + 3] > 128) {
      return {
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        size: Math.random() * 0.8 + 0.2,
        color: "black",
        scatteredColor: "#ffffff",
        life: Math.random() * 100 + 50,
      }
    }
  }

  return null
}

// 初期パーティクル作成
function createInitialParticles() {
  const baseParticleCount = 20000
  const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (960 * 1080)))

  for (let i = 0; i < particleCount; i++) {
    const particle = createParticle()
    if (particle) particles.push(particle)
  }
}

// アニメーション
function animate() {
  if (!ctx || !canvas) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const maxDistance = 120

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const dx = mousePosition.x - p.x
    const dy = mousePosition.y - p.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < maxDistance && (isTouching || !("ontouchstart" in window))) {
      const force = (maxDistance - distance) / maxDistance
      const angle = Math.atan2(dy, dx)
      const moveX = Math.cos(angle) * force * 40
      const moveY = Math.sin(angle) * force * 40
      p.x = p.baseX - moveX
      p.y = p.baseY - moveY

      ctx.fillStyle = p.scatteredColor
    } else {
      p.x += (p.baseX - p.x) * 0.1
      p.y += (p.baseY - p.y) * 0.1
      ctx.fillStyle = "black"
    }

    ctx.fillRect(p.x, p.y, p.size, p.size)

    p.life--
    if (p.life <= 0) {
      const newParticle = createParticle()
      if (newParticle) {
        particles[i] = newParticle
      } else {
        particles.splice(i, 1)
        i--
      }
    }
  }

  const baseParticleCount = 20000
  const targetParticleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (960 * 1080)))

  while (particles.length < targetParticleCount) {
    const newParticle = createParticle()
    if (newParticle) particles.push(newParticle)
  }

  animationFrameId = requestAnimationFrame(animate)
}

// イベントリスナー初期化
function initializeEventListeners() {
  // リサイズ
  window.addEventListener("resize", handleResize)

  // マウス・タッチイベント
  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("touchmove", handleTouchMove, { passive: false })

  if (canvas) {
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)
  }

  // フォームイベント
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", handleEmailLogin)
  }

  // ボタンイベント
  const microsoftBtn = document.getElementById("microsoftBtn")
  const googleBtn = document.getElementById("googleBtn")
  const samlBtn = document.getElementById("samlBtn")
  const requestBtn = document.getElementById("requestBtn")
  const demoBtn = document.getElementById("demoBtn")
  const consultBtn = document.getElementById("consultBtn")
  const downloadBtn = document.getElementById("downloadBtn")

  if (microsoftBtn) microsoftBtn.addEventListener("click", handleMicrosoftLogin)
  if (googleBtn) googleBtn.addEventListener("click", handleGoogleLogin)
  if (samlBtn) samlBtn.addEventListener("click", handleSAMLLogin)
  if (requestBtn) requestBtn.addEventListener("click", handleRequestClick)
  if (demoBtn) demoBtn.addEventListener("click", handleDemoClick)
  if (consultBtn) consultBtn.addEventListener("click", handleConsultClick)
  if (downloadBtn) downloadBtn.addEventListener("click", handleDownloadClick)
}

// イベントハンドラー
function handleResize() {
  updateCanvasSize()
  createTextImage()
  particles = []
  createInitialParticles()
}

function handleMove(x, y) {
  if (x <= window.innerWidth / 2) {
    mousePosition = { x, y }
  }
}

function handleMouseMove(e) {
  handleMove(e.clientX, e.clientY)
}

function handleTouchMove(e) {
  if (e.touches.length > 0) {
    e.preventDefault()
    handleMove(e.touches[0].clientX, e.touches[0].clientY)
  }
}

function handleTouchStart() {
  isTouching = true
}

function handleTouchEnd() {
  isTouching = false
  mousePosition = { x: 0, y: 0 }
}

function handleMouseLeave() {
  if (!("ontouchstart" in window)) {
    mousePosition = { x: 0, y: 0 }
  }
}

// フォーム・ボタンハンドラー
function handleEmailLogin(e) {
  e.preventDefault()
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")

  console.log("Email login:", {
    email: emailInput.value,
    password: passwordInput.value,
  })
}

function handleMicrosoftLogin() {
  console.log("Microsoft Entra ID login")
}

function handleGoogleLogin() {
  console.log("Google Workspace login")
}

function handleSAMLLogin() {
  console.log("SAML login")
}

function handleRequestClick() {
  console.log("資料請求 clicked")
}

function handleDemoClick() {
  console.log("デモを見る clicked")
}

function handleConsultClick() {
  console.log("商談依頼 clicked")
}

function handleDownloadClick() {
  console.log("資料ダウンロード clicked")
}

// 背景パーティクル作成
function createBackgroundParticles() {
  const bgParticles = document.querySelector(".bg-particles")
  if (!bgParticles) return

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div")
    particle.className = "bg-particle"
    particle.style.width = `${Math.random() * 3 + 1}px`
    particle.style.height = `${Math.random() * 3 + 1}px`
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`
    particle.style.animationDelay = `${Math.random() * 5}s`
    particle.style.animationDuration = `${3 + Math.random() * 4}s`
    particle.style.transform = `translate(${Math.sin(i) * 20}px, ${Math.cos(i) * 15}px)`

    bgParticles.appendChild(particle)
  }
}

// 漂うパーティクル作成
function createFloatingParticles() {
  const floatingParticles = document.querySelector(".floating-particles")
  if (!floatingParticles) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "floating-particle"
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDuration = `${8 + Math.random() * 6}s`
    particle.style.animationDelay = `${Math.random() * 8}s`

    floatingParticles.appendChild(particle)
  }
}

// クリーンアップ
window.addEventListener("beforeunload", () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
