<template>
  <div class="pull-result">
    <div class="result-info">
    	<div class="result-ok" v-if="pullResult">
    		<span class="info-logo">✔</span>
    		<span class="info-text">Everything is OK!</span>
    	</div>
    	<div class="result-err" v-else>
    		<span class="info-logo">✖</span>
    		<span class="info-text">There is something wrong!</span>
    	</div>
    </div>
    <div class="result-btns">
    	<button class="btn" @click="returnBtnHandler">&lt; 重选分支</button>
    	<button class="btn">下一步 &gt;</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PullResult',
  methods: {
  	returnBtnHandler(){
  		this.$router.push('/')
  	}
  },
  computed: {
  	...mapState([
        'pullResult'
    ])
  }
}
</script>

<style scoped>
  .pull-result {
  	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .info-logo {
  	display: block;
    font-size: 15rem;
  }
  .result-ok .info-logo {
    color: #0bb70b;
  }
  .result-err .info-logo {
  	color: #bd0101;
  }
  .info-text {
  	font-size: 2rem;
    font-family: fantasy;
  }
  .result-btns {
  	display: flex;
  }
  .result-btns .btn {
  	font-size: 1.2rem;
    font-weight: bold;
  }
</style>
