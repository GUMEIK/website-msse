<template>
<div class="theFirstPage" >
    
    
    <inputCom></inputCom>
    <contentContent></contentContent>
    <leftMenu></leftMenu>
    <carousel></carousel>
    <footerContent></footerContent>
</div>
</template>

<script>
import contentContent from '../components/theFirstPage/contentContent.vue';
import carousel from '../components/theFirstPage/carousel.vue';
import leftMenu from '../components/theFirstPage/leftMenu.vue';
import footerContent from '../components/theFirstPage/footerContent.vue';

import inputCom from '../components/toolsCom/inputCom.vue'

export default {
    components: {
      
        contentContent,
        carousel,
        leftMenu,
        footerContent,
        inputCom
   
    },
    data(){
        return {
            show:false
        }
    },
    methods:{
        
      
    }

}
</script>
