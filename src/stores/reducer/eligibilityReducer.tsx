import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EligibilityState {
  nik?: string;
  phoneNumber?: string;
} 

const initialState: EligibilityState = { nik: "", phoneNumber: undefined };

export const uploadEligibilty = createSlice({
  name: "eligibility",
  initialState,
  reducers: {
    addEligibility: (
      state,
      action: PayloadAction<{ nik: string; phoneNumber?: string }>
    ) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.nik = action.payload.nik;
    },
    clearEligibility: (state) => {
      state.phoneNumber = undefined;
      state.nik = "";
    },
  },
});

export const { addEligibility, clearEligibility } = uploadEligibilty.actions;

export default uploadEligibilty.reducer;
