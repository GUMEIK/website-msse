<template>
    <div class="jumbotron">
        <h1>Hello,world !</h1>
        <p>你知道，就算大雨让这座城市颠倒，我会给你怀抱！</p>
        <div class="btn">Learn more </div>
        
    </div>
</template>

<script>
import carousel from './carousel.vue'
export default {
    components:{
        carousel
    }
}
</script>


<style scoped>

.jumbotron{
    margin-top:0;
    height: 270px;
    background-color: #eeeeee;
}

.jumbotron h1{
    margin:0;
    font-size: 50px;
    font-weight: normal;
    text-align: left;
    padding-top:20px;
    padding-left: 15px;
}

.jumbotron p{
    text-align: left;
    font-size: 25px;
    padding-left: 15px;
}

.jumbotron .btn{
    width:150px;
    height: 50px;
    background-color: #409eff;
    color: #fff;
    border-radius: 8px;
    font-size: 25px;
    line-height: 50px;
}


</style>

