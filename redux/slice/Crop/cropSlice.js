import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  items: [],
  tradeCrop: {},
  addcroptofarm: [],
  loading: false,

};


export const addItemToCart = (cartItems, cartItemToAdd,) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantityPlanted: cartItem.quantityPlanted + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantityPlanted: 1, }];
};

const CropSlice = createSlice({
  name: "crop",
  initialState,

  reducers: {
    addToBasket: (state, action) => {
      state.items = addItemToCart(state.items, action.payload,);
    },
    addCropToTrade: (state, action) => {

      state.tradeCrop = {
        ...action.payload,
        remainingAmountPlanted: action.payload.amountPlanted
      };
      console.log("addCropToTrade:", state.tradeCrop);
    },
    updateTradeCrop: (state, action) => {
      const amountTraded = action.payload.amountTraded;
      let remainingAmountPlanted = state.tradeCrop.remainingAmountPlanted - amountTraded;

      // Make sure remainingAmountPlanted is non-negative
      remainingAmountPlanted = Math.max(remainingAmountPlanted, 0);

      state.tradeCrop = {
        ...state.tradeCrop,
        amountTraded: amountTraded,
        remainingAmountPlanted: remainingAmountPlanted
      };
    },

    deleteFromBasket: (state, action) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantityPlanted } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.items[index].quantityPlanted += 1
      } else {
        console.log(`Can't update quantity of product (id: ${id}) as it's not in basket!`);
      }
    },

    minusQuantity: (state, action) => {
      const { id, quantityPlanted } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.items[index].quantityPlanted -= 1
      } else {
        console.log(`Can't update quantity of product (id: ${id}) as it's not in basket!`);
      }
    },

    removeFromBasket: (state, action) => {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    addCroptoFarm: (state, action) => {
      state.addcroptofarm = action.payload;
    },
    addcroptofarmRequested: (state, action) => {
      state.loading = true;
    },

    addcroptofarmReceived: (state, action) => {
      state.plantedCrops = action.payload
      console.log("Payload received:", action.payload);
      state.loading = false;
    },

    addcroptofarmRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCropCategory,
  updateTradeCrop,
  addCropToTrade,
  setCropName,
  addCroptoFarm,
  addcroptofarmRequested,
  addcroptofarmReceived,
  addcroptofarmRequestFailed,
  setCropAmount,
  addToBasket,
  minusQuantity,
  updateQuantity,
  removeFromBasket,
  deleteFromBasket,
} = CropSlice.actions;



// export const getfarmbycustomerid = () => async (dispatch) => {
//   try {
//     const getToken = await retrieveUserDetails();
//     if (getToken && getToken.data.jwtToken) {
//       const token = getToken.data.jwtToken;
//       const customerIdd = getToken.data.user.userId
//       console.log(token, customerIdd)

//       dispatch(
//         apiCallBegan({
//           url: `farm/getfarmbycustomerid?customerId=${customerIdd}`,
//           extraHeaders: { "jwtToken": token },
//           method: "get",
//           onStart: getfarmbycustomeridRequested.type,
//           onSuccess: getfarmbycustomeridReceived.type,
//           onError: getfarmbycustomeridFailed.type,
//         })
//       );
//     } else {
//       const error = new Error("Unable to retrieve user customerId");
//       console.error(error);
//       dispatch(getfarmbycustomeridFailed(error.message));
//     }
//   } catch (error) {
//     console.error("An error occurred while fetching user profile:", error);
//     dispatch(getfarmbycustomeridFailed(error.message));
//   }
// };

export const AddCropToFarmLand = (values) => async (dispatch) => {
  try {
    const getToken = await retrieveUserDetails();
    if (getToken && getToken.data.jwtToken) {
      const token = getToken.data.jwtToken;
      dispatch(apiCallBegan({
        url: "/crop/addcropstofarm",
        method: "post",
        data: values,
        extraheaders: 'Bearer ' + token,
        onStart: addcroptofarmRequested.type,
        onSuccess: addcroptofarmReceived.type,
        onError: addcroptofarmRequestFailed.type,
      }));
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getMarketRequestFailed(error.message));
    }
  } catch (error) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getMarketRequestFailed(error.message));
  }

};


export const selectBasketItems = (state) => state.cropReducers.CropSlice.items

export const selectBasketItemsWithId = (state, id) => {
  return state.cropReducers.CropSlice.items.filter((item) => item.id === id);
};

export const selectBasketTotal = (state) => {
  return state.cropReducers.CropSlice.items
    .reduce((total, item) => {
      return total + (item.cropPrice * item.quantityPlanted);
    }, 0);
};



export default CropSlice.reducer;
