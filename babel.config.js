module.exports = {
  presets: [
    [
      "@vue/app", 
      { useBuiltIns: "entry" },
      "@babel/preset-env", {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}
