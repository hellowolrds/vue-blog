<template>
  <div id="blog">
    <mt-header title="博客浏览">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="display">
      <h3 class="sp_title">READ MY BLOG</h3>
      <div class="sp_cell" v-for="item in blog" :key="item.article_id">
        <div class="sp_photo">
          <img width="100%" v-lazy="item.image_url" alt="">
        </div>
        <div class="sp_des">
          <h4>{{item.article_name}}</h4>
          <p>BY ADMIN / {{item.tags}} / {{item.article_click}}</p>
          <p class="time">{{item.article_time*1000|dateFmt}}</p>
          <p><router-link class="btn" :to="{name: 'Detail', params: {id: item.article_id}}">阅读 <i class="icon-arrow-right3"></i></router-link></p>
        </div>
      </div>
      
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from './Footer.vue';
export default {
    name: 'Blog',
    data () {
        return {
            blog: ''
        }
    },
    created() {
        this.$http.get('/api/api/all_blog')
            .then((result)=> {
                this.blog = result.data.data;
            })
            .catch((err)=> {
                console.log(err);
            });
        this.$store.commit('change', '/blog');
    },
    components: {
        vFooter: Footer
    }
}
</script>
<style scoped>

.display h3.sp_title {
  padding: 15px;
  font-size: 18px;
  font-weight: normal;
  color: #000;
}
.sp_cell {
  padding: 0 15px 15px 15px;
}
.sp_cell .sp_photo {
  height: 240px;
  overflow: hidden;
}
.sp_cell .sp_des {
  background-color: #fff;
  padding-left: 20px;
  overflow: hidden;
  padding-bottom: 15px;
}
.sp_cell .sp_des h4 {
  font-size: 16px;
  margin-top: 15px;
}
.sp_cell .sp_des p {
  font-size: 14px;
  margin-top: 20px;
}
.sp_cell .sp_des p .btn {
  color: rgba(0, 0, 0, 0.5);
}
</style>
