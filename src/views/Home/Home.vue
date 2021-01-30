<template>
  <div class="home">
    <HotelCard
      v-for="hotel of hotelsList"
      :key="hotel.id"
      :title="hotel.name"
      :txt="hotel.description"
      :price="hotel.price"
      @openModal="handleOpenModal(hotel.id)"
      class="home-hotel-card"
    />

    <VModal
      :is-open="modalIsOpen"
      @close="modalIsOpen = false"
      title="Бронирование"
    >
      <template #title>{{ hotelInfo.name }}</template>
      <template #body>
        <div>{{ hotelInfo.description }}</div>
        <div>{{ hotelInfo.price }}₽</div>
        <VInput v-model="valName" label="ФИО:" />
        <VInput v-model="valEmail" label="Email:" />
        <VButton title="Отправить" :on-click="sendDataUser" />
      </template>
    </VModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Hotel } from "@/store/modules/home.d";
import Icon from "@/components/Icon/Icon.vue";
import VModal from "@/components/VModal.vue";
import HotelCard from "@/views/Home/components/HotelCard.vue";
import VInput from "@/components/VInput.vue";
import VButton from "@/components/VButton.vue";

const homeState = namespace("home");

@Component({
  name: "Home",
  components: { VInput, VButton, HotelCard, VModal, Icon }
})
export default class Home extends Vue {
  @homeState.State hotelsList!: Array<Hotel>;
  @homeState.Getter getHotelById!: (id: number | null) => {};
  @homeState.Action SetUserData!: (name: string, email: string) => {};
  modalIsOpen = false;
  selectHotel: null | number = null;

  valName = "";
  valEmail = "";

  get hotelInfo() {
    return this.getHotelById(this.selectHotel);
  }

  handleOpenModal(id: number) {
    this.selectHotel = id;
    this.modalIsOpen = true;
  }
  sendDataUser() {
    this.SetUserData({ name: this.valName, email: this.valEmail });
  }
}
</script>

<style lang="less">
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  &-hotel-card {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
