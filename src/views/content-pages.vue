<template>
	<div class="content-pages">
		<Header />
		<div class="Pages" v-if="list">
			<img :src="list.img" alt="photo" />
			<div class="pages-item">
				<h3>{{ list.title }}</h3>
				<p>{{ `$${list.price}` }}</p>
				<a href="" @click.prevent="onShopcar">加入購物車</a>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
	data() {
		return {
			contentApi: [],
		};
	},
	components: {
		Header,
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
		list() {
			return this.contentApi.find((item) => {
				return item.id == this.id;
			});
		},
	},
	methods: {
		onShopcar() {
			alert("加入成功!");
			this.$store.commit("onShopcar", this.list);
		},
	},
	mounted() {
		this.contentApi = this.$store.state.contentApi;
	},
};
</script>

<style scoped>
.content-pages {
	width: 1180px;
	margin: 0 auto;
	padding-top: 30px;
}
.Pages > img {
	width: 500px;
	height: 500px;
}
.Pages {
	display: flex;
	justify-content: center;
	align-items: center;
}
.pages-item {
	margin-left: 30px;
}
.pages-item > h3 {
	font-weight: bold;
	font-size: 24px;
}
.pages-item > p {
	margin-top: 20px;
	font-weight: bold;
	font-size: 30px;
	color: red;
}
.pages-item > a {
	margin-top: 100px;
	text-decoration: none;
	display: block;
	color: black;
	width: 100px;
	padding: 10px;
	border-radius: 3px;
	text-align: center;
	font-weight: bold;
	background-color: darkkhaki;
}
.pages-item > a:hover {
	background-color: brown;
	color: aliceblue;
}
</style>
