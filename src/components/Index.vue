<template>
  <div class="hello">
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in banner" :key="item.article_id">
          <router-link :to="{name: 'Detail', params: {id: item.article_id}}"><img v-lazy="item.banner_image" width="100%" alt=""></router-link>
        </mt-swipe-item>
    </mt-swipe>
    <div class="display">
      <h3 class="sp_title">个人技术</h3>
      <div class="sp_item">
        <div class="sp_icon">
          <i class="icon-settings"></i>
        </div>
        <div class="sp_text">
          <h3>HTML5CSS3</h3>
          <p>熟练使用html5css3构建web界面，快速还原设计稿</p>
        </div>
      </div>

      <div class="sp_item">
        <div class="sp_icon">
          <i class="icon-search4"></i>
        </div>
        <div class="sp_text">
          <h3>JAVASRIPT</h3>
          <p>熟练掌握原生JavaScript操作DOM，以及面向对象思维</p>
        </div>
      </div>

      <div class="sp_item">
        <div class="sp_icon">
          <i class="icon-paperplane"></i>
        </div>
        <div class="sp_text">
          <h3>PHP</h3>
          <p>熟悉php基本语法和sql语句，熟练使用thinkphp框架</p>
        </div>
      </div>

      <div class="sp_item">
        <div class="sp_icon">
          <i class="icon-params"></i>
        </div>
        <div class="sp_text">
          <h3>MYSQL</h3>
          <p>熟悉mysql服务器的搭建，以及常用的sql命令</p>
        </div>
      </div>
    </div>
    <div class="display">
      <h3 class="sp_title">最近的博客<span class="sp_more"><router-link to="/blog">更多</router-link></span></h3>
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
import { Indicator } from 'mint-ui';
export default {
  name: 'Index',
  data () {
    return {
      banner: '',
      blog: '',
      loading: true
    }
  },
  created () {
      if ( this.loading ) 
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
      });
    this.$http.get('/api/api/banner').then((result)=>{
      this.banner = result.data.data;
    })
    .catch((err)=>{
      console.log(err);
    });

    this.$http.get('/api/api/blog')
      .then((result)=> {
        this.blog = result.data.data;
        Indicator.close();
      })
      .catch((err)=> {
        console.log(err);
      });
  },
  components: {
    vFooter: Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  height: 220px;
  overflow: hidden;
}
.mint-swipe .item {
  width: 100%;
  height: 100%;
  background: red;
}
.hello .display h3.sp_title {
  padding: 15px;
  font-size: 18px;
  font-weight: normal;
  color: #000;
}
.hello .display h3.sp_title .sp_more {
  font-size: 14px;
  float: right;
  padding-top: 2px;
}
.hello .display h3.sp_title a{
  color: rgba(0, 0, 0, 0.5);
}

.hello .sp_item {
  padding: 0 15px 15px 15px;
  height: 120px;
}
.hello .sp_item .sp_icon {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  border-radius: 50%;
  float: left;
}
.hello .sp_item i {
  font-size: 40px;
  line-height: 100px;
  color: #228896;
}
.hello .sp_item .sp_text {
  margin-left: 110px;
}
.hello .sp_item .sp_text h3 {
  padding-top: 20px;
  font-size: 16px;
  font-weight: normal;
}
.hello .sp_item .sp_text p {
  padding-top: 10px;
}
.hello .sp_cell {
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
.show_time {
  padding: 15px 15px 20px 15px;
}
.show_time .show_cell {
  padding: 15px;
  background-color: #fff;
}

</style>
