import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const addItemToCart = (cartItems, cartItemToAdd,) => {
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

  return [...cartItems, { ...cartItemToAdd, quantity: 1, }];
};

const CropSlice = createSlice({
  name: "crop",
  initialState,

  reducers: {
    addToBasket: (state, action) => {
      state.items = addItemToCart(state.items, action.payload,);
      console.log('inside cropslice', state.items)
    },
    deleteFromBasket: (state, action) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.items[index].quantity += 1
      } else {
        console.log(`Can't update quantity of product (id: ${id}) as it's not in basket!`);
      }
    },

    minusQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.items[index].quantity -= 1
      } else {
        console.log(`Can't update quantity of product (id: ${id}) as it's not in basket!`);
      }
    },

    removeFromBasket: (state, action) => {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      console.log(state.items)
    },
  },
});

export const {
  setCropCategory,
  setCropName,
  setCropAmount,
  addToBasket,
  minusQuantity,
  updateQuantity,
  removeFromBasket,
  deleteFromBasket,
} = CropSlice.actions;

export const selectBasketItems = (state) => state.cropReducers.CropSlice.items

export const selectBasketItemsWithId = (state, id) => {
  return state.cropReducers.CropSlice.items.filter((item) => item.id === id);
};

export const selectBasketTotal = (state) => {
  return state.cropReducers.CropSlice.items
  .reduce((total, item) => {
    return total + (item.cropPrice * item.quantity);
  }, 0);
};



export default CropSlice.reducer;
