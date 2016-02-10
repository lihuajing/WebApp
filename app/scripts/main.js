// jshint devel:true
console.log('\'Allo \'Allo!');

// 单行注释
/* 这是
 * 一个
 * 多行
 */
// token:标识符可以包含a-z/A-Z/_/$/0-9(数据不能作为首字符),区分大小写,建议采用驼峰式写法如myName
// 关键字:ES5
// break/case/catch/continue/debugger/default/delete/do/else/finally/for/function/
// if/in/instanceof/new/return/switch/this/throw/try/typeof/var/void/while/with/
// 保留字:ES5 strict
// class/const/enum/export/extends/import/super/
// implements/interface/let/package/private/protected/public/static/yield/eval/arguments/
// use ECMA-262 edition5 strict mode,函数内使用如function foo(){'use strict'; other code;}
'use strict';
Document.ready(function () {
    console.log('jQuery');
    //定义变量:未赋值时是undefined,赋值后也可以通过重新赋值改变类型但不推荐,var定义的都是局部变量,不用var定义的为全局变量
    var myVariable = 'hello world!'
});

