<template>
<el-carousel :interval="3000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in 4" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img :src="imgUrl[index]" alt="">
        <!-- dididi{{imgUrl[index]}} -->
    </el-carousel-item>
</el-carousel>
</template>

<script>

import imgUrl1 from '../../assets/mao1.jpeg'
import imgUrl2 from '../../assets/mao2.jpg'
import imgUrl3 from '../../assets/mao3.jpg'
import imgUrl4 from '../../assets/mao4.jpg'

export default {
    data(){
        return {
            imgUrl:[imgUrl1,imgUrl2,imgUrl3,imgUrl4]
        }
    }
}
</script>

<style>
img {
    height: 400px !important;
}

.el-carousel__item{
    height: 400px !important;
}



</style>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
}

.el-carousel--horizontal{
        height: 400px !important;
}

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
} */
</style>
