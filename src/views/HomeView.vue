<template>
  <div class="home">
    <div class="info">
      <div class="name animate__animated animate__bounceInDown">
        <h1>{{ name }}</h1>
      </div>
      <div class="img">
        <img class="animate__animated animate__rotateIn" :src="avatar_url" alt="">
      </div>

      <div class="text animate__animated animate__shakeX" :title="text">
        <h2>{{ text }}</h2>
      </div>

      <div class="btnlist">
        <a-button v-for="da in btn_data" class="animate__animated animate__fadeInDown" @click="tolink(da)" type="primary"
          :size="button_size">
          <template #icon v-if="da.text == 'Github'">
            <github-outlined />
          </template>
          <template #icon v-else-if="da.text == '微博'">
            <weibo-circle-outlined />
          </template>
          <template #icon v-else>
            <link-outlined />
          </template>
          {{ da.text }}
        </a-button>
      </div>

    </div>

  </div>
</template>

<script>
import { GithubOutlined, WeiboCircleOutlined, LinkOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import axios from 'axios'
import webconfig from '@/config'

export default {
  components: {
    GithubOutlined,
    WeiboCircleOutlined,
    LinkOutlined
  },
  data() {
    return {
      name: webconfig.name,
      avatar_url: webconfig.avatar_url,
      button_size: 'large',
      text: '',
      btn_data: webconfig.urllist
    }
  },
  methods: {
    tolink(link) {
      var key = 'tolink';
      if (link == '') {
        message.success({ content: '未配置链接' })
      } else {
        message.loading({ content: '即将前往' + link.text, key })
        setTimeout(() => {
          message.success({ content: '成功打开' + link.text, key, duration: 2 })
          open(link.link)
        }, 2000)
      }

    },
    get() {
      var config = {
        method: 'get',
        url: 'https://v1.hitokoto.cn/?c=e',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      };

      var that = this
      axios(config)
        .then(function (response) {
          if (response) {
            if (response.data) {
              that.text = response.data.hitokoto
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.get()
  }
}
</script>

<style scoped lang="scss">
.home {
  .info {
    .name {
      position: relative;
      top: 40px;
      width: 400px;
      height: 40px;
      color: #fff;
      border-radius: 30px;
      text-align: center;
      box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.2);
    }

    .img {
      img {
        margin: 10px;
        width: 200px;
        height: auto;
        border-radius: 50%;
      }

      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .text {
      &:hover {
        backdrop-filter: blur(8px);
      }

      position: relative;
      top: -40px;
      width: 90%;
      height: 60px;
      color:#fff;
      line-height: 40px;
      border-radius: 30px;
      text-align: center;
      box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.2);
      backdrop-filter: blur(0px);
      transition: backdrop-filter 0.5s ease;
      overflow: hidden;
    }

    .btnlist {
      width: 80%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    width: 800px;
    height: 600px;
    border-radius: 30px;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.3);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-backdrop-filter: blur(2.5px);
  backdrop-filter: blur(2.5px);
}
</style>