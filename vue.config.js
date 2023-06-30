/*
 * @Author: lili11.yang
 * @Date: 2023-06-29 17:50:42
 * @Description: 
 * @LastEditTime: 2023-06-30 10:01:05
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
});
