<template>
<div class="itemCentor">
    
        
    
    <el-steps :active="4" align-center>
        <el-step title="项目名称" description="项目的技术栈类型和项目名称"></el-step>
        <el-step title="提交时间" description="项目的生产版本发布时间"></el-step>
        <el-step title="项目简介" description="简洁描述项目的主要内容"></el-step>
        <el-step title="查看详情" description="进入项目,进行相关体验"></el-step>
    </el-steps>
    <div class="block">
        <el-timeline>

            <el-timeline-item timestamp="2019/6/2" placement="top">
                <el-card>
                    <h4>Vue+Vuex+Node+Axios+Vue-cli 学生信息管理系统</h4>
                    <h5>项目简介：</h5>
                    <p>提交于 2019/4/2 20:46</p>
                    <p>前后端分别采用vue-cli脚手架与node.js开发。<br>
                        实现了 学生信息查看、关键词搜索、学生信息编辑、新增以及删除学生信息等<br>
                        是第二个独立完成的全栈项目，所有接口都是独立实现完成。<br>
                        前端用axios进行数据请求，后端用nodejs接收并进行处理。<br>
                        对Vue以及Vuex的使用有了更深的认识，对组件间数据通信收获了一定的经验 <br>
                        加深了对前后端数据传输以及网络请求的整个流程的认识
                    </p>
                    <div class="detail">
                        <!-- 学生管理系统 -->
                        <a href="http://www.msse.vip/item/student/index.html">查看详情</a>
                    </div>

                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2019/4/12" placement="top">
                <el-card>
                    <h4>Vue+Express+Axios 在线聊天室-小云盘</h4>
                    <h5>项目简介：服务器端采用Express框架，前端使用Vue框架，实现了多人在线聊天功能；也实现了文件的上传，并实现了图片的预览和下载功能</h5>
                    <p>提交于 2019/4/2 20:46</p>
                    <p>本次项目用到了Express、Vue框架以及mysql、cookie-parse、nulter等包<br>
                        是本人第一个独立完成的全栈项目，所有接口都是独立实现完成。<br>
                        前端用axios进行数据请求，后端用Express接收并进行处理。<br>
                    </p>
                    <div class="detail">

                        <a href="http://www.msse.vip/item/login/">查看详情</a>
                    </div>

                </el-card>
            </el-timeline-item>

            <el-timeline-item timestamp="2018/12/3" placement="top">
                <el-card>
                    <h4>gulp+Zepto.JS+less+audio 音乐播放器</h4>
                    <h5>
                        功能：播放暂停，切换歌曲，专辑图片旋转，拖动进度条控制播放位置 <br>

                    </h5>
                    <p>提交于 2018/12/3 11:46</p>
                    <p>收获： 通过本地的模拟数据，运用ajax获取数据，通过数据渲染页面的结构和播放的曲目、时间等 <br>
                        运用了模块化思想将每个功能单独抽离成一个模块。</p>
                    <div class="detail">
                        <!-- 音乐播放器 -->
                        <a href="http://www.msse.vip/item/MusicPlayer/html/">查看详情</a>
                    </div>
                </el-card>
            </el-timeline-item>

            <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>原生JS项目 扫雷小游戏</h4>
                    <h5>利用原生js写了一个简易版的扫雷</h5>
                    <p>提交于 2018/4/2 08:46</p>
                    <div class="detail">
                        <!-- 扫雷小游戏 -->
                        <a href="http://www.msse.vip/item/clearMine/">查看详情</a>
                    </div>
                </el-card>
            </el-timeline-item>

            <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>其他，陆续重构中</h4>
                    <p>伟人 提交于 2018/4/2 20:46</p>
                </el-card>
            </el-timeline-item>

        </el-timeline>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        goBack() {
            console.log('go back');
        }
    }
}
</script>

<style scoped>
.detail {
    width: 80px;
    height: 30px;
    line-height: 30px;
    padding: 5px;
    background-color: #85ce61;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 auto;
}

.detail a {
    display: block;
    line-height: 30px;
    text-decoration: none;
    color: white;
}
</style><style>
.el-page-header {
    padding: 15px;
}

.el-steps--horizontal{
    margin-top: 15px;
    padding:15px;
}
</style>
