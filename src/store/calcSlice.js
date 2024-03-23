import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    value: "0",
    sign: "",
    value2: "",
    value3: "",
    res: "",
  },
  reducers: {
    dial: (state, action) => {
      if (state.res[state.res.length - 1] === "=") {
        state.res = "";
        state.value = "0";
        state.value2 = "";
      }
      if (state.value === "0" && action.payload === 0) {
        state.value = action.payload;
        state.value = state.value.toString();
      } else {
        if (state.value === "0") {
          state.value = 0;
          state.value += action.payload;
          state.value = state.value.toString();
        } else {
          state.value += action.payload;
        }
      }
      if (state.value.length === 17) {
        state.value = state.value.slice(0, 16);
      }
    },
    add: (state, action) => {
      if (state.res[state.res.length - 1] === "+") {
        state.value2 = parseFloat(state.value) + parseFloat(state.value2);
        state.res = state.value2 + "+";
        state.sign = "+";
      } else {
        state.value2 = state.value;
        state.res = state.value2 + "+";
        state.sign = "+";
        state.value = "0";
      }
      state.value = state.value.toString();
    },
    sub: (state, action) => {
      if (state.res[state.res.length - 1] === "-") {
        state.value2 = parseFloat(state.value2) - parseFloat(state.value);
        state.res = state.value2 + "-";
        state.sign = "-";
      } else {
        state.value2 = state.value;
        state.res = state.value2 + "-";
        state.sign = "-";
        state.value = "0";
      }
      state.value = state.value.toString();
    },
    mul: (state, action) => {
      if (state.res[state.res.length - 1] === "*") {
        state.value2 = parseFloat(state.value2) * parseFloat(state.value);
        state.res = state.value2 + "*";
        state.sign = "*";
      } else {
        state.value2 = state.value;
        state.res = state.value2 + "*";
        state.sign = "*";
        state.value = "0";
      }
      state.value = state.value.toString();
    },
    div: (state, action) => {
      if (state.res[state.res.length - 1] === "/") {
        state.value2 = parseFloat(state.value2) / parseFloat(state.value);
        state.res = state.value2 + "/";
        state.sign = "/";
      } else {
        state.value2 = state.value;
        state.res = state.value2 + "/";
        state.sign = "/";
        state.value = "0";
      }
      state.value = state.value.toString();
    },
    eq: (state, action) => {
      if (state.value[state.value.length - 1] === ".") {
        state.value = state.value.slice(0, -1);
      }
      if (state.sign === "+") {
        if (state.res[state.res.length - 1] === "=") {
          state.value2 = state.value;
          state.res = state.value2 + state.sign + state.value3 + "=";
          state.value = parseFloat(state.value2) + parseFloat(state.value3);
        } else {
          state.res = state.value2 + state.sign + state.value + "=";
          state.value3 = state.value;
          state.value = parseFloat(state.value2) + parseFloat(state.value);
        }
      } else if (state.sign === "-") {
        if (state.res[state.res.length - 1] === "=") {
          state.value2 = state.value;
          state.res = state.value2 + state.sign + state.value3 + "=";
          state.value = parseFloat(state.value2) - parseFloat(state.value3);
        } else {
          state.res = state.value2 + state.sign + state.value + "=";
          state.value3 = state.value;
          state.value = parseFloat(state.value2) - parseFloat(state.value);
        }
      } else if (state.sign === "*") {
        if (state.res[state.res.length - 1] === "=") {
          state.value2 = state.value;
          state.res = state.value2 + state.sign + state.value3 + "=";
          state.value = parseFloat(state.value2) * parseFloat(state.value3);
        } else {
          state.res = state.value2 + state.sign + state.value + "=";
          state.value3 = state.value;
          state.value = parseFloat(state.value2) * parseFloat(state.value);
        }
      } else if (state.sign === "/") {
        if (state.res[state.res.length - 1] === "=") {
          state.value2 = state.value;
          state.res = state.value2 + state.sign + state.value3 + "=";
          state.value = parseFloat(state.value2) / parseFloat(state.value3);
        } else {
          state.res = state.value2 + state.sign + state.value + "=";
          state.value3 = state.value;
          state.value = parseFloat(state.value2) / parseFloat(state.value);
        }
      }
      state.value = state.value.toString();
    },
    clear: (state, action) => {
      state.value = "0";
    },
    clearE: (state, action) => {
      state.value = "0";
      state.value2 = "";
      state.res = "";
      state.sign = "";
    },
    del: (state, action) => {
      if (state.value.length >= 1) {
        state.value = state.value.slice(0, -1);
      }
      if (state.value === "") {
        state.value = "0";
      }
    },
    digit: (state, action) => {
      if (state.value.indexOf(".") < 0) {
        state.value += ".";
      } else {
        return state.value;
      }
    },
    posNeg: (state, action) => {
      if (state.value < 0) {
        state.value = state.value.slice(1);
      } else {
        if (state.value.indexOf(".") < 0 && state.value[0] === "0") {
          state.value = "0";
        } else {
          state.value = "-" + state.value;
        }
      }
    },
  },
});

export const {
  dial,
  add,
  sub,
  mul,
  div,
  eq,
  clear,
  clearE,
  del,
  digit,
  posNeg,
} = calcSlice.actions;
export default calcSlice.reducer;
