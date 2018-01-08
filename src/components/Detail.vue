<template>
  <div class="detail">
    <mt-header title="博客浏览">
      <router-link :to="$store.state.load" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="sp_content">
        <h3 class="sp_title">{{blog.article_name}}</h3> 
        <p class="sp_time">{{blog.article_time*1000|dateFmt}} by Admin / {{blog.tags}} / {{blog.article_click}}</p>
        <div class="sp_inner" v-html="blog.article_content">
            
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from './Footer.vue';
import { Indicator } from 'mint-ui';
    export default {
        name: 'Detail',
        data () {
            return {
                blog: '',
                loading: true
            }
        },
        created () {
            // 跳转顶部
            this.menu();
            if ( this.loading ) 
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
            });
            this.$http.get('/api/api/detail', {
                params: {
                    id: this.$route.params.id
                }
            }).then((result)=>{
                this.blog = result.data.data;
                Indicator.close();
                console.log(result);
            })
        },
        methods: {
            menu () {
                window.scrollTo(0, 0);
            }
        },
        components: {
            vFooter: Footer
        }
    }
</script>
<style scoped>
.sp_content {
    padding: 0 10px;
}
.sp_content h3.sp_title {
    padding: 15px;
    font-size: 18px;
    font-weight: normal;
}
.sp_content p.sp_time {
    font-size: 14px;
    padding-left: 15px;
    margin-bottom: 10px;
}
.sp_content .sp_inner {
    background-color: #fff;
    padding: 10px 15px 15px 15px;
}
</style>