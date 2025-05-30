import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Термокружка Stanley",
      description: "Нержавіюча термокружка об'ємом 0.47 л з подвійними стінками.",
      price: 890,
      image: "https://stanley-ua.com/tmp/cache/images/d6/678/79-1092_025_green_stanley-uacom_1636099666096008100-1050x1050.jpg",
    },
    {
      id: 2,
      name: "Ліхтар налобний Petzl Tikka",
      description: "Компактний налобний ліхтар для кемпінгу та нічних походів.",
      price: 1450,
      image: "https://scdn.ibis-gear.com/media/cache/original/c4/1c/96fa3b06853331e5c3920a3523a9.jpg",
    },
    {
      id: 3,
      name: "Складаний ніж Victorinox",
      description: "Мультифункціональний ніж із 12 інструментами. Вироблено у Швейцарії.",
      price: 2100,
      image: "https://ganzo.ua/ua/wa-data/public/shop/products/12/22/1002212/images/1008944/1008944.970.jpg",
    },
    {
      id: 4,
      name: "Туристичний рюкзак Osprey Hikelite",
      description: "Легкий рюкзак з вентиляцією спини, ідеально підходить для походів.",
      price: 3950,
      image: "https://fonarik.com/wa-data/public/shop/products/59/84/68459/images/306421/306421.970.png",
    },
    {
      id: 5,
      name: "Пальник газовий Tramp",
      description: "Компактний газовий пальник для приготування їжі на природі.",
      price: 780,
      image: "https://palatka.com.ua/images/watermarked/1/detailed/221/palnyk-turistichnyi-Tramp-UTRG-046-01.jpg",
    },
    {
      id: 6,
      name: "Термобілизна чоловіча Norfin",
      description: "Тепла термобілизна для активного відпочинку в холодну погоду.",
      price: 1200,
      image: "https://hfostore.com/image/cache/catalog/easyphoto/283/cholov-cha-termob-lizna-norfin-thermo-line_1-1200x800.jpg",
    },
    {
      id: 7,
      name: "Фляга туристична Tramp",
      description: "Алюмінієва фляга об'ємом 1 літр із карабіном.",
      price: 320,
      image: "https://hantengry.com.ua/content/images/46/320x480l50nn0/aluminiieva-flyaga-v-neoprenovomu-chokhli-06-l-tramp-trc-033-23825287648358.jpg",
    },
    {
      id: 8,
      name: "Килимок пінний туристичний",
      description: "Класичний каремат для походів. Розмір 180×60 см, товщина 1 см.",
      price: 310,
      image: "https://cdn.capricorn.com.ua/photo/g/413/18/full/9fd10588a886cac5909755e5c69535cb.jpeg",
    },
    {
      id: 9,
      name: "Куртка Softshell Alpine Pro",
      description: "Вітрозахисна та водонепроникна куртка для походів.",
      price: 2300,
      image: "https://alpinesport.com.ua/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/_/0/_09132_1.jpg",
    },
  ],
};



const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setProducts(state, action) {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setLoading(state) {
      state.status = "loading";
    },
    setError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  setProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;
