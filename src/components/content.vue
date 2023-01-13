<template>
	<div class="content">
		<Swiper />
		<List />
	</div>
</template>

<script>
import Swiper from "@/components/content/content-swiper.vue";
import List from "@/components/content/content-list.vue";
export default {
	components: { Swiper, List },
	data() {
		return {};
	},
};
</script>

<style scoped>
.content {
}
</style>
