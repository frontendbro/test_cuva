import axios from "axios";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store";
import { HomeState } from "@/store/modules/home.d";

const state: HomeState = {
  setDataLoading: false,
  hotelsList: [
    {
      name: "Кемпински Гранд Отель Геленджик",
      description:
        "Этот курортный спа-отель с красивым видом на Геленджикскую бухту расположен на Толстом мысе, на побережье Черного моря. К услугам гостей бассейн, сауна и теннисный корт. Великолепное здание гостиницы «Кемпински Гранд Геленджик» построено в современном стиле. В каждом роскошном и стильном номере есть балкон, телевизор с плоским экраном, мини-бар, халаты и тапочки. В некоторых номерах имеются DVD-плеер, обеденная и гостиная зоны, а также ванная комната с гидромассажной ванной. Каждое утро в ресторане «Ривьера» сервируют вкусный разнообразный завтрак «шведский стол». Кроме того, на территории открыты 2 ресторана кухни фьюжн и 4 бара. В спа-центре отеля «Кемпински» есть несколько видов саун, лакониум, соляная пещера, а также крытый и открытый бассейны со снэк-баром. Кроме того, гости могут позаниматься в современном фитнес-центре гостиницы. Профессиональные массажисты и косметологи проводят разнообразные массажные и спа-процедуры. Помимо этого, на территории есть круглосуточный лобби-бар, туристическое бюро и детская игровая площадка. Недалеко от отеля находится пляж с зоной для отдыха, шезлонгами, рестораном, баром и детской игровой площадкой. Гости также могут заняться различными водными видами спорта. В зимнее время года в гостинице работает каток с искусственным льдом.",
      price: 1000,
      location: "Улица Революционная, 53, Геленджик, Россия",
      rating: 8.8,
      image: "hotel_1/263364607.jpg",
      id: 1
    },
    {
      name: "Приморье Grand Resort Hotel 5*",
      description:
        "Современный курортный гранд-отель «Приморье» расположен в Геленджике, в 80 метрах от берега Черного моря. К услугам гостей роскошный спа-центр с крытым подогреваемым бассейном с морской водой На территории отеля работают изысканные рестораны. Комфортабельные номера оснащены системой климат-контроля. В числе удобств — балкон, мини-бар и спутниковое телевидение. В современных ванных комнатах предоставляются эксклюзивные туалетно-косметические принадлежности, халаты и тапочки. При курортном гранд-отеле «Приморье» открыт спа-центр с сауной, паровой баней, гидромассажной ванной и массажным кабинетом. В распоряжении гостей современный тренажерный зал и теннисный корт. В оздоровительном спа-центре имеется финская сауна, хаммам и инфракрасная сауна, а также предлагаются различные спа-процедуры. Гости могут воспользоваться помещениями для совещаний. В курортном гранд-отеле «Приморье» имеется частная парковка. Поездка до аэропорта Геленджика занимает 20 минут. Это любимая часть города Геленджик среди наших гостей согласно независимым отзывам. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,7.",
      price: 2000,
      location: "улица Мира, 23, Геленджик, Россия",
      rating: 9.0,
      image: "hotel_2/247840289.jpg",
      id: 2
    },
    {
      name: "Отель Черное Море",
      description:
        "Этот стильный отель расположен всего в 3 минутах ходьбы от центрального пляжа Геленджика. К услугам гостей бесплатный Wi-Fi. Расстояние до аквапарка «Дельфин» составляет 500 метров. Номера отеля «Черное море» оформлены в теплой цветовой гамме и оснащены телевизором с плоским экраном. В ванных комнатах установлен душ. Из некоторых номеров можно выйти на балкон. Продовольственный рынок находится в 5 минутах ходьбы от отеля «Черное море», а многочисленные кафе можно посетить менее чем в 3 минутах ходьбы. По запросу сотрудники организуют трансфер до аэропорта Геленджика (8 км). Прогулка от отеля «Черное море» до автобусной остановки, с которой можно доехать до других районов города, занимает 3 минуты. Это любимая часть города Геленджик среди наших гостей согласно независимым отзывам. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,8.",
      price: 3000,
      location: "Улица Школьная, 12, Геленджик, Россия",
      rating: 9.3,
      image: "hotel_3/16196793.jpg",
      id: 3
    },
    {
      name: "Отель Марсель",
      description:
        "Отель «Марсель» расположен в Геленджике, в 200 метрах от побережья Черного моря. К услугам гостей бесплатный Wi-Fi Номера оснащены кондиционером, чайником, телевизором с плоским экраном и письменным столом. В каждом из них обустроена собственная ванная комната с душем. Некоторые номера отеля «Марсель» выходят на балкон. Каждое утро для гостей сервируют завтрак «шведский стол». Стойка регистрации открыта круглосуточно. В 2,5 км от отеля «Марсель» находится парк развлечений «Олимп». Расстояние до аэропорта Геленджика составляет 6 км. Это любимая часть города Геленджик среди наших гостей согласно независимым отзывам. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,7.",
      price: 4000,
      location: "Улица Советская, 15, Геленджик, Россия",
      rating: 9.7,
      image: "hotel_4/101143514.jpg",
      id: 4
    },
    {
      name: "Астель Вилла",
      description:
        "Отель «Астель Вилла» расположен рядом с пляжем в Геленджике, в 1,4 км от пляжа санатория «Красная Талка». К услугам гостей сезонный открытый бассейн, общий лаундж и сад. Стойка регистрации этого 3-звездочного отеля открыта круглосуточно, предоставляются услуги консьержа. В распоряжении гостей бесплатный Wi-Fi и частная парковка за дополнительную плату. Во всех номерах отеля есть письменный стол, телевизор с плоским экраном и собственная ванная комната. Также номера мини-гостиницы «Астель Вилла» оснащены кондиционером и шкафом для одежды. В отеле сервируется завтрак «шведский стол». В числе удобств 3-звездочного отеля — гидромассажная ванна и детская игровая площадка. В Геленджике и его окрестностях гости отеля могут заняться разнообразными видами активного отдыха, включая пешие походы и сноркелинг. Расстояние от отеля «Астель Вилла» до аэропорта Геленджика составляет 10 км. За дополнительную плату для гостей организуют трансфер от/до аэропорта. Это любимая часть города Геленджик среди наших гостей согласно независимым отзывам. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,8.",
      price: 5000,
      location: "Москва",
      rating: 9.6,
      image: "hotel_5/161762244.jpg",
      id: 5
    },
    {
      name: "Отель Оскар",
      description:
        "Гостиница «Оскар» расположена в Геленджике, в 700 метрах от берега Черного моря и Центрального городского пляжа и в 2 км от парка развлечений «Олимп». На территории работает бесплатный Wi-Fi. Во всех номерах есть кондиционер, сейф и телевизор с плоским экраном. Собственная ванная комната укомплектована феном, тапочками и бесплатными туалетно-косметическими принадлежностями. В некоторых номерах имеется диван и балкон. В кафе отеля ежедневно сервируется «шведский стол». В 5 минутах ходьбы от отеля открыты супермаркеты, кафе и рестораны. Стойка регистрации работает круглосуточно. В числе прочих удобств — бесплатная камера хранения багажа. Отель находится в 700 метрах от Краеведческого музея. Поездка до центрального автобусного вокзала займет 7 минут. Расстояние до аэропорта Геленджика составляет 6 км. За дополнительную плату организуется трансфер на автобусе. Это любимая часть города Геленджик среди наших гостей согласно независимым отзывам. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,0.",
      price: 6000,
      location: "Улица Островского, 35, Геленджик, Россия",
      rating: 8.7,
      image: "hotel_6/156953716.jpg",
      id: 6
    },
    {
      name: "Отель Атлас",
      description:
        "Отель «Атлас» расположен в Геленджике, в 10 минутах ходьбы от набережной. К услугам гостей бесплатный бильярд и открытый бассейн с подогревом. Предоставляется бесплатный Wi-Fi. По-домашнему уютные номера гостиницы «Атлас» оформлены в лаконичном стиле. Пол выложен паркетом. В числе стандартных удобств — кондиционер, холодильник и телевизор. Кроме того, в каждом номере имеется собственная ванная комната с душем. В кафе сервируют завтрак и подают разнообразные блюда русской и европейской кухни. Также здесь предлагают детское меню. Гости могут отдохнуть за бокалом напитка в баре с хорошим ассортиментом или на открытой террасе. На круглосуточной стойке регистрации отеля «Атлас» предоставляются услуги экскурсионного бюро. Автомобиль можно оставить на бесплатной охраняемой парковке. За дополнительную плату предоставляется трансфер от/до любого пункта назначения в Краснодарском крае. В пределах 10 минут ходьбы от гостиницы находятся зоопарк «Сафари-парк» и аквапарк «Бегемот». Прогулка до многочисленных магазинов и ресторанов в центре Геленджика занимает 20 минут.",
      price: 7000,
      location: "Улица Гоголя, 17, Геленджик, Россия",
      rating: 7.6,
      image: "hotel_7/274483689.jpg",
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
