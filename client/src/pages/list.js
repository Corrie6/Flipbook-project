import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/header";
import ReadingCard from "../components/ReadingCard";

const List = () => {
  const [BackendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/readings")
      .then((Response) => Response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <link href="/dist/output.css" rel="stylesheet"></link>

      <Header />
      <a href="/addRead">
        <button class="bg-purple text-black py-4 w-screen border-4 ">
          Add a Reading
        </button>
      </a>

      <div>
        {typeof BackendData.readingsList === "undefined" ? (
          <p>loading...</p>
        ) : (
          BackendData.readingsList.map((reading, i) => (
            <>
              <a href={`post/${reading._id}`}>
                <ReadingCard
                  read={{
                    Author: reading.Author,
                    Description: reading.Description,
                    Title: reading.Title,
                    Text: reading.Text,
                  }}
                />
              </a>
            </>
          ))
        )}
      </div>
    </>
  );
};
export default List;
