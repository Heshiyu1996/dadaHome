<template>
  <div>
      <div id="header-2017">
    		<div class="css-login" style="display:flex">
          <div style="flex:2"></div>
          <div class="css-login-btn">
            <a href="http://www.dadahome3d.com/login">
              企业登录
            </a>
            <!-- |
            <a href="#">
              注册
            </a> -->
          </div>
            <div style="flex:2"></div>
    		</div>
    		<div class="css-header">
    			<div class="css-header-left">
    				<a href="javascript:void(0)" @click="scroll('Index');">
              <img src="./assets/img/logo.png">
            </a>
    			</div>
    			<div class="css-header-center">
    				<ul>
    					<li>
    						<a href="javascript:void(0)" @click="scroll('Index');"> 首页</a>
    					</li>
    					<li>
    						<a href="javascript:void(0)" @click="scroll('APP');"> 搭搭家APP</a>
    					</li>
    					<li>
    						<a href="javascript:void(0)" @click="scroll('3D');"> 3D效果设计</a>
    					</li>
    					<li>
    						<a href="javascript:void(0)" @click="scroll('Custom');"> 客户案例</a>
    					</li>
    					<li>
    						<a href="javascript:void(0)" @click="scroll('Company');"> 公司简介</a>
    					</li>
    					<li style="border-right: 1px solid #E1E1E1;">
    						<a href="javascript:void(0)" @click="scroll('Contact');"> 联系我们</a>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>

      <div class="css-body " id="Index">
        <img class="css-body-bg" src="./assets/img/bg1.png"></img>
         <div class="css-body-ad">
            <div class="css-body-ad-title">搭搭家</div>
            <div class="css-body-ad-engtitle">DADAHOME</div>
            <div class="css-body-ad-desc">搭搭家APP是一款SaaS模式的企业移动销售云服务展示软件系统，专门为企业提供更高效更优质的品牌营销，产品展示，网络传播，以及强大的产品即时搭配功能等服务。 </div>
            <div class="css-body-ad-btn">
              <a href="javascript:void(0)" @click="scroll('Contact');">
                <img  class="css-body-ad-btn-img" src="./assets/img/iphone.png" />
                    <div  class="css-body-ad-btn-desc">
                      S E E &nbsp;&nbsp;O N &nbsp;&nbsp;A P P S T O R E

                    </div>

              </a>
            </div>
        </div>
        <!-- <img class="css-body-bg" src="./assets/img/ad_ipad.png" /> -->
        <div class="clearfix"></div>
      </div>
      <div class="css-line"></div>
    	<div class="css-intro" id="APP">
    		<div class="css-intro-title">
          <div style="flex:1"></div>
          <div>
            <img class="css-intro-title-img" src="./assets/img/icon_Ask.png" />
      			<div class="css-intro-title-ask">什么是搭搭家？</div>
          </div>
          <div style="flex:1"></div>
    		</div>
    		<div class="css-intro-content">
    			搭搭家APP是一款SaaS模式的企业移动销售云服务展示软件系统，专门为家具品牌企业提供更高效更优质的品牌营销，产品展示，网络传播，以及强大的产品即时搭配功能等服务。
    		</div>
    	</div>
    	<div class="css-intro">
    		<div class="css-intro-title">
          <div style="flex:1"></div>
          <div>
            <img class="css-intro-title-img" src="./assets/img/icon_Ask.png" />
      			<div class="css-intro-title-ask">搭搭家解决什么问题？</div>
          </div>
          <div style="flex:1"></div>
    		</div>
        <div class="css-intro-content2" style="width:1240px;">
        			<div style="width:955px;margin:0 auto">
                <div class="css-intro-content2-card">
          				<div style="height:30%">
                    <img class="css-intro-content2-card-icon" src="./assets/img/onCloud.png" />
                    <div class="css-intro-content2-card-name">云端技术</div>
                  </div>
          				<div class="css-intro-content2-card-desc extraH">
                    大部分家具厂家依然停留在纸质媒介的传统传播手段，如图册，折页等，但非常遗憾，这种传统的传播途径明显已经跟不上移动网络时代传播的节奏和脚步，通过搭搭家APP系统的云端技术，网络传播，轻松打通所有客户渠道，所有的经销商，专卖店，只要下载一个软件，就能轻松开始做营销了!
                  </div>
          			</div>
          			<div class="css-intro-content2-card marginLf">
          				<div style="height:30%">
                    <img class="css-intro-content2-card-icon" src="./assets/img/onSpace.png" />
                    <div class="css-intro-content2-card-name">海量空间</div>
                  </div>
          				<div class="css-intro-content2-card-desc extraH" style="">
                    每间家具厂家都有大量的产品图片需要处理，但大部分还是停留在简单的单张图片保存，整理效率和传播效率都非常低下，通过软件后台有序列地管理，大大提高整理效果和产品档案归类，并且能够通过网络瞬间传播，这是纸质媒介没办法达到的效果，而且云端海量空间，再多的图片也不用担心。
                  </div>
          			</div>
          			<div class="css-intro-content2-card marginLf">
          				<div style="height:30%">
                    <img class="css-intro-content2-card-icon" src="./assets/img/onUpdate.png" />
                    <div class="css-intro-content2-card-name">灵活更新</div>
                  </div>
          				<div class="css-intro-content2-card-desc" style="height:70%">
                    每间家具厂，每年都会推出新产品，但是旧图册是没办法瞬间更新的，又只能重新排版，重新印刷，年复一年不断付出高成本的图册费用，软件则不存在这种问题，随时上传，随时更新，随时传播，随时编辑，而且我们的软件是一次性收费，每年只需要付极少的网络空间储存费用，就可以使用了，成本大大的降低了。
                  </div>
          			</div>
                <div class="clearfix"></div>
              </div>
    		</div>

    	</div>
    	<div class="css-intro">
    		<div class="css-intro-title">
            <div style="flex:1"></div>
            <div>
              <img class="css-intro-title-img" src="./assets/img/icon_DA.png" />
        			<div class="css-intro-title-ask">搭搭家功能介绍</div>
            </div>
            <div style="flex:1"></div>
    		</div>
    		<div class="css-intro-content3" style="width:1240px;">
      		<div style="margin:0 auto;width:1035px;">
            <div class="css-intro-content3-card">
                <div style="height:187.22px">
                    <img class="css-intro-content3-card-icon" src="./assets/img/func_Build.png" />
                    <div class="css-intro-content3-card-name" >快速搭配</div>
                    <div class="css-intro-content3-card-desc">
                      强大的智能搭配功能，销售人员能帮客户3秒内完成产品搭配方案展示
                    </div>
                </div>
                <div style="height:70%;margin-top:75px">
                    <img class="css-intro-content3-card-icon" src="./assets/img/func_3D.png" />
                    <div class="css-intro-content3-card-name">3D展现</div>
                    <div class="css-intro-content3-card-desc">
                      3D虚拟现实效果,720全景展示,让客户马上看出一整个系列搭配下来的空间效果，如同身临其境
                    </div>
                </div>
            </div>

            <div class="css-intro-content3-card2" style="width:auto">
                <img class="css-intro-content3-card2-img" src="./assets/img/img_funcIntro.png" />
            </div>

            <div class="css-intro-content3-card" style="margin-left:30px;">
                <div style="height:70%">
                    <img class="css-intro-content3-card-icon" src="./assets/img/func_Spread.png" />
                    <div class="css-intro-content3-card-name">高速传播</div>
                    <div class="css-intro-content3-card-desc">
                      高速传播,微信,朋友圈,QQ,微博,随时随地传播品牌信息,大大提高了线下业务人员的营销效率
                    </div>
                </div>
                <div style="height:70%;margin-top:75px">
                    <img class="css-intro-content3-card-icon" src="./assets/img/func_Storage.png" />
                    <div class="css-intro-content3-card-name">可视化数据</div>
                    <div class="css-intro-content3-card-desc">
                      数据化运营,将一切可记录的数据可视化，综合情况，让厂家在产品设计，地区性销售策略有了可靠的数据支持
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
          </div>
      		</div>
    	</div>
    	<div class="css-shower">
    		<div class="css-shower-title">
    			<div>为什么选择搭搭家？</div>
    		</div>
    	</div>
    	<div class="css-intro2">
    		<div class="css-intro2-content" style="width:960px;">
    			<div class="css-intro2-content-title">
              <img class="css-intro2-content-title-icon" src="./assets/img/why_VS.png" />
    					<div class="clearfix"></div>
              <div class="css-intro2-content-title-name" style="text-align:right;padding-right:45px">搭搭家APP</div>
              <div class="css-intro2-content-title-name"style="padding-left:55px;width:50%;float:left;text-align:left">一般图册</div>
    			</div>
    			<div class="css-intro2-content-analysis">
              <img class="css-intro2-content-analysis-img" src="./assets/img/why_analysis.png" />
    			</div>
    		</div>
    	</div>
      <div class="css-shower2"  id="3D" style="margin-top:0px">
        <div class="css-shower2-title">
          <div>什么是家具产品3D效果设计</div>
          <div class="css-shower2-title-smalltitle">
              <div style=" flex: 1"></div>
              <div class="css-shower2-title-smalltitle-desc">大部分厂家,对于产品打样,产品拍摄都非常头疼,而通过3Dmax快速建立产品模型,快速决定产品打样效果;搭配合适的效果场景,搭配不同的产品颜色和组合,渲染出比一般摄影棚都要好的产品效果图,正是家具产品3D效果设计的核心功能。</div>
              <div style=" flex: 1"></div>
          </div>
        </div>
      </div>
      <div class="css-intro" style="margin-top:25px">
    		<div class="css-intro-title">
          <div style="flex:1"></div>
            <div>
              <img class="css-intro-title-img" width="41px" height="41px" src="./assets/img/icon_Fire.png" />
        			<div class="css-intro-title-ask">火炬3D设计团队</div>
            </div>
          <div style="flex:1"></div>
    		</div>
    		<div class="css-intro-content 3Ddesc" style="text-align:justify;width:810px;height:150px;padding:40px 0px;">
    			我司旗下的火炬3D设计团队,拥有多位资深3D设计师,专门为家具厂家客户,家具电商客户提供专业的3D效果设计服务,也为搭搭家APP用户提供重要的效果设计支持!我们团队提供完整优质的3D服务,包括产品建模,场景设计,效果渲染,3D动画视频制作等
    		</div>

				<div class="css-intro-content3" style="width:1160px;">
					<div class="css-intro-content3-3D">
						<div class="css-intro-content3-3D-item">
              <div>
                <img class="css-intro-content3-3D-item-pic" height="100%" src="./assets/img/3D_Quick.png" />
              </div>
              <div class="css-intro-content3-3D-item-title">快速高效</div>
              <div class="css-intro-content3-3D-item-desc">家具产品高效打样!产品模型随意更改,能够快速确定好新产品的设计. </div>
            </div>
						<div class="css-intro-content3-3D-item">
              <div>
                <img class="css-intro-content3-3D-item-pic" height="100%" src="./assets/img/3D_Save.png" />
              </div>
              <div class="css-intro-content3-3D-item-title">省力省钱</div>
              <div class="css-intro-content3-3D-item-desc">出图高效,成本低廉!不用实物打样,不用影棚拍摄,省时省力省钱,直接渲染出图. </div>
            </div>
						<div class="css-intro-content3-3D-item">
              <div>
                <img class="css-intro-content3-3D-item-pic" height="100%" src="./assets/img/3D_DIY.png" />
              </div>
              <div class="css-intro-content3-3D-item-title">随心所欲</div>
              <div class="css-intro-content3-3D-item-desc">颜色和组合任意变化!实物拍摄必须所有产品生产出来,而3D效果在软件里能任意变化颜色和组合. </div>
            </div>
						<div class="css-intro-content3-3D-item">
              <div>
                <img class="css-intro-content3-3D-item-pic" height="100%" src="./assets/img/3D_Real.png" />
              </div>
              <div class="css-intro-content3-3D-item-title">真实体验</div>
              <div class="css-intro-content3-3D-item-desc">AR/VR虚拟现实时代来临!VR时代的来临,产品3D模型化正是这一切的基础. </div>
            </div>
					</div>
				</div>

    	</div>
      <div class="css-intro" id="Custom" style="margin-top:140px;">
    		<div class="css-intro-title">
          <div style="flex:1"></div>
      			<div class="css-intro-title-ask" style="border-bottom:0px solid white;color:black">客户案例</div>
          <div style="flex:1"></div>
        	</div>
        <div class="css-intro-content3" style="width:1240px;">
          <div style="margin: 0 auto;width:1150px;">
            <div class="css-intro-content3-example">
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P1.png"/>
                <div style="">舒适健康床垫</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P2.png" />
                <div style="">高级牛皮地毯</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P3.png" />
                <div style="">现代茶几电视柜组合</div>
      				</div>
            </div>
            <div class="css-intro-content3-example">
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P4.png" />
                <div style="">高档美式沙发</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P5.png" />
                <div style="">快乐儿童木床</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P6.png" />
                <div style="">北欧简约皮床</div>
      				</div>
            </div>
            <div class="css-intro-content3-example">
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P7.png" />
                <div style="">高档办公沙发</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P8.png" />
                <div style="">高档美式实木床</div>
      				</div>
              <div class="css-intro-content3-example-item">
                <img src="./assets/img/cus_P9.png" />
                <div style="">板式高低儿童床</div>
      				</div>
            </div>
          </div>
        </div>
        <div class="css-intro-btnmore">
					<a href="javascript:void(0)" @click="scroll('Contact');">
            <span>联系我们</span>
          </a>
        </div>
      </div>

      <div class="css-team" id="Company">
			  <div>公司简介</div>
				<div class="css-team-title">
              <div style="flex: 1"></div>
              <div style="width:880px;font-size:16px;font-family:'宋体';text-align:center">
                   佛山市楚翘科技有限公司是一家年轻活力，创意无限，追逐梦想的高新技术型公司，经过多年的发展，旗下拥有搭搭家APP团队，火炬3D设计团队，德宝电商团队，致力于为所有家具厂家和电商客户提供最优质的品牌营销，产品展示与运营咨询等综合型服务。我司旗下每个团队虽然都有不同的功能和目标，但其终极使命都是为了让家具行业得到更好的发展，竭尽全力帮助每一个家具人实现自己心目中的理想！</div>
              <div style=" flex: 1"></div>
				</div>
				<div class="clearfix"></div>
			</div>
      <div class="css-intro">
				<div class="css-intro-team">
					搭搭家APP团队
				</div>
				<div class="css-intro-content3 TeamTitle">
					搭搭家APP团队，位于广州大学城，由多家资深软件工程师组成，专门负责设计企业移动销售云服务展示软件系统--搭搭家。
				</div>
				<div class="css-intro-content3 TeamIntro">
					<div style="" class="css-intro-content3-example IAmTeam">
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_Building.jpg" />
              <div style="">搭搭家办公大楼</div>
            </div>
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_Office.jpg" />
              <div style="">搭搭家办公环境</div>
            </div>
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_Member.jpg" />
              <div style="">搭搭家开发团队</div>
            </div>
					</div>
				</div>
			</div>
      <div class="css-intro" style="margin-top:120px">
				<div class="css-intro-team">
					火炬3D设计团队
				</div>
				<div class="css-intro-content3 TeamTitle">
					火炬3D设计团队,位于顺德龙江镇,团队拥有多年3D效果设计经验,一直为本地家具厂家和电商客户提供优质的3D设计服务
				</div>
				<div class="css-intro-content3 TeamIntro">
					<div style="" class="css-intro-content3-example IAmTeam">
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_3DBuilding.jpg" />
              <div style="">火炬3D办公大楼</div>
            </div>
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_3DOffice.jpg" />
              <div style="">火炬3D办公环境</div>
            </div>
						<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_3DMembers.jpg" />
              <div style="">火炬3D设计团队</div>
            </div>
					</div>
				</div>
			</div>
      <div class="css-intro" style="margin-top:120px">
  			<div class="css-intro-team">
  				德宝电商团队
  			</div>
  			<div class="css-intro-content3 TeamTitle">
  				德宝电商团队,位于顺德龙江镇,专门为电商客户提供品牌设计,网店装修,店铺运营咨询等服务.
  			</div>
  			<div class="css-intro-content3 TeamIntro">
  				<div style="" class="css-intro-content3-example IAmTeam">
  					<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_DBBuilding.jpg" />
              <div style="">德宝电商办公大楼</div>
            </div>
  					<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_DBOffice.jpg" />
              <div style="">德宝电商办公环境</div>
            </div>
  					<div class="css-intro-content3-example-item">
              <img src="./assets/img/team_DBMembers.jpg" />
              <div style="">德宝电商运营团队</div>
            </div>
  				</div>
  			</div>
  		</div>
			<div class="clearfix"></div>

      <div class="css-shower2" style="margin-top:180px;padding:4%" id="Contact">
				<div class="css-shower2-title IAmContact">
	        <div class="css-contact-both"></div>
        	<div class="css-contact-center" style="padding-left:40px">
            <img src="./assets/img/contact_Call.png" />
            <div >电话 : 0757-2338 6213</div>
          </div>
        	<div class="css-contact-center">
            <img src="./assets/img/contact_QQ.png" />
            <div>QQ：121439330/576006494</div>
          </div>
	        <div class="css-contact-both"></div>
				</div>
				<div class="css-shower2-title IAmContact" style="margin-top:10px">
  	        <div class="css-contact-both"></div>
            <div class="css-contact-center" style="width:660px;padding-left:10px">
              <img src="./assets/img/contact_Addr.png" />
              <div>地址 : 佛山市顺德区龙江镇涌口乐龙国际创意城E座303 </div>
            </div>
  	        <div class="css-contact-both"></div>
				</div>
			</div>

      <div class="clearfix"></div>

     <div class="css-footer">
    		<div class="css-footer-box">
    			<div style="flex:1"></div>
          <div style="width:600px;">
            <a href="javascript:void(0)" @click="scroll('APP');">
              <div class="css-footer-box-link">搭搭家APP</div>
            </a>
            <a href="javascript:void(0)" @click="scroll('3D');">
      			     <div class="css-footer-box-link">火炬3D</div>
            </a>
            <a href="javascript:void(0)" @click="scroll('Custom');">
      			     <div class="css-footer-box-link">客户案例</div>
            </a>
            <a href="javascript:void(0)" @click="scroll('Company');">
      			     <div class="css-footer-box-link">公司简介</div>
            </a>
            <a href="javascript:void(0)" @click="scroll('Contact');">
      			     <div class="css-footer-box-link" style="border-right:0px solid #62656A">联系我们</div>
            </a>
          </div>
          <div style="flex:1"></div>
        </div>
     		<div class="css-footer-box">
     			<div style="flex:1"></div>
           <div>
             <a href="javascript:void(0)" @click="scroll('Index');">
               <img src="./assets/img/logoOnFoot.png" />
             </a>
     			 </div>
           <div style="flex:1"></div>
         </div>
         <div class="css-footer-box" style=";">
      			<div style="flex:1"></div>
            <div>
                版权所有 © 2017 佛山市楚翘科技有限公司 粤ICP备17073358号-1
      			 </div>
            <div style="flex:1"></div>
          </div>
    		<div class="clearfix"></div>
    	</div>

  		<div class="clearfix"></div>
  </div>
