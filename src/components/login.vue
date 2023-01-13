<template>
	<div>
		<span>帳號:</span
		><input type="text" placeholder="請輸入帳號" v-model="email" />
		<span>密碼:</span
		><input type="text" placeholder="請輸入密碼" v-model.number="password" />
		<input type="button" value="送出" @click="userLogin" />
		<slot />
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
			this.$router.push("/mainview");
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
