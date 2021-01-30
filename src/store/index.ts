import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { home } from "@/store/modules/home";

export interface RootState {
  version: string;
}

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: true,
  modules: {
    home
  },
  state: {
    version: "1.0.0"
  }
};

export default new Vuex.Store<RootState>(store);
