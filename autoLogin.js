// ==UserScript==
// @name         ECNU autoLogin(need chrome)
// @namespace    https://github.com/Chains-Z
// @version      0.1
// @description  华东师范大学统一身份认证自动识别填写验证码并登陆脚本
// @require      https://unpkg.com/tesseract.js@v2.1.2/dist/tesseract.min.js
// @author       Chains-Z
// @include      https://portal1.ecnu.edu.cn/cas/login*
// @exclude      http://portal.ecnu.edu.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_log
// ==/UserScript==

(function() {
  'esvresion: 6'
  'use strict';
  if (self == top) {
      GM_log("HHHHello")
      let img = document.getElementById("codeImage")
      Tesseract.recognize(
          img.src,
          'eng', {
              logger: m => GM_log(m)
          }
      ).then(({
          data: {
              text
          }
      }) => {
          GM_log(text);
          let title = document.getElementById("code")
          title.value = text
          let btn = document.getElementsByClassName("login_box_landing_btn")[0]
          GM_log(btn.length)
          btn.click()
      })
}
})();