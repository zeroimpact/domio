module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  css: ['./assets/css/components.css', './assets/css/globals.css'],
  output: './assets/css_purged/',
  safelist: {
    standard: [
      'html', 'body', 'iframe', 'img', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'span', 'div', 'ul', 'li', 'ol', 'section', 'header', 'footer', 'nav', 'button', 
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
