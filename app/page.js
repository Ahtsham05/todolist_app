"use client";
import React, { useState } from "react";
const main = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [main, setmain] = useState([]);
  const stopsubmit = (e) => {
    e.preventDefault();
    setmain([...main, { task, desc }]);
    settask("");
    setdesc("");
  };
  const remo = (id) => {
    let copytask = [...main];
    copytask.splice(id, 1);
    setmain(copytask);
  };
  let renderTask = <h2>No Task Here !</h2>;

  if (main.length > 0) {
    renderTask = main.map((elem, i) => {
      return (
        <div className="m-5 flex items-center justify-around">
          <h1 className="text-xl">{elem.task}</h1>
          <h2 className="text-base">{elem.desc}</h2>
          <button
            className="bg-red-500 text-white pt-2 pb-2 pl-5 pr-5 border-none rounded font-bold hover:bg-red-700 transition"
            key={i}
            onClick={() => {
              remo(i);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }
  return (
    <>
      <div className="h-20 w-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold uppercase">
        Todo App
      </div>
      <div>
        <form onSubmit={stopsubmit}>
          <div className="p-10 flex gap-10">
            <input
              type="text"
              placeholder="Enter Your Task "
              className="border-2 border-black border-solid p-2 rounded"
              id="task"
              value={task}
              onChange={(v) => {
                settask(v.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Description"
              className="border-2 border-black border-solid p-2 rounded"
              id="desc"
              value={desc}
              onChange={(v) => {
                setdesc(v.target.value);
              }}
            />
            <button className="bg-black text-white pt-2 pb-2 pl-5 pr-5 border-none rounded font-bold hover:bg-black transition">
              ADD TASK
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="bg-gray-300 w-full h-auto p-10">{renderTask}</div>
    </>
  );
};

export default main;
