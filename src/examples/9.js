export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>自适应的椭圆</title>
  <style>
  	.container{
  		display: grid;
  		grid-template-columns: repeat(auto-fit, 300px);
  		justify-content: center;
  		justify-items: center;
  		grid-row-gap: 40px;
  	}
    .box{
      width: 200px;
      height: 150px;
      background: #9254de;
    }
    .box1{
      border-radius: 50% / 50%;
    }
    .left{
      border-radius: 100% 0 0 100% / 50%;
    }
    .right{
      border-radius: 0 100% 100% 0 / 50%;
    }
    .top{
      border-radius: 50% / 100% 100% 0 0;
    }
    .down{
      border-radius: 50% / 0 0 100% 100%;
    }
    .left-top{
      /*border-radius: 100% 0 0 0 / 100% 0 0 0;*/
      /*这是上面的简写*/
      border-radius: 100% 0 0 0
    }
    .right-top{
      border-radius: 0 100% 0 0
    }
    .left-down{
      border-radius: 0 0 0 100%
    }
    .right-down{
      border-radius: 0 0 100% 0
    }
  </style>
</head>
<body>
<div class="container">
  <div class="box box1"></div>
  <div class="box left"></div>
  <div class="box right"></div>
  <div class="box top"></div>
  <div class="box down"></div>
  <div class="box left-top"></div>
  <div class="box right-top"></div>
  <div class="box left-down"></div>
  <div class="box right-down"></div>
</div>
</body>
</html>

`
