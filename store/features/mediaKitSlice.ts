import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import mediaKit from '../../data/mediaKit' 

const initialState = mediaKit


export const mediaKitSlice = createSlice({
  name: 'mediaKit',
  initialState,
   reducers: {
    editSection: (state, action) => {
      const { sectionId, newData } = action.payload;

      const section = state.sections.find(
        (item) => item.id === sectionId
      );
  
      if (section) {
        section.data.about = newData;
      }
    },

      editSocialSection: (state, action) => {
      const {  formData, item} = action.payload;

      let section = state?.sections[1].data.find(
        (ele) => ele.id === item.id
      );

      let ind = state.sections[1].data.findIndex(e=>e == section)

      if (section) {
        state.sections[1].data[ind] = formData
      }
     
    },

     editCampainSection: (state, action) => {
      const {  formData, item} = action.payload;

      let section = state?.sections[3].data.find(
        (ele) => ele.id === item.id
      );

      let ind = state.sections[3].data.findIndex(e=>e == section)

      if (section) {
        state.sections[3].data[ind] = formData
      }
    },

    addCampainSection: (state, action) => {
      const {  formData} = action.payload;
      state.sections[3].data.push(formData)
    },
  
     updateInitialState: (state, action) => {
      // const {data} = action.payload;
      state.sections[3].data = action.payload;
    },

    addItem: (state, action) => {
     state.sections.push(action.payload)
    },

    // removeItem: (state, action) => {
    //   const { section, id } = action.payload;

    //   state[section] = state[section].filter(
    //     item => item.id !== id
    //   );
    // },

     // updateField: (state, action) => {
    //   const { section, field, value } = action.payload;

    //   state[section][field] = value;
    // },

    // updateNestedField: (state, action) => {
    //   const { path, value } = action.payload;
    //   console.log(path, value)

    //   let current = state;

    //   for (let i = 0; i < path.length - 1; i++) {
    //     current = current[path[i]];
    //   }

    //   current[path[path.length - 1]] = value;
    // },
  },
});

export const {
  // updateField,
  // updateNestedField,
  editSection,
  addItem,
  // removeItem,
  editSocialSection,
  editCampainSection,
  addCampainSection,
  updateInitialState
} = mediaKitSlice.actions;

export default mediaKitSlice.reducer
