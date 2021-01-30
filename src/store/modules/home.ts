import axios from "axios";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store";
import { HomeState } from "@/store/modules/home.d";

const state: HomeState = {
  setDataLoading: false,
  hotelsList: [
    {
      name: "Отель 1",
      description: "Описание 1",
      price: 1000,
      location: "Москва",
      id: 1
    },
    {
      name: "Отель 2",
      description: "Описание 2",
      price: 2000,
      location: "Питер",
      id: 2
    },
    {
      name: "Отель 3",
      description: "Описание 3",
      price: 3000,
      location: "Москва",
      id: 3
    },
    {
      name: "Отель 4",
      description: "Описание 4",
      price: 4000,
      location: "Питер",
      id: 4
    },
    {
      name: "Отель 5",
      description: "Описание 5",
      price: 5000,
      location: "Москва",
      id: 5
    },
    {
      name: "Отель 6",
      description: "Описание 6",
      price: 6000,
      location: "Питер",
      id: 6
    },
    {
      name: "Отель 7",
      description: "Описание 7",
      price: 7000,
      location: "Москва",
      id: 7
    }
  ]
};

const getters: GetterTree<HomeState, RootState> = {
  getHotelById: state => (id: number) => {
    return state.hotelsList.find(user => user.id === id);
  }
};

const actions: ActionTree<HomeState, RootState> = {
  SetUserData: ({ commit }, payload) => {
    commit("SET_USER_DATA_LOADING", true);
    return axios
      .post("/dataUser", payload)
      .then(({ data }) => {
        return data;
      })
      .catch(e => {
        throw e;
      })
      .finally(() => {
        commit("SET_USER_DATA_LOADING", false);
      });
  }
};

const mutations: MutationTree<HomeState> = {
  SET_USER_DATA_LOADING: (state, payload) => {
    state.setDataLoading = payload;
  }
};

export const home: Module<HomeState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
