<template>
	<div class="swiper">
		<transition-group tag="div" class="container" :name="transitionname">
			<div
				class="page"
				v-for="(img, index) in imgs"
				:key="index"
				v-show="index === show"
			>
				<img :src="img.src" alt="img" />
			</div>
		</transition-group>
		<a href="" @click.prevent="setShow(show - 1)" class="swiper-left">ᐊ</a>
		<a href="" @click.prevent="setShow(show + 1)" class="swiper-right">ᐅ</a>
	</div>
</template>

<script>
let timer;
const interval = 5000;
export default {
	data() {
		return {
			transitionname: "left-in",
			show: 0,
			imgs: [
				{ src: "./images/1.jpg" },
				{ src: "./images/2.jpg" },
				{ src: "./images/3.jpg" },
				{ src: "./images/4.jpg" },
				{ src: "./images/5.jpg" },
				{ src: "./images/6.jpg" },
				{ src: "./images/7.jpg" },
			],
		};
	},
	watch: {
		show(nVal, oVal) {
			if (nVal < 0) {
				this.show = this.imgs.length - 1;
			} else if (nVal > this.imgs.length - 1) {
				this.show = 0;
			} else {
				if (oVal < 0) this.transitionname = "left-in";
				else if (oVal > this.imgs.length - 1) this.transitionname = "right-in";
				else this.transitionname = nVal > oVal ? "right-in" : "left-in";
			}
		},
	},
	methods: {
		setShow(index) {
			this.show = index;
		},
		nextShow() {
			this.show++;
		},
	},
	mounted() {
		timer = setInterval(this.nextShow, interval);
	},
};
</script>

<style scoped>
.right-in-enter {
	left: 100%;
}
.right-in-enter-active,
.right-in-leave-active {
	transition: left 0.5s;
}
.right-in-enter-to,
.right-in-leave {
	left: 0%;
}
.right-in-leave-to {
	left: -100%;
}
.left-in-enter {
	right: 100%;
}
.left-in-enter-active,
.left-in-leave-active {
	transition: right 0.5s;
}
.left-in-enter-to,
.left-in-leave {
	right: 0%;
}
.left-in-leave-to {
	right: -100%;
}
.container {
	width: 1180px;
	height: 630px;
	position: relative;
	overflow: hidden;
}
.page {
	position: absolute;
}
.swiper > a {
	font-size: 50px;
	text-decoration: none;
	color: aliceblue;
	opacity: 0.4;
}
.swiper-left {
	position: absolute;
	top: 380px;
	left: 60px;
}
.swiper-right {
	position: absolute;
	top: 380px;
	right: 60px;
}
</style>
