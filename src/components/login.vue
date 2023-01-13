<template>
	<div class="login">
		<div class="login-user"></div>
		<div class="loggin-User">
			<img src="https://i.imgur.com/GLu6bgf.png" alt="USER" />
			<input
				type="text"
				placeholder="請輸入帳號"
				v-model="email"
				style="margin-bottom: 10px"
			/><br />
			<input
				type="text"
				placeholder="請輸入密碼"
				v-model.number="password"
				style="margin-bottom: 10px"
			/><br />
			<button @click="userLogin" class="login-btn">送出</button>
			<slot />
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			email: "",
			password: "",
			user: [],
		};
	},

	methods: {
		userLogin() {
			let data = JSON.parse(JSON.stringify(this.user));
			let data2 = data.some(
				(item) => item.email === this.email && item.password === this.password
			);
			let user = JSON.stringify({ email: this.email, password: this.password });
			let regex =
				/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!this.email || !this.password) return alert("請輸入帳號或密碼");
			else if (regex.test(this.email) != true) {
				alert("請輸入正確的信箱格式!!");
				return;
			} else if (data2) {
				alert("登入成功!");
				this.$router.push("/mainview");
				localStorage.setItem("user", user);
				return;
			} else if (this.email !== data.email || this.password !== data.password) {
				return alert("帳號或密碼錯誤");
			}
		},
	},
	async mounted() {
		let data = await axios.get("./user.json");
		this.user = data.data;
	},
};
</script>

<style>
.login {
	width: 1264px;
	height: 610px;
	background-image: url(https://i.imgur.com/Fy4mlRH.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}
.login-user {
	position: absolute;
	background-color: deepskyblue;
	width: 300px;
	height: 350px;
	opacity: 0.3;
	border-radius: 10px;
	top: 100px;
	left: 450px;
}
.loggin-User {
	position: absolute;
	z-index: 100;
	top: 300px;
	left: 500px;
}
.loggin-User > input {
	padding: 5px 15px;
	background-color: lavender;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
.loggin-User > img {
	position: absolute;
	bottom: 100px;
	left: 20px;
	width: 200px;
	height: 200px;
}
.loggin-User > button {
	margin-left: 65px;
	padding: 5px 15px;
	background-color: lavender;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
</style>
