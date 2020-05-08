import React from "react";
import { AiFillGift } from "react-icons/ai";
import { ButtonContainer } from "../Button";
import "./Main.css";

export default function Main() {
  const option = [
    {
      id: 1,
      header: "option one",
      detail: "Bottle of champagne",
      underLine: "Dom Perignon Vintage 2004",
      pc: "36 pc. Godiva chocolate box",
      card: "Note card",
      or: "",
    },
    {
      id: 2,
      header: "option two",
      detail: "Bottle of champagne",
      underLine: "Veuve Clicqout Yellow Lable Brut",
      pc: "24pc. ghirardelli chocolate squares",
      card: "Note card",
      or: "",
    },
    {
      id: 3,
      header: "option three",
      detail: "Bottle of ",
      underLine: "Napa Valley Cabernet sauvignon",
      pc: "24pc. ghirardelli chocolate squares",
      card: "Note card",
      or: "or",
    },
  ];

  return (
    <section>
      <div id="mainContainer" className=" col-9 mx-auto col-md-6 col-gl-4">
        <div className="row">
          <h3 className="Header ">
            the product
            <div className="divider"></div>
          </h3>
          <p className="text-paragraph ">
            MadeMoments offers 3 pre-selected gift options that will be squares
            to leave a lasting impression. You can select one of the pre-set,or
            build your own custom gift box.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="imgInfo">
            <div className="leftImg"></div>
            <div className="right">
              {option.map((optional) => (
                <section key={optional.id}>
                  <ul className="moreInfo">
                    <h5 className="title">
                      <AiFillGift className="icon" />
                      {optional.header}
                    </h5>
                    <p className=" underLine">
                      <li className="detail">
                        {optional.detail}{" "}
                        <span className="Devider">.{optional.underLine}</span>
                      </li>
                    </p>
                    <li className="pc">{optional.pc}</li>
                    <li className="card">{optional.card} </li>
                  </ul>
                </section>
              ))}
              <p className="btn">
                <span className="span">or</span>
                <ButtonContainer style={{ float: "right", margin: "0" }}>
                  build your own gift box
                </ButtonContainer>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
