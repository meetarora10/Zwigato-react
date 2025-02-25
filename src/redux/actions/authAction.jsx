import axios from "axios";

// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/register", userData);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "REGISTER_FAIL", payload: error.response.data });
    }
};

// Login User
export const loginUser = (credentials) => async (dispatch) => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/login", credentials);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
};
