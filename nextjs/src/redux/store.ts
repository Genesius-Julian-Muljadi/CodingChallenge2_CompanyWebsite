import { configureStore } from "@reduxjs/toolkit";
import TMSlice from "./slices/togglemenu";

export const store = configureStore({
    reducer: {
        TMSlice,
    },
});