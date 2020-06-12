<template>
  <div id="AddComment">
    <div class="group">
      <input type="text" v-model="name" placeholder="" class="inp"/>
    <label class="lab">昵称：</label>
    </div>
    <div class="group">
      <input type="text" v-model="comment" placeholder="" class="inp"/>
      <label class="lab">内容：</label>
    </div>

    <div class="svg">
      <a class="button">
        <svg>
          <rect height="40" width="130" fill="transparent" />
        </svg>
        <span class="spot" @click="submit">留言</span>
      </a>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
import axios from "axios";
export default {
  name: "AddComment",
  data() {
    return {
      name: "",
      comment: ""
    };
  },
  methods: {
    submit() {
      if (this.name === "") {
        alert("昵称不能为空");
      } else if (this.comment === "") {
        alert("留言内容不能为空");
      } else {
        var obj = {};
        obj.name = this.name;
        obj.comment = this.comment;
        obj.createTime = Date.now();
        this.$emit("submit", obj);
        axios({
          method: "post",
          // url: "http://49.233.210.5:9000/app01/api/comment",
          url: "http://121.199.4.130:9000/app01/api/comment",
          data: {
            name: this.name,
            comment: this.comment,
            createTime: Date.now()
          }
        });
        alert("感谢留言o(*￣▽￣*)o");
      }
    }
  }
};
</script>

<style scoped>
#AddComment {
  text-align: center;
}


.group {
  position: relative;
  width: fit-content;
  margin: auto;
}

input {
  background-color: transparent;
  height: 1.6rem;
  width: 300px;
  margin: 30px;
  border: none;
  border-bottom: solid 2px #dfe6e9;
  outline: none;
  font-size: 1.4rem;
  transition: .4s;
  color: #dfe6e9;

}

input:focus {
  width: 400px;
  font-size: 1.4rem;
  border-bottom: solid 4px #f90;

}

input:focus+label{
  position: absolute;
  color: #dfe6e9;
  top: 0px;
  left: 30px;
  font-size: 1rem;
  opacity: 0.6;
}



label {
  position: absolute;
  color: #dfe6e9;
  left: -60px;
  top: 30px;
  font-size: 1.4rem;
  transition: .4s;
}

.lab::first-letter {
  margin-right: 13px;
}

@media screen and (max-width: 1000px) {
  .group {
    max-width: 60%;
  }

  input {
    max-width: 58vw;
  }

  input:focus+label{
    left: -7vw;
  }

  input:focus {
    position: relative;
    left: -15vw;
    max-width: 60vw;
  }
}


/* ------------------------------------------ */


a {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
}

a,
span {
  font-size: 20px;
}

svg {
  width: 130px;
  height: 40px;
}

/* THE SVG HOVER EFFECTS */
.svg .button {
  text-decoration: none;
  color: #dfe6e9;
  position: relative;
  display: inline-block;
  width: 130px;
  height: 40px;
  margin: 20px;
  overflow: hidden;
  margin-bottom: 140px;
}

.svg .button rect {
  position: absolute;
  top: 0;
  left: 0;
  stroke-width: 4px;
  stroke-dashoffset: 400px;
  stroke: #dfe6e9;
}

.svg .button span {
  color: #dfe6e9;
  width: 130px;
  height: 40px;
  display: inline-block;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 40px;
  transition: all 0.2s linear;
}

.svg .button span:hover {
  color: #2d3436;
  background: #dfe6e9;
  transition: all 1s cubic-bezier(1.25s 0, 1.15, 1, 1);
  transition-delay: 0.5s;
}

.svg .button:nth-child(1):hover rect {
  animation: draw1 0.75s linear forwards;
}

@keyframes draw1 {
  0% {
    stroke-dasharray: 300;
    stroke-dashoffset: 700;
    stroke-width: 4px;
  }
  75% {
    stroke-dasharray: 900;
    stroke-width: 1px;
  }
  100% {
    stroke-dasharray: 900;
    stroke-width: 1px;
  }
}

</style>
