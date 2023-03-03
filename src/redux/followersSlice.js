import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require("@reduxjs/toolkit");

const followersSlice = createSlice({
    name:'followers',
    initialState: {value: 10500},
    reducers:{
        update(state, action){
            state.value+=action.payload;
        },
    },
});

const persistConfig = {
    key: 'followers',
    storage,
    whitelist: ['value'],
};

export const followersReducer = persistReducer(persistConfig, followersSlice.reducer);

export const { update } = followersSlice.actions;