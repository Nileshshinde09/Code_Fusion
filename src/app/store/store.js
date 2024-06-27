import {configureStore} from '@reduxjs/toolkit';
import themeSlice from '../slices/themeSlice.js';
import bgSlice from '../slices/bgSlice.js';
import authSlice from '../slices/authSlice.js';
const store = configureStore({
    reducer: {  
        theme:themeSlice,
        background:bgSlice,
        auth:authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
});


export default store;