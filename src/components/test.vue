<template>
    
    <div>
        <video :src="srcUrl"></video>
        {{srcUrl}}
    </div>
</template>

<script>
var  srcUrl  = require('./Html5Video/assets/shanhai.mp4')
export default {
    data(){
        return {
            srcUrl
        }
    }
}
</script>