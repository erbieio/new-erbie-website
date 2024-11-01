import { createSlice } from "@reduxjs/toolkit";


export const deploymentStore = createSlice({
  name: "deployment",
  initialState: {
    step: 1,
    title: "Contract Deployment",
  },
  reducers: {
    setStep(state, action) {
      const val = action.payload;
      state.step = action.payload;
      switch (val) {
        case 1:
        case 2:
          state.title = "Contract Deployment";
          break;
        case 3:
          state.title = "No-Code Contract Deployment";
          break;
        default:
          state.title = "Deployment INFORMATION";
          break;
      }
    },
  },
});

export const { setStep } = deploymentStore.actions;

export default deploymentStore.reducer;
