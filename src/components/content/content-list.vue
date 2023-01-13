<template>
	<div class="content-list">
		<ul class="page-list">
			<li v-for="item in listAPI" :key="item.id" class="page-list-li">
				<a href="" @click.prevent="goPages(item.id)">
					<img :src="item.img" alt="photo" />
					<h3>{{ item.title }}</h3>
					<p>{{ `$${item.price}` }}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {};
	},
	methods: {
		goPages(id) {
			this.$router.push({
				name: "contentPages",
				params: {
					id: id,
				},
			});
		},
	},
	computed: {
		list() {
			return this.$store.state.list;
		},
		listAPI() {
			let list = JSON.parse(JSON.stringify(this.$store.state.contentApi));
			console.log(list);
			if (this.list == "") {
				return this.$store.state.contentApi;
			}
			return list.filter((item) => {
				return this.list.includes(item.value);
			});
		},
	},
	async mounted() {
		let data = await axios.get("./content.json");
		this.$store.dispatch("setApi", data.data);
	},
};
</script>

<style scoped>
.content-list {
	margin-top: 30px;
}
.page-list {
	display: flex;
	flex-wrap: wrap;
}
.page-list-li {
	width: 385px;
	padding-left: 6px;
}
.page-list-li > a {
	display: block;
	text-decoration: none;
	margin-bottom: 20px;
	height: 478px;
}
.page-list-li > a > img {
	width: 100%;
	height: 385px;
}
.page-list-li > a > h3 {
	color: darkgoldenrod;
	font-size: 20px;
	margin-left: 5px;
	font-weight: bold;
}
.page-list-li > a > p {
	color: red;
	font-size: 16px;
	margin-top: 15px;
	margin-left: 5px;
}
.page-list-li > a:hover {
	box-shadow: 0px 0px 3px gray;
	width: 388px;
	height: 480px;
	transition: 0.1s;
}
</style>
