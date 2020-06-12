<template>
  <div id="nav" class="nav">
    <div id="nav-icon2" class="close">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <guide>
      <div class="switch-wrap">
        <div id="switch" @click="themeChange">
          <div id="circle"></div>
        </div>
        <p>
          <span>dark</span> -
          <span>light</span>
        </p>
      </div>
      <div id="navl" class="closel">
        <ul id="closel" class="adv">
          <li>
            <guide-item path="/home">
              <div slot="item-text" class="ditem active">主页</div>
            </guide-item>
          </li>
          <li>
            <guide-item path="/archives">
              <div slot="item-text" class="ditem">归档</div>
            </guide-item>
          </li>
          <li>
            <guide-item path="/about">
              <div slot="item-text" class="ditem">关于</div>
            </guide-item>
          </li>
          <li>
            <guide-item path="/comment">
              <div slot="item-text" class="ditem">留言</div>
            </guide-item>
          </li>
          <li>
            <guide-item>
              <div
                slot="item-text"
                @click="showSearch"
                :class="isActive?'active':'deactive'"
                class="sitem"
              >搜索</div>
            </guide-item>
          </li>
          <li>
            <guide-item>
              <div slot="item-text" class="ditem">
                <a href="http://121.199.4.130:80/admin">管理</a>
              </div>
            </guide-item>
          </li>
        </ul>
        <transition name="inp">
          <p v-show="isShow" class="search">
            <search></search>
          </p>
        </transition>
      </div>
    </guide>
  </div>
</template>

<script>
import Guide from "./Guide";
import GuideItem from "./GuideItem";
import Search from "../search/Search";
export default {
  name: "MainGuide",
  components: {
    Guide,
    GuideItem,
    Search
  },
  data() {
    return {
      isShow: false,
      isActive: false,
      isLight: false
    };
  },
  mounted() {
    this.active();
    this.icon();
  },
  methods: {
    showSearch() {
      if (this.isShow == false) {
        this.isShow = true;
        this.isActive = true;
        console.log(this.isActive);
      } else {
        this.isShow = false;
        this.isActive = false;
        console.log(this.isActive);
      }
    },
    active() {
      const item = document.querySelectorAll(".ditem");
      for (let i = 0; i < item.length; i++) {
        item[i].onclick = function() {
          for (let j = 0; j < item.length; j++) {
            item[j].setAttribute("class", "ditem");
          }
          this.setAttribute("class", "ditem active");
        };
      }
    },
    icon() {
      var navi = document.getElementById("nav-icon2");
      var navl = document.getElementById("navl");
      navi.addEventListener("click", function() {
        if (navi.getAttribute("class") == "close") {
          navi.setAttribute("class", "open");
          navl.setAttribute("id", "openl");
        } else {
          navi.setAttribute("class", "close");
          navl.setAttribute("id", "closel");
        }
      });
    },
    themeChange() {
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      var sw = document.querySelector('#switch')
      if (body.getAttribute("class") == "light") {
        html.setAttribute("class", "dark");
        body.setAttribute("class", "dark");
        sw.setAttribute("class", "");
      } else {
        html.setAttribute("class", "light");
        body.setAttribute("class", "light");
        sw.setAttribute("class", "switched");
      }
      this.$store.commit("themeC");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("guide.css");
@import url("switch.css");


.ditem,
.sitem {
  font-size: 1.5rem;
  color: #dfe6e9;
  padding: 20px 50px;
  padding-top: 0;
  position: relative;
  transition: 0.4s;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  a {
    color: #dfe6e9;
    text-decoration: none;
  }

  &:after {
    content: "";
    transition: 0.4s;
    position: absolute;
    width: 0;
    height: 3px;
    left: auto;
    right: 0;
    bottom: 0;
    background-color: #dfe6e9;
  }

  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }

  &.active {
    color: #f90;
    &.light {
      color: #dfe6e9;
    }
  }
}

li {
  list-style: none;
}

.adv {
  display: flex;
  justify-content: space-evenly;
  max-width: 888px;
  margin: 0 auto;
  opacity: 1;
}

.inp-enter-active,
.inp-leave-active {
  transition: all 0.7s;
}
.inp-enter,
.inp-leave-to {
  opacity: 0;
  transform: translateX(260px);
}
</style>
