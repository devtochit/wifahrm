import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: [],
};

export const addItemToCart = (cartItems, cartItemToAdd, id) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1, id }];
};

const CropSlice = createSlice({
  name: "crop",
  initialState,

  reducers: {
    addToBasket: (state, action) => {
      const id = uuidv4(); // generate a unique id using uuid
      state.items = addItemToCart(state.items, action.payload, id);
      console.log(state.items) 
    },
    deleteFromBasket: (state, action) => {
      state.items = [];
    },
    plusItem: (state, action) => {
      state.items[action.payload].quantity += 1;
      console.log(state.items[action.payload].quantity)
    },
    minusItem: (state, action) => {
      state.items[action.payload].quantity -= 1;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = state.items.filter((item) => item.id !== action.payload.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        items: newBasket,
      };
    },
  },
});

export const {
  setCropCategory,
  setCropName,
  setCropAmount,
  addToBasket,
  minusItem,
  plusItem,
  removeFromBasket,
  deleteFromBasket,
} = CropSlice.actions;

export const selectBasketItems = (state) =>  state.cropReducers.CropSlice.items

export const selectBasketItemsWithId = (state, id) => {
  return state.cropReducers.CropSlice.items.filter((item) => item.id === id);
};

export const selectBasketTotal = (state) =>  state.cropReducers.CropSlice.items.reduce((total, item) => (total += item. amount), 0);


// export const selectBasketTotal = (state) => {
//   // state.cropReducers.items.reduce((total, item) => (total += item.amount), 0);

// }

export default CropSlice.reducer;
