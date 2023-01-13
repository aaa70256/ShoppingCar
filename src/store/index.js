import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contentApi: [],
		shopCar: [],
		list: "",
	},
	getters: {},
	mutations: {
		getApi(state, data) {
			state.contentApi = data;
		},
		onShopcar(state, val) {
			state.shopCar.push(val);
		},
		deleterList(state, index) {
			state.shopCar.splice(index, 1);
		},
		Women(state, val) {
			state.list = val;
		},
		Men(state, val) {
			state.list = val;
		},
		Kids(state, val) {
			state.list = val;
		},
		Baby(state, val) {
			state.list = val;
		},
	},
	actions: {
		setApi({ commit }, data) {
			commit("getApi", data);
		},
	},
	modules: {},
});
