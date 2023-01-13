<template>
	<div class="mainview">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Content from "@/components/content.vue";

export default {
	name: "HomeView",
	components: {
		Header,
		Footer,
		Content,
	},
	data() {
		return {};
	},
};
</script>
<style>
.mainview {
	width: 1180px;
	margin: 0 auto;
	padding-top: 30px;
}
</style>
