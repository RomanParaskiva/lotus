import { createSlice } from "@reduxjs/toolkit";
import { ILot } from "../../../types";

export interface IState {
  isLoading: boolean;
  lots: ILot[] | [];
}

const initialState: IState = {
  isLoading: false,
  lots: [],
};

export const lotsSlice = createSlice({
  name: "lotsState",
  initialState,
  reducers: {
    getLots: (state) => {
      state.isLoading = true;
    },
    successGetLots: (state, action) => {
      return {
        ...state,
        isLoading: false,
        lots: [...action.payload],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLots, successGetLots } = lotsSlice.actions;

export default lotsSlice.reducer;
