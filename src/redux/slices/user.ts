/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, createSlice } from "@reduxjs/toolkit";

interface DriverState {
  userProfile: any;
  usdtBalance: any;
  balanceDB: any;
  isLoading: any;
}

const initialState: DriverState = {
  userProfile: null,
  balanceDB: null,
  usdtBalance: 0,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getBalanceUSDT(state, action) {
      state.usdtBalance = action.payload;
    },
    getBalanceDB(state, action) {
      state.balanceDB = action.payload;
    },
    getUserProfile(state, action) {
      state.userProfile = action.payload;
    },
    isLoadingSuccess(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export function userProfile(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(userSlice.actions.getUserProfile(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function BalanceDB(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(userSlice.actions.getBalanceDB(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function BalanceUSDT(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(userSlice.actions.getBalanceUSDT(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function IsLoadingRedux(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(userSlice.actions.isLoadingSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

const userReducer = userSlice.reducer;

export default userReducer;
