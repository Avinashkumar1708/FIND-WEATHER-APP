import { createSlice } from "@reduxjs/toolkit";


const initialState={
  city: "",
  data:null,
}
export const weatherApiSlice = createSlice({
  name: "weatherApi",
 initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      // console.log(action.payload);
    },
    setData: (state, { payload }) => {
      state.data = payload;
    //  console.log(state.data)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCity, setData } = weatherApiSlice.actions;

export default weatherApiSlice.reducer;
