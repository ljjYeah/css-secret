export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>半透明背景</title>
  <style>
    .box{
      margin: 10px auto;
      height:200px;
      width: 200px;
      background-color: #f00;
      border: 10px solid rgba(255,0,0,0.3);
    }
    .box-special{
      background-clip: padding-box;
    }
  </style>
</head>
<body>
<div class="box">我是普通的盒子，我的边框怎么不见了？</div>
<div class="box box-special">我是漂亮的盒子，啦啦啦！</div>
</body>
</html>

`
