const initialState = {
  isLoading: false,
  data: [],
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "menu_loading":
      console.log("loading");
      return {
        ...state,
        isLoading: true,
      };
    case "menu_loaded":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
