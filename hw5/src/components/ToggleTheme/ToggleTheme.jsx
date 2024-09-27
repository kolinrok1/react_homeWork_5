
const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({type: TOGGLE_THEME});

const initialState = {
    theme: true,
};

export const ToggleThemeReducer = (state = initialState , action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {...state, theme: !state.theme}
    
        default:
            return state;
    }
}