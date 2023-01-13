<template>
	<div class="header-shopcar">
		<Header />
		<div class="shopcar-wrap">
			<p class="shopcar-detail">確認購買明細</p>
			<div
				v-for="(item, index) in shopcarList"
				:ket="item.id"
				class="shopcar-list"
			>
				<img :src="item.img" alt="" />
				<p>{{ item.title }}</p>
				<p style="color: red">{{ `$${item.price}` }}</p>
				<a href="" @click.prevent="deleteList(index)">移除</a>
			</div>
			<div class="shopcar-total">
				<p>
					訂單總額:<span style="color: red">{{ totalPrice }}元</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header,
	},
	computed: {
		shopcarList() {
			return this.$store.state.shopCar;
		},
		totalPrice() {
			const initialValue = 0;
			let price = this.shopcarList.map((item) => {
				return item.price;
			});
			return price.reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				initialValue
			);
		},
	},
	methods: {
		deleteList(index) {
			this.$store.commit("deleterList", index);
		},
	},
};
</script>

<style scoped>
.header-shopcar {
	width: 1180px;
	margin: 0 auto;
	padding-top: 30px;
}
.shopcar-wrap {
	margin-top: 50px;
	margin-left: 200px;
}
.shopcar-list {
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	width: 800px;
	padding-bottom: 10px;
	border-bottom: 1px solid #e8e8e8;
}
.shopcar-list > img {
	width: 140px;
	height: 150px;
}
.shopcar-list > p {
	font-weight: bold;
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.shopcar-list > a {
	text-decoration: none;
	font-weight: bold;
	color: gray;
}
.shopcar-list > a:hover {
	color: darkkhaki;
}
.shopcar-detail {
	width: 100px;
	padding: 20px;
	background-color: red;
	border-radius: 10px;
	color: aliceblue;
	margin-left: 350px;
	font-size: 16px;
	font-weight: bold;
}
.shopcar-total {
	padding-top: 20px;
	border-top: 1px solid #e8e8e8;
	width: 800px;
	margin-bottom: 50px;
}
.shopcar-total > p {
	float: right;
	color: black;
	font-size: 30px;
	font-weight: bold;
}
</style>
