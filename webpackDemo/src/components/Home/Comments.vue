<template>
    <div class='temp'>
        <comments :discussID="sendID"></comments>
    </div>
</template>

<style scoped>

</style>

<script type=text/ecmascript-6>
    import comments from '../sub/comments.vue'
    export  default {
        data(){
            return {
                sendID:0
            }
        },
        created(){
            this.sendID = this.$route.params.id
        },
        props:['id'],
        components:{
            comments
        }
    }
</script>


