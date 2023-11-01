import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import PostCard from "../../components/postcard";
import { internal_processStyles } from "@mui/styled-engine";

const Post = () => {
  const styles = {
    accentedButton:
      "bg-white text-black border-2 py-8 px-4 w-40 justify-center",
    wrapper:
      "h-[30rem] flex flex-col items-center justify-center bg-[#FAF9F6] border-y border-black shadow-lg py-6",
    content: "max-w-7xl flex-1 flex items-center justify-between",
    readtxt: "text-[10rem]",
  };
  let isReading = new Boolean(false);
  let { id } = useParams();

  const [BackendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch(`/readings/${id}`)
      .then((Response) => Response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  function displayword(word) {
    //const text = "This is a demo, You are currently reading at 300 words a minute. My name is corrie raiford and i would like to demo my project for you. This project is still inthe development phase but has potential."
    // var i = 0;
    // var display = []
    //  display = text.split(" ")

    document.getElementById("changetxtdemo").innerHTML = word;
  }
  var i = 0;
  var j = 0;
  function readText(sleep) {
    if (!isReading) {
      isReading = true;
      const text =
        "This is a demo, You are currently reading at 300 words a minute. My name is corrie raiford and i would like to demo my project for you. This project is still inthe development phase but has potential.";

      var display = [];
      display = BackendData.read.Text.split(" ");
      var timer = setInterval(
        () => {
          document.getElementById("changetxtdemo").innerHTML = display[i];
          //change the preview values as well
          document.getElementById("PREV1").innerHTML = display[i + 1];
          document.getElementById("PREV2").innerHTML = display[i + 2];
          document.getElementById("PREV3").innerHTML = display[i + 3];
          document.getElementById("PREV4").innerHTML = display[i + 4];
          document.getElementById("PREV5").innerHTML = display[i + 5];
          document.getElementById("PREV6").innerHTML = display[i + 6];
          document.getElementById("PREV7").innerHTML = display[i + 7];
          document.getElementById("PREV8").innerHTML = display[i + 8];
          document.getElementById("PREV9").innerHTML = display[i + 9];
          document.getElementById("PREV10").innerHTML = display[i + 10];

          console.log(
            display[i][display[i].length - 1],
            ".",
            display[i][display[i].length - 1] === "."
          );
          if (i < display.length - 1) {
            i++;
          }
          if (i === display.length - 1) {
            document.getElementById("changetxtdemo").innerHTML = display[0];
            i = 0;
            clearInterval(timer);
          }
        },
        typeof BackendData.read === "undefined" ? (
          <p>loading...</p>
        ) : (
          document.getElementById("speed").value
        )
      );
    } else {
      clearInterval(timer);
      isReading = false;
    }
    j = 0;
  }

  return (
    <>
      <Header />
      <div>
        <header class="bg-[#f5f5f5] ">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 ">
              {typeof BackendData.read === "undefined" ? (
                <p>loading...</p>
              ) : (
                <>{BackendData.read.Title}</>
              )}
            </h1>
          </div>
        </header>

        <main>
          <div class=" bg-[#f5f5f5] mx-auto max-w-7xl py-4 pb-2 sm:px-6 lg:px-8 ">
            <div className="pb-3 ">
              {typeof BackendData.read === "undefined" ? (
                <p>loading...</p>
              ) : (
                <p>{BackendData.read.Text}</p>
              )}
            </div>

            <div className={styles.wrapper}>
              <div>
                <div>
                  <div className="flex flex-row justify-between w-200">
                    <h1 className="px-5" id="PREV1">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV2">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV3">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV4">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV5">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV6">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV7">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV8">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV9">
                      Test
                    </h1>
                    <h1 className="px-5" id="PREV10">
                      Test
                    </h1>
                  </div>
                  <div className={styles.readtxt}>
                    <label id="changetxtdemo">
                      <h1 className="text-[10rem]">Read me</h1>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-center">
              <button
                className={styles.accentedButton}
                type="button"
                onClick={readText}
              >
                Read
              </button>

              <p className="px-4 py-5 border-2 w-6/12">
                <label for="speed">Speed:</label>

                <input
                  type="range"
                  min="85"
                  max="285"
                  step="25"
                  id="speed"
                  className="w-full"
                />
                <datalist
                  id="values"
                  className="flex flex-row justify-between w-200"
                >
                  <option value="85" label="700wpm"></option>
                  <option value="135" label="400wpm"></option>
                  <option value="185" label="300wpm"></option>
                  <option value="900" label="250wpm"></option>
                  <option value="1000" label="200wpm"></option>
                </datalist>
              </p>
            </div>
            <p>
              Value: <output id="value"></output>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};
export default Post;
