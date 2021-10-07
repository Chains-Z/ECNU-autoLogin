// ==UserScript==
// @name         ECNU autoLogin(need chrome)
// @namespace    https://github.com/Chains-Z
// @version      0.2.2
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
    'use strict'
    if (self == top) {
        let img = document.getElementById("codeImage")
        Tesseract.recognize(
            img.src,
            'eng', {}
        ).then(({
            data: {
                text
            }
        }) => {
           // GM_log(text);
            let title = document.getElementById("code")
            title.value = text
            let btn = document.getElementById("index_login_btn")
            GM_log(btn)
            console.log(btn)
            btn.click()
        })
}
})();
