<template>
  <div class="sta">
    <span>
      <div class="title">
        <p>关于博客</p>
      </div>
      <div class="article">
        <p>
          博客源码：
          <a
            href="https://github.com/YuanQiii/vue_blog"
            target="_blank"
          >https://github.com/YuanQiii/vue_blog</a>
        </p>
        <p>
          文章总数：
          <span class="span1">{{ article.length}}</span>
        </p>
        <p>文章评论数：{{opinion.length}}</p>
        <!-- <p>文章浏览总数：{{comArticleCountnNum()}}</p> -->

        <p>留言区留言数：{{comment.length}}</p>
      </div>
    </span>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  name: "Statistics",
  data() {
    return {
      article: [],
      opinion: [],
      comment: []
    };
  },
  created() {
    this.getArtciles();
    this.getOpinions();
    this.getComments();
  },

  methods: {
    getArtciles() {
      return request({
        url: "article"
      }).then(response => {
        this.article = response;
      });
    },
    getOpinions() {
      return request({
        url: "getopinion"
      }).then(response => {
        this.opinion = response;
      });
    },
    getComments() {
      return request({
        url: "getcomments"
      }).then(response => {
        this.comment = response;
      });
    },
    comArticleCountnNum() {
      for (let i = 0; i < this.article.length; i++) {
        var totalCount = 0;
        totalCount += this.article[i].count;
      }
      return totalCount;
    }
  }
};
</script>

<style scoped>
.sta {
  margin: 0 auto;
  max-width: 860px;
  margin-bottom: 50px;
  background-color: #dfe6e9;
  text-align: left;
  border-radius: 10px;
  padding: 50px;
  padding-top: 30px;
  word-wrap: break-word;
}

.title {
  font-size: 2.5rem;
}
.article {
  font-size: 1.5rem;
}
a {
  transition: 0.4s;
  color: #2d3436;
  text-decoration: none;
}

a:hover {
  background-color: #2d3436;
  color: #dfe6e9;
  border-radius: 3px;
}
</style>