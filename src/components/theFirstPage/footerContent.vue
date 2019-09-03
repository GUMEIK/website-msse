<template>
<div class="footer">
    <!-- <div class="line"></div> -->
    <hr>
    <span>Msse</span>
    <P>世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活。</P>
    <el-link>默认链接</el-link>
    
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
         <div style="width:350px;margin:0 auto; padding:5px 0;">
        <a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;" />
            <p style="float:left;height:20px;width:auto;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">Copyright © 2019 Msse &nbsp;&nbsp; 鲁ICP备19023307号</p>
        </a>
    </div>
    <div style="width:300px;margin:0 auto; padding:5px 0;">
    <img src="../../assets/beian.png" alt="" class="beian">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41081102000160" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;" />
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">豫公网安备 41081102000160号</p>
        </a>
    </div>

  

</div>
</template>

<style scoped>


img.beian{
    width: 20px;
    height: 20px !important;
}

.footer hr {
    margin-top: 10px;
    background-color: #ddd;

}

.footer span {
    margin-top: 15px;

    display: block;
    margin-top: 15px;
    text-align: left !important;
    align-self: left;
    font-size: 20px;

}

.footer p {
    margin-top: 15px;
    text-align: left;
}
</style><style>
.el-link {
    padding: 40px !important;
    font-size: 17px !important;
}
</style>
