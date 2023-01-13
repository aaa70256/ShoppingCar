<template>
	<div class="footer">
		<div class="footer-font">
			<p>© Gap、lativ、台灣威富品牌有限公司 版權所有</p>
			<p>Teng製作</p>
		</div>
		<p class="footer-privacy">※以上資訊僅供參考及本作品使用</p>
	</div>
</template>

<script>
export default {
	components: {},
};
</script>

<style scoped>
.footer {
	margin-top: 30px;
	border-top: 1px solid #e8e8e8;
	padding-bottom: 30px;
	position: relative;
}
.footer-font {
	margin-top: 20px;
}
.footer-font p {
	color: darkorange;
	font-size: 16px;
	line-height: 1.5em;
	text-align: center;
	font-weight: bold;
}
.footer-privacy {
	font-size: 6px;
	color: darkolivegreen;
	position: absolute;
	bottom: 10px;
	right: 0;
}
</style>
