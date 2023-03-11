import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items:[]
};

const CropSlice = createSlice({
  name: "crop",
  initialState,

  reducers: {

    addToBasket: (state, action) => {
      const id = uuidv4(); // generate a unique id using uuid
      state.items = [...state.items, { ...action.payload, id }];
      console.log(state.items);
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
    
      let newBasket = [...state.items];
    
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }
    
      return {
        ...state,
        items: newBasket
      };
    },
  },
});

export const { setCropCategory, setCropName, setCropAmount,addToBasket,removeFromBasket, } = CropSlice.actions;


export const selectBasketItems = (state) =>  state.cropReducers.CropSlice.items

export const selectBasketItemsWithId = (state, id) => {
  return state.cropReducers.CropSlice.items.filter((item) => item._id === id);
};
export const selectBasketTotal = (state) =>  state.cropReducers.CropSlice.items.reduce((total, item) => (total += item. amount), 0);

export default CropSlice.reducer;
