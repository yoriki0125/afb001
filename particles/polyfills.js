// ========================================
// 古いブラウザ対応ポリフィル
// IE11以下、古いChrome/Firefox/Safari対応
// ========================================

;(() => {
  // requestAnimationFrame ポリフィル (IE9以下対応)
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) =>
      window.setTimeout(() => {
        callback(Date.now())
      }, 1000 / 60)
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id) => {
      clearTimeout(id)
    }
  }

  // addEventListener ポリフィル (IE8以下対応)
  if (!Element.prototype.addEventListener) {
    Element.prototype.addEventListener = function (event, handler, capture) {
      
      if (!this._events) this._events = {}
      if (!this._events[event]) this._events[event] = []

      this._events[event].push(handler)

      if (this.attachEvent) {
        this.attachEvent("on" + event, (e) => {
          e = e || window.event
          e.target = e.target || e.srcElement
          e.preventDefault =
            e.preventDefault ||
            (() => {
              e.returnValue = false
            })
          e.stopPropagation =
            e.stopPropagation ||
            (() => {
              e.cancelBubble = true
            })
          handler.call(this, e)
        })
      }
    }
  }

  // removeEventListener ポリフィル
  if (!Element.prototype.removeEventListener) {
    Element.prototype.removeEventListener = function (event, handler) {
      if (this.detachEvent) {
        this.detachEvent("on" + event, handler)
      }
    }
  }

  // querySelector ポリフィル (IE7以下対応)
  if (!document.querySelector) {
    document.querySelector = (selector) => {
      var elements = document.querySelectorAll(selector)
      return elements.length > 0 ? elements[0] : null
    }
  }

  if (!document.querySelectorAll) {
    document.querySelectorAll = (selector) => {
      var style = document.createElement("style")
      var elements = []
      var element

      document.documentElement.firstChild.appendChild(style)
      document._qsa = []

      style.styleSheet.cssText = selector + "{x-qsa:expression(document._qsa && document._qsa.push(this))}"
      window.scrollBy(0, 0)
      style.parentNode.removeChild(style)

      while (document._qsa.length) {
        element = document._qsa.shift()
        element.style.removeAttribute("x-qsa")
        elements.push(element)
      }
      document._qsa = null
      return elements
    }
  }

  // Array.forEach ポリフィル (IE8以下対応)
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      var T, k
      if (this == null) {
        throw new TypeError("this is null or not defined")
      }
      var O = Object(this)
      var len = Number.parseInt(O.length) || 0
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function")
      }
      if (arguments.length > 1) {
        T = thisArg
      }
      k = 0
      while (k < len) {
        var kValue
        if (k in O) {
          kValue = O[k]
          callback.call(T, kValue, k, O)
        }
        k++
      }
    }
  }

  // Array.indexOf ポリフィル (IE8以下対応)
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      var k
      if (this == null) {
        throw new TypeError('"this" is null or not defined')
      }
      var o = Object(this)
      var len = Number.parseInt(o.length) || 0
      if (len === 0) {
        return -1
      }
      var n = Number.parseInt(fromIndex) || 0
      let kIndex
      if (n >= len) {
        return -1
      }
      kIndex = Math.max(n >= 0 ? n : len - Math.abs(n), 0)
      while (kIndex < len) {
        if (kIndex in o && o[kIndex] === searchElement) {
          return kIndex
        }
        kIndex++
      }
      return -1
    }
  }

  // Object.keys ポリフィル (IE8以下対応)
  if (!Object.keys) {
    Object.keys = (obj) => {
      var keys = []
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          keys.push(key)
        }
      }
      return keys
    }
  }

  // Date.now ポリフィル (IE8以下対応)
  if (!Date.now) {
    Date.now = () => new Date().getTime()
  }

  // String.trim ポリフィル (IE8以下対応)
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
  }

  // console ポリフィル (IE9以下対応)
  if (!window.console) {
    window.console = {
      log: () => {},
      warn: () => {},
      error: () => {},
      info: () => {},
      debug: () => {},
    }
  }

  // JSON ポリフィル (IE7以下対応)
  if (!window.JSON) {
    window.JSON = {
      parse: (text) => eval("(" + text + ")"),
      stringify: (obj) => {
        var type = typeof obj
        if (type !== "object" || obj === null) {
          if (type === "string") {
            return '"' + obj.replace(/"/g, '\\"') + '"'
          }
          return String(obj)
        } else {
          var json = []
          var isArray = obj && obj.constructor === Array
          for (var key in obj) {
            var value = obj[key]
            var valueType = typeof value
            if (valueType === "string") {
              value = '"' + value.replace(/"/g, '\\"') + '"'
            } else if (valueType === "object" && value !== null) {
              value = JSON.stringify(value)
            }
            json.push((isArray ? "" : '"' + key + '":') + String(value))
          }
          return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}")
        }
      },
    }
  }

  // Canvas ポリフィル検出
  function supportsCanvas() {
    var elem = document.createElement("canvas")
    return !!(elem.getContext && elem.getContext("2d"))
  }

  // Canvas未対応ブラウザ用の代替表示
  if (!supportsCanvas()) {
    window.CANVAS_NOT_SUPPORTED = true
    console.warn("Canvas is not supported in this browser")
  }

  // Touch events ポリフィル検出
  window.TOUCH_SUPPORTED = "ontouchstart" in window || navigator.maxTouchPoints > 0

  // Feature detection結果をグローバルに保存
  window.BROWSER_FEATURES = {
    canvas: supportsCanvas(),
    touch: window.TOUCH_SUPPORTED,
    requestAnimationFrame: !!window.requestAnimationFrame,
    addEventListener: !!Element.prototype.addEventListener,
    querySelector: !!document.querySelector,
  }

  console.log("Browser features detected:", window.BROWSER_FEATURES)
})()
