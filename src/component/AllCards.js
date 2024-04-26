import React, { useEffect, useState } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import { Data } from "../asset/Data/Data";
import { Completed } from "../asset/Data/Data";

function AllCards() {
  const [data, setData] = useState(Data); // Corrected useState initialization
  const [comp, setComp] = useState(Completed);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  useEffect(() => {
    setClick(true);
    let temp = [...data];
    temp.splice(3, 22);
    console.log("temp", temp);
    setData(temp);
  }, []);

  useEffect(() => {
    setClick2(true);
    let temp = [...comp];
    temp.splice(3, 22);
    console.log("temp", temp);
    setComp(temp);
  }, []);

  // console.log("==============================================>", data);

  const viewMoreHandle = () => {
    if (click) {
      setData(Data);
      setClick(!click);
    } else {
      let temp = [...Data];
      temp.splice(2, 17);
      setData(temp);
      setClick(!click);
    }
  };

  const viewMoreHandle2 = () => {
    if (click2) {
      setClick2(!click2);
      setComp(Completed);
    } else {
      setClick2(!click2);
      let temp = [...Completed];
      temp.splice(2, 17);
      setComp(temp);
    }
  };

  useEffect(() => {}, [comp]);

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((value, index) => {
        return (
          <div
            className="col-lg-4 col-sm-6 col-xl-4"
            style={{
              padding: "0.5rem",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RecipeReviewCard
              index={index}
              project={"runningProject"}
              value={value}
            />
          </div>
        );
      })}
      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          style={{
            border: "none",
            padding: "0.8rem 3rem",
            marginTop: "2rem",
            borderRadius: "8px",
            fontWeight: "600",
            backgroundColor: "#0a494f",
            color: "white",
          }}
          onClick={() => {
            viewMoreHandle();
          }}
        >
          View more
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1>Completed Projects</h1>
        <div
          style={{
            border: "2px solid #0a494f",
            borderRadius: "5px",
            width: "26vw",
            margin: "auto",
          }}
        ></div>
      </div>
      {comp.map((value, index) => {
        return (
          <div
            className="col-lg-4 col-sm-6 col-xl-4"
            style={{
              padding: "0.5rem",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RecipeReviewCard
              index={index}
              project={"completedProject"}
              value={value}
            />
          </div>
        );
      })}
      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          style={{
            border: "none",
            padding: "0.8rem 3rem",
            marginTop: "2rem",
            borderRadius: "8px",
            fontWeight: "600",
            backgroundColor: "#0a494f",
            color: "white",
          }}
          onClick={() => {
            viewMoreHandle2();
          }}
        >
          {click2 ? "View more" : "View more"}
        </button>
      </div>
    </div>
  );
}

export default AllCards;
