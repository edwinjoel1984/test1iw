import { SET_POST } from "./posts.constant";

export const setPost = posts => async dispatch => {
    dispatch({ type: SET_POST, payload: posts });
};
