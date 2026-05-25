import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import collaborations from '../../data/collaborations';


// export interface collaborationState {
//   brand: number
// }

// const initialState: collaborationState = {
//   brand: 10,
// }

const initialState = collaborations

export const collaborationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToColab: (state,action: PayloadAction<any>) => {
    state.push(action.payload)
    },
    decrement: (state) => {
    //   state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToColab, decrement, incrementByAmount } = collaborationSlice.actions

export default collaborationSlice.reducer