</template>

<script>
import jQuery from './assets/js/jquery-3.1.1.min.js'
import scroll from './assets/js/hovertreescroll.js'
export default {
  data(){
    return{
    }
  },
  methods:{
  	scroll(id) {
      // alert(1)
  		$("#" + id).HoverTreeScroll(800);
  	}
  }

}
</script>

<style lang="scss" scoped>
/*头部*/
#header-2017{
	width: 100%;
	height: 140px;
	background: #fff;
  position:fixed;
  top: 0px;
  border-bottom:1px solid #CFCFCF;
  box-shadow: 0 0 5px #888;
  z-index:999;
}

@media screen and (max-width: 1260px) {
	#header-2017{
		width: 1260px;
	}
}

.css-login {
	width: 100%;
  text-align: right;
  padding: 10px 0px;
  margin:0 auto;
  height: 40px;
  background-color: #E1E1E1;
  font-size: 12px;
  color:#666666;
  .css-login-btn {
    line-height: 20px;
    width:1140px;
    padding-right:20px
  }
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
    	width: 87px;
    	margin-top: 10px;
    }
  }
  .css-header-center {
    float: right;
    margin-right: 20px;
    ul li{
    	float: left;
    	// margin-top: 23px;
      border-left: 1px solid #E1E1E1;
      width: 120px;
    }

    ul li a{
      line-height: 27px;
      display: block;
    	font-size: 16px;
    	color: #606B70;
      text-align: center;
    	padding: 35px 10px;
      height:100px;

      transition: background .3s, color .3s, border .3s;
      -moz-transition: background .3s, color .3s, border .3s; /* Firefox 4 */
      -webkit-transition: background .3s, color .3s, border .3s; /* Safari 和 Chrome */
      -o-transition: background .3s, color .3s, border .3s; /* Opera */

    }

    ul li a:hover{
      background: #4FB4D2;
      color: white;
      box-shadow: 1px 1px rgba(0,0,0,0.1);
    }
  }
}
/*主体内容部分*/
.css-body{
	// background: url(./assets/img/bg1.png)   ;
	background-size: cover;
  // background: url("/static/img/bg1.c36ac8f.png") no-repeat;
  margin-top: 140px;
  .css-body-ad{
  	text-align: left;
    color: white;
    position:absolute;
    top:300px;
    left:80px;
    .css-body-ad-title {
      font-size: 60px;
    }
    .css-body-ad-engtitle {
      font-size: 28px;
      letter-spacing: 2.7px;
    }
    .css-body-ad-desc {
      margin-top: 10px;
      width: 435px;
      font-family: '微软雅黑';
      letter-spacing: 2px;
      font-weight: lighter;
      line-height: 25px;
      text-align: justify;
      text-justify: inter-ideograph;/*IE*/
    }

    .css-body-ad-btn{
    	text-align: left;
        color: white;
        position:absolute;
        top:230px;
        left:-15px;
      .css-body-ad-btn-img {
          float:left;
      		width: 20px;
      		margin-left: 35px;
      		margin-top: 15px;
      		margin-right: 10px;
      }
      .css-body-ad-btn-desc {
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

}
@media screen and (min-width:1px) and (max-width: 1260px) {
  .css-body {
    width: 1260px;
  }
	.css-body-bg{
    width: 1260px;
    height: 514px;
	}
  .css-body-ad {
    top: 300px !important;
    left: 80px !important;
  }
  .css-line {
    width: 1260px !important;
  }
}
@media screen and (min-width: 1260px) and (max-width: 1340px) {
	.css-body-bg{
		width: 100%;
	}
  .css-line {
    width: 1260px;
  }
}
@media screen and (min-width: 1340px) {
	.css-body-bg{
		width: 100%;
	}
  .css-line {
    width: 1260px;
  }
}
@media screen and (min-width: 1640px) {

  .css-body-ad {
    top: 360px !important;
    left: 250px !important;
  }
}
/*介绍栏*/
.css-intro{
  float:left;
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
    display: flex;
    // padding:0px 0% 0px 44%;
    height:50px;
    .css-intro-title-img {
      float:left;
      margin-right: 5px;
    }
    .css-intro-title-ask {
      float:left;
      border-bottom: 1px solid #4FB4D2;
      font-size: 34px;
      line-height: 45px;
      letter-spacing: 3px;
    }
  }
  .css-intro-content3 {
      width: 1200px;
      margin: 0 auto;
      margin-top: 60px;
      color: #606B70;

      .css-intro-content3-card {
        float:left;
        width:26%;
        .css-intro-content3-card-icon {
          padding: 5px;
          width: 25%;
          height: 51px;
        }
        .css-intro-content3-card-name {
          margin: 10px 0px 15px 0px;
          font-size: 26px;
          color: black;

        }
        .css-intro-content3-card-desc {
          margin-top: 10px;
          font-family: '宋体';
          font-size: 15px;
          color: #676767;
          text-align: justify;
          text-justify: inter-ideograph;
          line-height: 20px;
          letter-spacing: 0.4px;
        }
      }
      .css-intro-content3-card2 {
        margin-left:35px;
        float:left;
        width:40%;
        padding: 15px 0px;

        .css-intro-content3-card2-img {
          height: 330px
        }
      }
      .css-intro-content3-3D {
        height:240px;
        .css-intro-content3-3D-item {
          float:left;
          width:22%;
          height:100%;
          margin:0px 13px;
          .css-intro-content3-3D-item-pic {
            width:260px;
            height: 175px;
            border-radius:5px;
          }
          .css-intro-content3-3D-item-title {
            height:60px;
            padding:20px 0px;
            font-size:20px;
          }
          .css-intro-content3-3D-item-desc {
            padding-left:10px;
            font-size: 14px;
            font-weight: lighter;
            font-family: '宋体';
            line-height: 25px;
            width: 240px;
            margin: 0 auto;
            text-align: center;
          }
        }
      }
      .css-intro-content3-example {
        width:100%;
        height:330px;
        margin-top: 35px;
        img {
          float:left;
          width:365px;
          height:290px;
        }

        .css-intro-content3-example-item {
          float:left;
          border:1px solid #D2D2D2;
          width:365px;
          height:100%;
          margin:0px 9px;
          div {
            height:30px;
            width:100%;
            float:left;
            font-size:21px;
            margin:2px 0px;
            padding:4px 0px;
            font-family: '黑体';
          }
        }

        &.IAmTeam {
          width:100%;
          height: 100%;
          display:flex;
          div {
            width:220px;
            float:left;
            font-size:15px;
            margin:2px 0px;
          }
          img{
            float:left;
            width:335px;
            height:220px;
          }
          .css-intro-content3-example-item {
            width:100%;
            float:left;
            border:0px solid #D2D2D2;
            height:250px;
            margin:0px 9px;
            div {
              height:30px;
              width:100%;
              float:left;
              font-size:16px;
              font-weight: lighter;
              background-color: #30A9BE;
              color: #FFFFFF;
              font-family: '宋体';
              text-align: left;
              padding-left: 15px;
              padding-top: 6px;
              margin-top: -1px;
            }
          }
        }
      }
      &.TeamTitle {
        margin-top: 15px;
        letter-spacing:1px;
        font-family:'宋体';
      }
      &.TeamIntro{
        width:1050px;
        margin-top:40px;
      }
  }
  .css-intro-content2 {
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    margin-top: 20px;
    color: #606B70;
    .css-intro-content2-card {
      float:left;
      width:265px;
      &.marginLf {
        margin-left:80px;
      }
      .css-intro-content2-card-icon {
        padding: 5px;
        width: 30%;
      }
      .css-intro-content2-card-name {
        font-size: 18px;
        color: black;
        margin: 10px 0px 15px 0px;
      }
      .css-intro-content2-card-desc {
        font-family: '宋体';
        color: #676767;
        line-height: 25px;
        font-size: 14px;
        text-align: justify;
        text-justify: inter-ideograph;
        &.extraH {
          height:70%
        }
      }
    }
  }
  .css-intro-content {
  	width: 760px;
  	margin: 0 auto;
  	font-size: 18px;
  	color: #676767;
    text-align: justify;
    text-justify: inter-ideograph;
    letter-spacing: 1px;
    font-family: '微软雅黑';
    font-weight: lighter;;
    margin-top: 30px;
  }

  .css-intro-content4 {
  	margin: 0 auto;
  	color: #676767;
    width:800px;
    font-size:12px;
    font-family:'宋体';
    text-align:center;
    margin: 5px auto 25px;
  }
  /*查看更多*/
  .css-intro-btnmore {
    	text-align: center;
    	margin-top: 30px;

    a{
    	display: inline-block;
    	width: 260px;
    	height: 56px;
    	line-height: 54px;
    	font-size: 18px;
    	color: white;
    	background: #30A9BE;
    	border-radius: 25px;
    	margin: 0px 10px 40px;
    	box-shadow: 4px 4px rgba(0,0,0,0.1);
      font-family: '宋体';

    	transition: background .3s, color .3s, border .3s;
    	-moz-transition: background .3s, color .3s, border .3s; /* Firefox 4 */
    	-webkit-transition: background .3s, color .3s, border .3s; /* Safari 和 Chrome */
    	-o-transition: background .3s, color .3s, border .3s; /* Opera */
    }

    a span{
      padding-left: 10px;
      font-family: '宋体';
    	font-size: 14px;
    	letter-spacing: 10px;
    }

    a:hover{
    	background: rgb(53, 197, 212);
    	color: white;
    }
  }

  .css-intro-team {
  	width: 1200px;
  	margin: 0 auto;
  	font-size: 38px;
  	color: rgb(64,160,208);
  }
}

@media screen and (max-width: 1260px) {
	.css-intro{
		width: 1260px;
	}
}

/*介绍栏2*/
.css-shower{
	width: 100%;
	background: #4FB4D2;
	margin-top: 40px;
  position:relative;
  float:left;
  height:150px;
  text-align: center;

  .css-shower-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  	letter-spacing: 2px;
  	font-family: '微软雅黑';
  	color: #fff;
  	font-size: 48px;
  	letter-spacing: 2px;
    font-weight: normal;
  }
}

@media screen and (max-width: 1260px) {
	.css-shower{
		width: 1260px;
	}
}

.css-intro2 {
  float:left;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color:#F4F4F4;
  .css-intro2-content {
      width: 1200px;
      margin: 0 auto;
      font-size: 12px;
      margin-top: 10px;
      color: #606B70;
      .css-intro2-content-title {
        width:100%;
        height:100px;
        .css-intro2-content-title-icon {
            padding: 5px;
            height: 100%;
        }
        .css-intro2-content-title-name {
            width:50%;
            margin: 15px 0px 20px 0px;
            float:left;
            font-size: 18px;
            font-weight: lighter;

        }
      }
      .css-intro2-content-analysis {
            float:left;
            height:815px;
            margin-left: -60px;
            .css-intro2-content-analysis-img{
              height:85%;
            }
      }
  }
}

@media screen and (max-width: 1260px) {
	.css-intro2{
		width: 1260px;
	}
}

/*介绍栏2*/
.css-shower2{
	width: 100%;
	background: #4FB4D2;
	margin-top: 40px;
  position:relative;
  float:left;
  text-align: center;
  padding: 15px 0px;

  .css-shower2-title {
  	letter-spacing: 2px;
  	font-family: '微软雅黑';
  	color: #fff;
  	font-size: 36px;
  	letter-spacing: 2px;
    font-weight: normal;
    padding: 65px 0px;
    &.IAmContact {
      width:100%;
      height:30px;
      padding: 0px;
      font-size:20px;
      display:flex;
      font-weight: lighter;
      margin-top: 0px;
      .css-contact-both {
        flex: 1;
      }
      .css-contact-center {
        font-size: 22px;
        width: 360px;
        font-weight: 600;
        img {
          float:left;
          width:25px;
          height:25px
        }
        div {
          float:left;
          margin-left:5px;
        }
      }
    }
      .css-shower2-title-smalltitle {
        font-size:14px;
        margin-top:10px;
        display:flex;
        .css-shower2-title-smalltitle-desc {
          width:840px;
          font-size:16px;
          font-family:'宋体';
          text-align:left;
          margin-top:15px;
        }
      }
  }
}

@media screen and (max-width: 1260px) {
	.css-shower2{
		width: 1260px;
	}
}


/*中间大横幅*/
.css-team{
  float: left;
	width: 100%;
	height: 350px;
	background: url(./assets/img/team_title0.png) no-repeat center center;
	background-size: cover;
  letter-spacing: 2px;
  font-family: '微软雅黑';
  color: #fff;
  font-size: 42px;
  letter-spacing: 2px;
  font-weight: normal;
  padding: 80px 0px;
  text-align:center;

  .css-team-title {
    display:flex;
    letter-spacing: 2px;
    font-family: '微软雅黑';
    color: #fff;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: normal;
    margin-top: 20px;
    line-height: 30px;
  }
}

@media screen and (max-width: 1260px) {
	.css-team{
		width: 1260px;
	}
}

/*底部版权*/
.css-footer{
  float: left;
	width: 100%;
	height:300px;
	background: rgb(54,58,67);
  .css-footer-box {
  	// width: 1140px;
  	text-align: center;
  	padding-top: 50px;
    display:flex;
    div {
    	color: rgb(175,175,175);
    	font-size: 16px;
    	font-weight: normal;
    }
    .css-footer-box-link {
      font-size: 18px;
      font-weight: lighter;
      float:left;
      width:120px;
      height:30px;
      line-height:30px;
      border-right:1px solid #62656A
    }
  }
}

@media screen and (max-width: 1260px) {
	.css-footer{
		width: 1260px;
	}
}
.css-line {
  width:100%;
  border-top:40px solid #4FB4D2;
  margin-top:-6px;
}
</style>
