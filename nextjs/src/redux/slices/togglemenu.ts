import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuIsOpen: false
};

const toggleMenuSlice = createSlice({
    name: "TMSlice",
    initialState,
    reducers: {
        toggleMenu: (state: {menuIsOpen: Boolean | null}, input: {payload: string}) => {
            if (input.payload === "open") {
                // state.menuIsOpen = null;  // Doubling to force state change to prevent menu getting stuck
                state.menuIsOpen = true;
            } else if (input.payload === "close") {
                state.menuIsOpen = false;
            } else if (input.payload === "reset") {
                state.menuIsOpen = null;
            } else {
                console.log("Invalid input: " + input.payload);
            };
        }
    },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;