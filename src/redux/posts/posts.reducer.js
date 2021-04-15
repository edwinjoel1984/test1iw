import { SET_POST } from "./posts.constant";

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_POST:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
