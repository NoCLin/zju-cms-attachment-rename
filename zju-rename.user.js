// ==UserScript==
// @name         浙江大学附件重命名
// @namespace    http://zju.edu.cn/
// @version      0.1
// @description  为浙江大学CMS系统纠正附件下载时的文件名
// @author       NoCLin
// @match        http*://*.zju.edu.cn/*
// @icon         https://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("a[sudyfile-attr]").forEach(function(a){
        a.setAttribute("download",a.innerText)
    })

})();
