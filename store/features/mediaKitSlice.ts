import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import mediaKit from '../../data/mediaKit' 

const initialState = mediaKit


export const mediaKitSlice = createSlice({
  name: 'mediaKit',
  initialState,
   reducers: {
    updateField: (state, action) => {
      const { section, field, value } = action.payload;

      state[section][field] = value;
    },

    updateNestedField: (state, action) => {
      const { path, value } = action.payload;
      console.log(path, value)

      let current = state;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;
    },

    addItem: (state, action) => {
    //   const { section, item } = action.payload;

    //   state[section].push(item);
    state.sections.push(action.payload)
    },

    removeItem: (state, action) => {
      const { section, id } = action.payload;

      state[section] = state[section].filter(
        item => item.id !== id
      );
    },
  },
});

export const {
  updateField,
  updateNestedField,
  addItem,
  removeItem,
} = mediaKitSlice.actions;

export default mediaKitSlice.reducer
