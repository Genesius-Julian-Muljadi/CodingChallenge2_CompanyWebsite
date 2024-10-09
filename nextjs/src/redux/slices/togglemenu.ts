import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuIsOpen: false
};

const toggleMenuSlice = createSlice({
    name: "TMSlice",
    initialState,
    reducers: {
        toggleMenu: (state: {menuIsOpen: Boolean}, input: {payload: string}) => {
            if (input.payload === "open") {
                state.menuIsOpen = true;
            } else if (input.payload === "close") {
                state.menuIsOpen = false;
            } else {
                console.log("Invalid input: " + input.payload);
            };
        }
    },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;