<template>
  <div>
    <div class="list"></div>
    <div id="TitleList" v-for="(item, index) in article" :key="index" @click="jump(item)"
    :class="isLight">
      <div class="title" @click="jump(item)">{{item.title}}</div>
      <div class="desc">{{item.description}}</div>
      <hr />
      <div class="info">
              <span class="tag">
        <img src="../assets/img/tag.svg" alt />
        {{item.tag}}
      </span>
      <span class="time">
        <img src="../assets/img/calendar.svg" alt />
        {{timeFormat(item.createTime)}}
      </span>
      </div>

    </div>
  </div>
</template>

<script>
import { request } from "../network/request";
import { dateFormat } from "../utils/dateFormat";
import {isLight} from '../utils/isLight'
export default {
  name: "TitleList",
  data() {
    return {
      article: {},
    };
  },
  created() {
    this.getArtciles();
  },
  computed: {
    isLight
  },
  methods: {
    getArtciles() {
      return request({
        url: "article"
      }).then(response => {
        this.article = response;
      });
    },
    jump(item) {
      var id = item.id.toString();
      var articlePath = "content/" + id;
      this.$router.push(articlePath).catch(err => {
        console.log('all right');
      });
    },
    timeFormat(time) {
      return dateFormat(time);
    }
  }
};
</script>

<style scoped>

.list {
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: transparent;
  padding: 50px;
}
#TitleList {
  margin: 0 auto;
  max-width: 860px;
  margin-bottom: 50px;
  background-color: #dfe6e9;
  text-align: left;
  border-radius: 10px;
  padding: 50px;
  transition: .4s;
  color: #2d3436;
}

#TitleList.light:hover {
    box-shadow: 0 14px 28px rgba(2, 15, 22,0.25), 0 10px 10px rgba(2, 25, 22,0.22);
    cursor: pointer;
}
#TitleList.dark:hover {
    cursor: pointer;
    background-color: #2d3436;
    color: #dfe6e9;
    box-shadow: 0 14px 28px rgba(223, 230, 233,0.25), 0 10px 10px rgba(223, 230, 233,0.22);
}



span img {
  width: 15px;
}

.time {
  margin-left: 20px;
}

.info {
  text-align: right;
}

.title {
  font-size: 2.5rem;
}

.desc {
  margin-top: 30px;
  font-size: 1.5rem;
}
</style>