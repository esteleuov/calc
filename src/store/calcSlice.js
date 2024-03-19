import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        value: '0',
        sign: '',
        value2: '',
        res: ''
    },
    reducers: {
        dial: (state, action) => {
            if (state.value === '0' && action.payload === 0) {
                state.value = action.payload
                state.value = state.value.toString()
            } else {
                if (state.value === '0') {
                    state.value = 0
                    state.value += action.payload
                    state.value = state.value.toString()
                    console.log(state.value);
                } else {
                    state.value =+ action.payload
                }
                
            }
        },
        add: (state, action) => {
            state.value2 = state.value
            state.sign = '+'
            state.value = '0'
        },
        sub: (state, action) => {
            state.value2 = state.value
            state.sign = '-'
            state.value = '0'
        },
        mul: (state, action) => {
            state.value2 = state.value
            state.sign = '*'
            state.value = '0'
        },
        div: (state, action) => {
            state.value2 = state.value
            state.sign = '/'
            state.value = '0'
        },
        eq: (state, action) => {
            if (state.value2 === '' || state.sign === '='){
                state.value2 = state.value
                state.sign = '='
            }
            // if (state.sign === '+' && value2 !== ''){
            //     // state.
            // }
        },
        clear: (state, action) => {
            state.value = '0'
        },
        clearE: (state, action) => {
            state.value = '0'
            state.value2 = ''
            state.sign = ''
        }
    },

})

export const { dial, add, sub, mul, div, eq, clear, clearE } = calcSlice.actions
export default calcSlice.reducer