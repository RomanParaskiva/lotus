import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  isLoading: boolean;
  users: string[][] | [];
}

const initialState: IState = {
  isLoading: false,
  users: [],
};

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    successGetUsers: (state, action) => {
      return {
        isLoading: false,
        users: [...action.payload],
      };
    },
  },
});

export const { getUsers, successGetUsers } = usersSlice.actions;

export default usersSlice.reducer;
