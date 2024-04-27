import { configureStore } from '@reduxjs/toolkit'
import rootreducer from './redux/reducers/index'
const store =configureStore({ 
    reducer: rootreducer
});

export default store;
