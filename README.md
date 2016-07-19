# jquery.textmagnifier
* 一款基于jquery的文字放大插件
* 支持input中文字放大显示（上下左右）
* 支持银行卡分隔显示
* 支持require调用（AMD）
![jquery.textmagnifier](http://static.66tools.com/image/plug/jquery.textmagnifier.gif)

##如何使用 ?
引入jquery.textmagnifier
```javascript
<script src="../dist/js/jquery.textmagnifier.js"></script>
```
初始化
```javascript
$('#inpXX1').textMagnifier({align: 'bottom', excision:['on',4,'-']});
$('#inpXX2').textMagnifier({align: 'top', height: 60});
$('#inpXX3').textMagnifier({align: 'left', height: 30, width: 'hide'}).css('color','red');
$('.inpClass').textMagnifier({align: 'bottom', height: 40, maxlength: 10});
```


##配置指南
* background     : '#fdfdee',      //背景色
* height         : 40,             //高度
* width          : 'auto',         //auto or hide
* fontsize       : 30,             //字体大小
* align          : 'top',          //漂浮属性
* alignlen       : 5,              //漂浮距离
* maxlength      : 'auto',         //默认不限制最大长度
* font           : 'Consolas',     //默认字体
* autocomplete   : 'off',          //默认关闭input自动填充
* excision       : ['off',4,'-']   //分割,间隔，分隔符

##变更内容：

##### JQuery Input文字放大插件 V2.50

变更内容：
* 1.优化插件逻辑，上下文仅一份实例，极大提升性能
* 2.时隔一年多，再回首优化，别有一番感触

##### JQuery Input文字放大插件 V2.10

变更内容：
* 1.批量绑定时支持重绘（解决动态添加行定位问题）

##### JQuery Input文字放大插件 V2.00

变更内容：
* 1.优化代码
* 2.可支持新增节点初始化插件
* 3.增加渐显、渐隐效果

##### JQuery Input文字放大插件 V1.02

变更内容：
* 1.添加autocomplete属性设置，默认关闭
* 2.新增增强型分隔符功能（可支持数字字符同时分割），可自定义开启，关闭
* 3.新增分割间隔以及分割内容

##### JQuery Input文字放大插件 V1.01

变更内容：
* 1.修正在浏览器中布局错位的问题
* 2.新增maxlength批量限制输入框长度
* 3.新增font可自定义
* 4.修正输入内容太长导致爆出的问题
* 5.特别测试，兼容IE7/IE8等浏览器
目前控件已加入项目，继续完善中..

##### JQuery Input文字放大插件 V1.0

控件特性：
* 1.支持JQuery链式调用
* 2.支持ID或Class，即可以批量初始化
* 3.支持top、bottom、left、right四个方向
* 4.支持提示框 字体大小，字体颜色，背景颜色，高度，宽度，距离等自定义
* 5.支持自定义扩展方法
* 6.支持常见V1.X版本的Jquery

