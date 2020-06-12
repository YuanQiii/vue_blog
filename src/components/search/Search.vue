<template>
  <div class="inputMain">
    <div class="inp">
      <input type="text" v-model="inputValue" placeholder="search.." :class="isLight"/>
    </div>
    <div
      v-for="(item, index) in list"
      :key="index"
      v-show="inputValue"
      @click="jump(item)"
      id="result"
      :class="isLight"
    >
      <p>标题：{{item.title}}</p>
      <p>描述：{{item.description}}</p>
      <p>tag：{{item.tag}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {isLight} from '../../utils/isLight'
export default {
  name: "Search",
  data() {
    return {
      inputValue: "",
      list: [],
    };
  },
  computed: {
    isLight
  },
  methods: {
    jump(item) {
      var id = item.id.toString();
      var articlePath = "content/" + id;
      this.$router.push(articlePath).catch(err => {
        console.log('all right');
      });
    },
  },
  watch: {
    inputValue: function() {
      axios
        .get("http://121.199.4.130:9000/app01/api/search/", {
          params: {
            key: this.inputValue
          }
        })
        .then(value => {
          console.log(value);
          this.list = value.data;
        });
    }
  }
};
</script>



<style scoped>
#result {
  font-size: 1.4rem;
  transition: 0.4s;
  color: #2d3436;
  background-color: #dfe6e9;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 860px;
  text-align: left;
  padding: 50px;
  margin-top: 50px;
}
#result:hover {
  /* background-color: #dfe6e9;
  color: #2d3436;
  cursor: pointer; */
  cursor: pointer;
  background-color: #2d3436;
  color: #dfe6e9;
  box-shadow: 0 14px 28px rgba(223, 230, 233, 0.25),
    0 10px 10px rgba(223, 230, 233, 0.22);
}

#result.light:hover {
  background-color: #dfe6e9;
    box-shadow: 0 14px 28px rgba(32, 25, 22, 0.25),
    0 10px 10px rgba(32, 25, 22, 0.22);
    color: #2d3436;
}

input {
  height: 2.4rem;
  width: 22%;
  margin-top: 20px;
  font-size: 1.4rem;
  color: #dfe6e9;
  border: none;
  border-bottom: solid 2px #dfe6e9;
  background-color: transparent;
  outline: 0;
  transition: 0.4s;
}

input.light {
  background-color: transparent;
  color: #2d3436;
}

input:focus {
  width: 26%;
  height: 2.8rem;
  font-size: 1.8rem;
  border-bottom: solid 4px #f90;
}

@media screen and (max-width: 1000px){
  .inputMain {
    display: none;
  }
}

</style>