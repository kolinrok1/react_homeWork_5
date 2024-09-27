import { configureStore } from "@reduxjs/toolkit";
import { ToggleThemeReducer } from "./ToggleTheme";

export const store = configureStore({
  reducer: {
    theme: ToggleThemeReducer,
  },
});
