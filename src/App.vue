<template>
  <div>
      <div id="header-2017">
    		<div class="css-login">
          <a href="#">
            登录
          </a>|
          <a href="#">
            注册
          </a>
    		</div>
    		<div class="css-header">
    			<div class="css-header-left">
    				<a href="#">
              <img src="./assets/img/logo.png">
            </a>
    			</div>
    			<div class="css-header-center">
    				<ul>
    					<li>
    						<a href="catalog.html"> 首页</a>
    					</li>
    					<li>
    						<a href="##"> 搭搭家APP</a>
    					</li>
    					<li>
    						<a href="##"> 3D效果设计</a>
    					</li>
    					<li>
    						<a href="##"> 客户案例</a>
    					</li>
    					<li>
    						<a href="##"> 公司简介</a>
    					</li>
    					<li>
    						<a href="##"> 联系我们</a>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>

      <div class="css-body">
         <img class="css-body-bg" width="450px" height="350px"  src="./assets/img/ad_ipad.png" />
         <div class="css-body-ad">
            <div class="css-body-ad-title">搭搭家</div>
            <div class="css-body-ad-engtitle">DADAHOME</div>
            <div class="css-body-ad-desc">搭搭家是一款SaaS模式的企业移动销售云服务展示软件系统，专门为企业提供更高效更优质的品牌营销，产品展示，网络传播，以及强大的产品即时搭配功能等服务。 </div>
        </div>
        <div class="css-body-btn">
          <a href="#">
            <img  class="css-body-btn-img" src="./assets/img/iphone.png" />
            <div  class="css-body-btn-desc">S E E &nbsp;&nbsp;O N &nbsp;&nbsp;A P P S T O R E</div>
          </a>
        </div>
        <div class="clear"></div>
        <div >2</div>
      </div>

    	<div class="css-intro">
    		<div class="css-intro-title">
            <img class="css-intro-title-img" style="float:left" src="./assets/img/ask.png" />
      			<div class="css-intro-title-ask">什么是搭搭家？</div>
    		</div>
    		<div class="css-intro-content">
    			<div class="css-intro-title-ans" >搭搭家是一款SaaS模式的企业移动销售云服务展示软件系统，专门为企业提供更高效更优质的品牌营销，产品展示，网络传播，以及强大的产品即时搭配功能等服务。</div>
    		</div>
    	</div>
    	<div class="css-intro">
    		<div class="css-intro-title">
            <img class="css-intro-title-img" style="float:left" src="./assets/img/ask.png" />
      			<div class="css-intro-title-ask">搭搭家解决什么问题？</div>
    		</div>
    		<div class="css-intro-content">
    			<div class="css-intro-title-ans" >搭搭家是一款SaaS模式的企业移动销售云服务展示软件系统，专门为企业提供更高效更优质的品牌营销，产品展示，网络传播，以及强大的产品即时搭配功能等服务。</div>
    		</div>
    	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
/*头部*/
#header-2017{
	width: 100%;
	height: 100px;
	background: #fff;
  position:fixed;
  border-bottom:1px solid gray;
  z-index:999;
}

@media screen and (max-width: 1140px) {
	#header-2017{
		width: 1140px;
	}
}

.css-login {
	width: 100%;
  text-align: right;
  padding: 5px 40px;
  margin:0 auto;
  height: 30px;
  background-color: #E1E1E1;
  font-size: 12px;
  color:#666666;
}
.css-header {
  width:1140px;
  margin:0 auto;
    /*头部标志*/
  .css-header-left {
    	float: left;
    	padding-top: 7px;

    a{
    	float: left;
    }
    img{
    	width: 60px;
    	margin-top: 6px;
    }
  }
  .css-header-center {
    float: right;
    margin-right: 20px;
    ul li{
    	float: left;
    	margin-left: 5px;
    	padding: 5px 10px;
    	margin-top: 23px;
      border-left: 1px solid #E1E1E1;
    }

    ul li a{
    	font-size: 16px;
    	margin-left: 22px;
    	color: #606B70;
    	display: inline-block;

    }

    ul li a:hover{
    	color: #377AB7 !important;
    }
  }
}
/*主体内容部分*/
.css-body{
	padding-top: 34px;
	width: 100%;
	height: 580px;
	background: url(./assets/img/bg.png) no-repeat center center;
	background-size: cover;

  border-bottom:40px solid #4FB4D2;
  .css-body-bg {
    position:absolute;
    top:190px;
    left:55%;
  }
  .css-body-ad{
  	text-align: left;
    color: white;
    position:absolute;
    top:280px;
    left:28%;
    z-index:"1";
    .css-body-ad-title {
      font-size: 36px;
    }
    .css-body-ad-engtitle {
      font-size: 19px;
    }
    .css-body-ad-desc {
      font-size: 12px;
      width: 295px;
    }
  }

  .css-body-btn{
  	text-align: left;
  	margin-top: 10px;
  	margin-left: 375px;
    .css-body-btn-img {
        float:left;
    		width: 20px;
    		margin-left: 35px;
    		margin-top: 15px;
    		margin-right: 10px;
    }
    .css-body-btn-desc {
        float:left;
        width: 70%;
        font-family: arial;
        font-size: 12px;
        margin-top: 2px;

    }
    a{
    	display: inline-block;
    	width: 260px;
    	height: 56px;
    	line-height: 54px;
    	font-size: 18px;
    	color: #ededff;
    	background: rgb(48,169,190);
    	border-radius: 25px;
    	margin: 0 10px;
    	box-shadow: 4px 4px rgba(0,0,0,0.1);


    	transition: background .3s, color .3s, border .3s;
    	-moz-transition: background .3s, color .3s, border .3s; /* Firefox 4 */
    	-webkit-transition: background .3s, color .3s, border .3s; /* Safari 和 Chrome */
    	-o-transition: background .3s, color .3s, border .3s; /* Opera */
    }
    a:hover{
      background: rgb(53, 197, 212);
      color: #ededff;
    }
  }

}
@media screen and (max-width: 1260px) {
	.css-body{
		width: 1260px;
	}
}
/*介绍栏*/
.css-intro{
	width: 100%;
	margin-top: 80px;
	padding: 20px;
	text-align: center;
  .css-intro-title{
  	width: 1200px;
  	margin: 0 auto;
  	font-size: 18px;
  	color: #606B70;
    width:100%;
    padding:0px 0% 0px 44%;
    height:50px;
    .css-intro-title-img {
      margin-right: 5px;
    }
    .css-intro-title-ask {
      float:left;
      border-bottom: 1px solid #4FB4D2;
      font-size: 24px;
      line-height: 45px;
    }
  }
  .css-intro-content{
  	width: 550px;
  	margin: 0 auto;
  	font-size: 14px;
  	color: #676767;
  }
}

@media screen and (max-width: 1260px) {
	.css-intro{
		width: 1260px;
	}
}
</style>
