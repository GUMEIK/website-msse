<template>
<div class="header">

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="0">
            <router-link to="/" tag="li">伟人工作台</router-link>

        </el-menu-item>
        <el-menu-item index="1">
            <router-link to="/itemCentor" tag="li">项目中心</router-link>
            <!-- <a href="http://106.13.192.11/student/" style="text-decoration:none">项目中心</a> -->
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">WHO I'M I</template>
            <el-menu-item index="2-1">写作爱好者</el-menu-item>
            <el-menu-item index="2-2">跑步爱好者</el-menu-item>
            <el-menu-item index="2-3">代码爱好者</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">思考与值得</template>
                <el-menu-item index="2-4-1">连接</el-menu-item>
                <el-menu-item index="2-4-2">热爱</el-menu-item>
                <el-menu-item index="2-4-3">值得</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3">接口管理(正在进行代码重构)</el-menu-item>
        <el-menu-item index="4">
            <router-link to="/videoList" tag="li">视频专区(测试)</router-link>
        </el-menu-item>
        <el-menu-item index="5">
            <router-link to="/conclusion" tag="li">积跬步至千里</router-link>
        </el-menu-item>

        <!-- <el-button type="" icon="el-icon-search">搜索</el-button> -->
        <el-dropdown>
            <el-button type="primary">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我</el-dropdown-item>
                <el-dropdown-item>在</el-dropdown-item>
                <el-dropdown-item>重</el-dropdown-item>
                <el-dropdown-item>构</el-dropdown-item>
                <el-dropdown-item>哟！</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>

    <router-view></router-view>
</div>
</template>

<style>
.header i {
    /* padding: 20px; */
    float: right;
}

/* 
.header .el-button {
    width: 100px;
    margin-top: -3px;
    padding: 0px;
    text-align: center;
    height: 40px;
    line-height: 40px;
} */
/* 
i.el-icon-search {

    padding: 0 !important;
    text-align: center;
    margin-top: 13px ;
    margin-right: 15px;

} */
</style><style>
/* 下拉菜单 */
div.el-dropdown {
    float: right !important;
    margin-right: 15px !important;
}

.el-dropdown-selfdefine {
    /* position: absolute; */
    /* padding:0 !important; */
    /* right: 15px; */

    margin-left: 15px !important;
    margin-top: 10px !important;

}

/* .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-right: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  } */
</style>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },

}
</script>
