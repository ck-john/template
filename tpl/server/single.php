<?php
$hash = $_GET['hash'];
switch ($hash){
    case 'home':
        echo "<h1>首页<p>首页p标签</p></h1><p>123</p>";
        break;
    case 'contact':
        echo "<h1>联系人</h1>";
        break;
    case 'about':
        echo "<h1>关于我们</h1>";
        break;
    default:
        break;
}