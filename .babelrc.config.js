module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // 配置浏览器的polyfill
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}