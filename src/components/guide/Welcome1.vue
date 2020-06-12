<template>
  <div class="sp-container">
  <div class="sp-content">
    <div class="sp-globe"></div>
    <h4 class="frame-1">WELCOME</h4>
    <h4 class="frame-2">YUANQIII'S</h4>
    <h4 class="frame-3">BLOG</h4>
    <h4 class="frame-5">
      <span>HELLO</span>
    </h4>
  </div>
</div>
</template>

<style scoped>

.container {
	width: 80%;
	position: relative;
	overflow: hidden;
}

.sp-container {
	position: relative;
	top: 50px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: 1;
}


.sp-content {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	z-index: 1000;
}
.sp-container h4 {
	position: absolute;
	top: 50%;
	line-height: 100px;
	height: 90px;
	margin-top: -50px;
	font-size: 5rem;
	width: 100%;
	text-align: center;
	color: transparent;
	-webkit-animation: blurFadeInOut 2s ease-in backwards;
	-moz-animation: blurFadeInOut 2s ease-in backwards;
	-ms-animation: blurFadeInOut 2s ease-in backwards;
	animation: blurFadeInOut 2s ease-in backwards;
}

@media screen and (max-width: 1000px) {
	.sp-container h4 {
		font-size: 3rem;
	}
}
.sp-container h4.frame-1 {
	-webkit-animation-delay: 0s;
	-moz-animation-delay: 0s;
	-ms-animation-delay: 0s;
	animation-delay: 0s;
}
.sp-container h4.frame-2 {
	-webkit-animation-delay: 2s;
	-moz-animation-delay: 2s;
	-ms-animation-delay: 2s;
	animation-delay: 2s;
}
.sp-container h4.frame-3 {
	-webkit-animation-delay: 4s;
	-moz-animation-delay: 4s;
	-ms-animation-delay: 4s;
	animation-delay: 4s;
}
.sp-container h4.frame-5 {
	-webkit-animation: none;
	-moz-animation: none;
	-ms-animation: none;
	animation: none;
	color: transparent;
	text-shadow: 0px 0px 1px #fff;
}
.sp-container h4.frame-5 span {
	-webkit-animation: blurFadeIn 2s ease-in 8s backwards;
	-moz-animation: blurFadeIn 1s ease-in 8s backwards;
	-ms-animation: blurFadeIn 2s ease-in 8s backwards;
	animation: blurFadeIn 2s ease-in 8s backwards;
	color: transparent;
	text-shadow: 0px 0px 1px #fff;
}
.sp-container h4.frame-5 span:nth-child(2) {
	-webkit-animation-delay: 9s;
	-moz-animation-delay: 9s;
	-ms-animation-delay: 9s;
	animation-delay: 9s;
}
.sp-container h4.frame-5 span:nth-child(3) {
	-webkit-animation-delay: 10s;
	-moz-animation-delay: 10s;
	-ms-animation-delay: 10s;
	animation-delay: 10s;
}

@keyframes blurFadeInOut {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	20%, 75% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		text-shadow: 0px 0px 50px #fff;
		transform: scale(0);
	}
}
@keyframes blurFadeIn {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	50% {
		opacity: 0.5;
		text-shadow: 0px 0px 10px #fff;
		transform: scale(1.1);
	}
	100% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
}
</style>