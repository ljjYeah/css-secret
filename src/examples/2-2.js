export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>多重边框-outline</title>
  <style>
    .box{
      margin: 50px auto;
      height: 100px;
      width: 100px;
      border: 5px solid gold;
      /*border-radius: 10px;*/
    }
    .out-border{
      outline: 5px solid #ff0000;
    }
    .insert-border{
      outline: 5px dashed #ff0000;
      outline-offset: -15px;
    }
  </style>
</head>
<body>
  <!--
  outline的优点是边框可以设置虚线，box-shadow就不能满足
  outline只支持双层边框的场景，因为outline不支持逗号隔开
  如果是在外层加边框，并且有圆角的情况，outline也是不支持
  -->
  <div class="box out-border"></div>
  <div class="box insert-border"></div>
</body>
</html>

`
