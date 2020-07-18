import {createSlice} from '@reduxjs/toolkit';

const statusSlice = createSlice({
    name: 'status',
    initialState: {
        mapLoaded: false,
        characterLoaded: false,
    },
    reducers: {
        loadMap(state, payload) {
            state.mapLoaded = payload;
        },
        loadCharacter(state, payload) {
            state.characterLoaded = payload;
        },
    }
});

export const { loadMap, loadCharacter } = statusSlice.actions;

export default statusSlice.reducer;