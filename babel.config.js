// 下面是给babel loade配置options
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 兼容配置 npm install @babel/polyfill@7.8.7 --save
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  // npm install @babel/plugin-transform-runtime@7.9.0 --save-dev
  // npm install --save @babel/runtime
  plugins: [
    '@babel/plugin-transform-runtime',
    {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
  ]
}
