module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  css: [
    './assets/vendor/bootstrap/bootstrap.min.css',
    './assets/vendor/icon-awesome/css/font-awesome.min.css',
    './assets/vendor/icon-line/css/simple-line-icons.css',
    './assets/vendor/icon-etlinefont/style.css',
    './assets/vendor/icon-line-pro/style.css',
    './assets/vendor/icon-hs/style.css',
    './assets/vendor/dzsparallaxer/dzsparallaxer.css',
    './assets/vendor/dzsparallaxer/dzsscroller/scroller.css',
    './assets/vendor/dzsparallaxer/advancedscroller/plugin.css',
    './assets/vendor/animate.css',
    './assets/vendor/hamburgers/hamburgers.min.css',
    './assets/vendor/hs-megamenu/src/hs.megamenu.css',
    './assets/vendor/malihu-scrollbar/jquery.mCustomScrollbar.min.css',
    './assets/vendor/slick-carousel/slick/slick.css',
    './assets/vendor/fancybox/jquery.fancybox.css',
    './assets/css/core.css',
    './assets/css/components.css',
    './assets/css/globals.css'
  ],
  output: './assets/css_purged/',
  safelist: {
    standard: [
      'html', 'body', 'iframe', 'img', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'span', 'div', 'ul', 'li', 'ol', 'section', 'header', 'nav', 'button', 'noscript',
      'input', 'textarea', 'label', 'select', 'option', 'form', 'svg', 'path',
      'active', 'show', 'fade', 'open', 'collapsed', 'collapse', 'collapsing', 'focus', 'hover', 'disabled', 'is-active'
    ],
    deep: [
      /^slick-/,
      /^fancybox-/,
      /^dzs/,
      /^mCS/,
      /^hs-/,
      /^hamburger/
    ],
    greedy: [
      /slick/,
      /fancybox/,
      /parallaxer/,
      /scrollbar/,
      /megamenu/,
      /hamburger/
    ]
  }
}
