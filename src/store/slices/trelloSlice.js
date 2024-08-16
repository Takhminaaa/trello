import { createSlice } from "@reduxjs/toolkit";

const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    trello: [],
    isOpenCart: false,
  },
  reducers: {
    openCart: (state) => {
      state.isOpenCart = true;
    },
    closeModal: (state) => {
      state.isOpenCart = false;
    },

    addValue: (state, action) => {
      state.trello.push(action.payload);
    },
    addCard: (state, action) => {
      console.log(action.payload);
      state.trello.map((item) => {
        if (item.id === action.payload.id) {
          item.newTrello.push(action.payload.newItem);
        }
        return item;
      });
    },
    deleteTrello: (state, action) => {
      const trelloId = action.payload;
      const filtered = state.trello.filter((item) => item.id !== trelloId);
      state.trello = filtered;
    },
  },
});
export const { addValue, addCard, deleteTrello, openCart, closeModal } =
  trelloSlice.actions;
export const trelloReducer = trelloSlice.reducer;
