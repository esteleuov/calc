import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dial, add, sub, mul, div, eq, clear, clearE, del, digit, posNeg } from "./store/calcSlice";

function App() {
  const dispatch = useDispatch();
  const numb1 = useSelector((state) => state.calc.value);
  const panelNum = useSelector((state) => state.calc.res);

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-50">
      <div className="w-1/4 h-3/5 border-4 bg-slate-600 border-slate-600 flex-col justify-center p-2">
        <div className="flex w-full bg-slate-600 justify-center h-10">
          <h1 className="text-slate-50 ">КАЛЬКУЛЯТОР</h1>
        </div>
        <div className="flex flex-col bg-slate-200 w-full items-end h-24 justify-evenly rounded-md pr-2">
          <h4 className="font-semibold text-slate-400 text-lg">{panelNum}</h4>
          <h2 className="font-bold text-4xl">{numb1}</h2>
        </div>
        <div className="grid grid-cols-4 gap-2 py-2">
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(clearE())
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              CE
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(clear())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              C
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(del())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              del
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(mul())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              *
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(7));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              7
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(8));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              8
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(9));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              9
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(div())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              /
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(4));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              4
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(5));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              5
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(6));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              6
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(sub())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              -
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(1));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              1
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(2));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              2
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(3));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              3
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(add());
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              +
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(posNeg())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              +/-
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
              onClick={() => {
                dispatch(dial(0));
              }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              0
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(digit())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              ,
            </button>
          </div>
          <div className="flex rounded-md bg-slate-400 justify-center h-16 items-center">
            <button
            onClick={() => {
              dispatch(eq())
            }}
              type="button"
              className="w-full rounded-md h-full hover:bg-slate-300"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
