<template>
  <div >
    <div v-for="(item, index) in showOpinions" :key="index" class="show">
      <div class="name">{{item.name}}</div>
      <div class="comment">{{item.content}}</div>
      <hr>
      <div class="createTime">{{timeFormat(item.createTime)}}</div>
    </div>
  </div>
</template>

<script>
import {dateFormat} from '../../utils/dateFormat'
export default {
  name: "ShowOpinion",
  props: {
    sendOpinions: {
      type: Array
    }     
  },
  data() {
    return {
      showOpinions: this.sendOpinions 
    };
  },
  methods: {
    timeFormat(time){
      return dateFormat(time)
    }
  }
};
</script>

<style scoped>
.show {
  margin: 0 auto;
  max-width: 860px;
  margin-bottom: 50px;
  background-color: #dfe6e9;
  text-align: left;
  border-radius: 10px;
  padding: 50px;
}

.name {
  font-size: 1.5rem;
}

.comment {
  margin-top: 30px;
  font-size: 2.5rem;
}

.createTime {
  text-align: right;
}
</style>