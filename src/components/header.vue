<template>
	<div class="header">
		<a href="" @click.prevent="goMainview"
			><img src="https://i.imgur.com/dphgrX4.png" alt="logo"
		/></a>
		<ul class="header-menu">
			<li class="header-menu-women">
				<a href="" @click.prevent="WOMEN">WOMEN</a>
			</li>

			<li class="header-menu-men"><a href="" @click.prevent="MEN">MEN</a></li>

			<li class="header-menu-kids">
				<a href="" @click.prevent="KIDS">KIDS</a>
			</li>

			<li class="header-menu-baby">
				<a href="" @click.prevent="BABY">BABY</a>
			</li>
		</ul>
		<ul class="header-head">
			<li><a href="">登出</a></li>
			<li class="shpocarAmount">
				<p class="amount">{{ shpocarAmount.length }}</p>
				<a href="" @click.prevent="goShopcar">購物車</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		shpocarAmount() {
			return this.$store.state.shopCar;
		},
	},
	methods: {
		goShopcar() {
			this.$router.push("/headerShopcar");
		},
		goMainview() {
			this.$router.push("/mainview");
		},
		WOMEN() {
			this.$store.commit("Women", "Women");
		},
		MEN() {
			this.$store.commit("Men", "Men");
		},
		KIDS() {
			this.$store.commit("Kids", "Kid");
		},
		BABY() {
			this.$store.commit("Baby", "Baby");
		},
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
}
.header-menu li {
	float: left;
	padding-left: 30px;
	padding-right: 30px;
}
.header-menu-women,
.header-menu-men,
.header-menu-kids,
.header-menu-baby {
	border-right: 1px solid gainsboro;
}
.header-menu > li > a {
	text-decoration: none;
	color: gainsboro;
}
.header-menu > li > a:hover {
	color: gray;
}
.header-head > li {
	float: left;
	margin-right: 20px;
	padding-right: 10px;
	border-right: 1px dotted gainsboro;
}
.header-head > li > a {
	text-decoration: none;
	color: black;
	display: block;
	font-size: 10px;
}
.header-head > li > a:hover {
	border-bottom: 1px solid black;
}
.shpocarAmount {
	position: relative;
}
.amount {
	position: absolute;
	bottom: 10px;
	font-size: 8px;
	font-weight: bold;
	right: 0;
	color: red;
}
</style>
