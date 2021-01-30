<template>
  <div class="home">
    <HotelCard
      v-for="hotel of hotelsList"
      :key="hotel.id"
      :title="hotel.name"
      :txt="hotel.description"
      :price="hotel.price"
      :imageUrl="hotel.image"
      @openModal="handleOpenModal(hotel.id)"
      class="home-hotel-card"
    />

    <VModal
      :is-open="modalIsOpen"
      @close="modalIsOpen = false"
      class="form-modal"
    >
      <template #title>{{ hotelInfo.name }}</template>
      <template #body>
        <VInput class="form-modal__input" v-model="valName" label="ФИО:" />
        <VInput class="form-modal__input" v-model="valEmail" label="Email:" />
        <VButton title="Отправить" :on-click="sendDataUser" />
      </template>
    </VModal>

    <VModal :is-open="modalConfirmIsOpen" @close="modalConfirmIsOpen = false">
      <template #title>Данные успешно отправлены</template>
      <template #body>
        <div>Отель забронирован!</div>
      </template>
    </VModal>

    <VModal :is-open="modalErrorIsOpen" @close="modalErrorIsOpen = false">
      <template #title>Ошибка отправки данных</template>
      <template #body>
        <div>Возникла ошибка при отправке данных!</div>
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
  @homeState.Action SetUserData!: (obj: {
    name: string;
    email: string;
    id: null | number;
  }) => {};
  modalIsOpen = false;
  modalConfirmIsOpen = false;
  modalErrorIsOpen = false;
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
    this.SetUserData({
      name: this.valName,
      email: this.valEmail,
      id: this.selectHotel
    })
      .then(() => {
        this.modalIsOpen = false;
        this.modalConfirmIsOpen = true;
      })
      .catch(() => {
        this.modalIsOpen = false;
        this.modalErrorIsOpen = true;
      });
  }
}
</script>

<style lang="less">
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  &-hotel-card {
    width: calc((100% / 3) - 74px);
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    @media (max-width: 1280px) {
      width: calc((100% / 2) - 70px);
      &:nth-child(3n) {
        margin-right: 20px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-right: 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}
.form-modal {
  &__price {
    margin-bottom: 20px;
  }
  &__description {
    margin-bottom: 20px;
  }
  &__input {
    margin-bottom: 20px;
  }
}
</style>
