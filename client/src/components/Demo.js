import React, { useState, useRef, useEffect } from "react";

const styles = {
  accentedButton:
    "bg-[#8095ff] text-white py-6 px-10 rounded-full text-align-center display-flex align-items-center justify-content-center",
  wrapper: "h-max-[10rem] flex items-center justify-center  bg- [#8095ff]",
  demo: "", //"bg-gradient-to-tr from-[#8095ff] to-[#8095ff] opacity-30",
  readtxt: "text-[10rem]",
};
const Demo = () => {
  function readText(sleep) {
    const text =
      "This is a demo, You are currently reading at 300 words a minute. My name is corrie raiford and i would like to demo my project for you. This project is still inthe development phase but has potential.";
    var i = 0;
    var display = [];
    display = text.split(" ");
    var timer = setInterval(() => {
      document.getElementById("changetxtdemo").innerHTML = display[i];
      if (i < display.length - 1) {
        i++;
      }
      if (i === display.length - 1) {
        document.getElementById("changetxtdemo").innerHTML = "Read Me";
        i = 0;
        clearInterval(timer);
      }
    }, 180);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.demo}>
          <div className={styles.readtxt}>
            <label id="changetxtdemo">
              <h1 className="text-[10rem]">Read me</h1>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-[#8095ff] text-white py-6 px-10 rounded-full text-align-center display-flex align-items-center justify-content-center"
          type="button"
          onClick={readText}
        >
          Read
        </button>
      </div>
    </>
  );
};
export default Demo;
