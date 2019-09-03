<template>
<div class="leftMenu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">&gt;</el-radio-button>
        <el-radio-button :label="true">&lt;</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">初阶</span>
            </template>

            <el-menu-item-group>
                <span slot="title">Basic One</span>
                <el-menu-item index="1-1">HTML5</el-menu-item>
                <el-menu-item index="1-2">CSS3</el-menu-item>
                <el-menu-item index="1-3">JavaScript</el-menu-item>
                <el-menu-item index="1-4">网络</el-menu-item>
            </el-menu-item-group>

            <!-- <el-menu-item-group title="分组2">

                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">

                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->

        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">进阶</span>
            </template>

            <el-menu-item-group>
                <span slot="title">Basic Two</span>
                <el-menu-item index="2-1">Jquery</el-menu-item>
                <el-menu-item index="2-2">ES6</el-menu-item>
                <el-menu-item index="2-3">Bootstrap</el-menu-item>

            </el-menu-item-group>

            <el-submenu index="2-4">

                <span slot="title">构建工具</span>
                <el-menu-item index="2-4-1">Gulp</el-menu-item>
                <el-menu-item index="2-4-2">WebPack</el-menu-item>
            </el-submenu>

        </el-submenu>

        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">高阶</span>
            </template>

            <el-menu-item-group>
                <span slot="title">Senior One</span>
                <el-menu-item index="3-1">Vue</el-menu-item>
                <el-menu-item index="3-2">React</el-menu-item>
                <el-menu-item index="3-3">Angular</el-menu-item>
                <el-menu-item index="3-4">微信小程序</el-menu-item>

            </el-menu-item-group>

            <el-submenu index="3-5">

                <span slot="title">其他</span>
                <el-menu-item index="3-5-1">Element</el-menu-item>
            </el-submenu>

        </el-submenu>

        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">牛掰</span>
            </template>

            <el-menu-item-group>
                <span slot="title">Senior Two</span>
                <el-menu-item index="4-1">Node</el-menu-item>
                <el-menu-item index="4-2">Express</el-menu-item>
                <el-menu-item index="4-3">Java</el-menu-item>
                <el-menu-item index="4-4">数据结构和算法</el-menu-item>

            </el-menu-item-group>

            <el-submenu index="4-5">

                <span slot="title">其他</span>
                <el-menu-item index="4-5-1">C语言</el-menu-item>
                <el-menu-item index="4-5-2">C+ +</el-menu-item>
                <el-menu-item index="4-5-3">C # </el-menu-item>
                <el-menu-item index="4-5-2">C+ +</el-menu-item>

            </el-submenu>

        </el-submenu>

        <!-- <el-menu-item index="2" default-active="2">
            <template>
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </template>

            <el-menu-item-group>
                <span slot="title">Basic</span>
                <el-menu-item index="1-1">HTML5</el-menu-item>
                <el-menu-item index="2-2">CSS3</el-menu-item>
                <el-menu-item index="2-3">JavaScript</el-menu-item>
                <el-menu-item index="2-4">网络</el-menu-item>
            </el-menu-item-group>

        </el-menu-item> -->

        <!-- <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>

        </el-menu-item>

        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item> -->
    </el-menu>
</div>
</template>

<style scoped>
.leftMenu {
    /* position: absolute; */
    float: left;
}
</style><style>
.el-radio-button__inner {
    margin-top: 15px !important;
    padding: 0 !important;
    padding-top: 5px !important;
    width: 30px !important;
    height: 23px !important;
    text-align: center !important;
    align-self: center !important;
    line-height: 10px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

<script>
export default {
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
