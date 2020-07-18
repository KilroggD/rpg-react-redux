import {createSlice} from '@reduxjs/toolkit';

const mapImagesSlice = createSlice({
    name: 'images',
    initialState: {},
    reducers: {
        bufferImage(state, action) {
            const path = action.payload;
            if (path) {
                state[path] = 1;
            }            
        },
    }
});

export const { bufferImage } = mapImagesSlice.actions;

export default mapImagesSlice.reducer;
