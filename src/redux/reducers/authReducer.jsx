const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return { ...state, user: action.payload, token: action.payload.token, error: null };
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
