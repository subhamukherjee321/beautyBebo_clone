import React from "react";
import "./Home.css";

import { BsChevronRight } from "react-icons/bs";

import { BsCardList } from "react-icons/bs";
import { Slider } from "./Slider";
import { useState } from "react";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import axios from "axios";
import { BsHeartFill } from "react-icons/bs";

const Home = () => {
  const [home, sethome] = useState([]);
  console.log('home: ', home);
  const [home1, sethome1] = useState([]);

  useEffect(() => {
    axios.get("https://mock-server-app-033a.onrender.com/home").then((response) => {
      sethome(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://mock-server-app-033a.onrender.com/home1").then((response) => {
      sethome1(response.data);
    });
  }, []);

  return (
    <div>
      <div className="main">
        <div className="left1">
          <h4>
            <BsCardList />
            ALL CATGORIES
          </h4>
          <div className="flex">
            <span>
              <a href="makeup.html">Makeup</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="skin1.html">Skin</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="hair.html">Hair</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="skin1.html">Personal Care</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="skin1.html">Mom & Baby Care</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="makeup.html">Fragrance</a>
            </span>
            <BsChevronRight />
          </div>
          <div className="flex">
            <span>
              <a href="hair.html">Ayurveda</a>
            </span>
            <BsChevronRight />
          </div>
        </div>
        <div className="right1">
          <Slider className="slider"></Slider>
        </div>
      </div>

      <div className="homeproduct">
        {home1 && home1.map((e) => {
          return (
            <div className="home_map">
              <img src={e.img}></img>,
              <p
                style={{
                  height: "60px",
                  color: "rgb(102, 102, 102)",
                  fontSize: "14px",
                }}
              >
                {e.title}
              </p>
              <div className="icons">
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
              </div>
              <div className="price">
                <div className="oldprice">₹{e.oldprice}</div>
                <div style={{ color: "rgb(221, 2, 133)" }}>₹{e.newprice}</div>
                <div className="discount">{e.discount}</div>
              </div>
              <div className="button">
                <button>Add To Cart</button>
                <BsHeartFill
                  style={{ color: "rgb(221, 2, 133)", fontSize: "20px" }}
                ></BsHeartFill>
              </div>
            </div>
          );
        })}
      </div>
      <div id="next">
        <img
          src="https://www.beautybebo.com/pub/media/ads/imgpsh_fullsize_anim_3_.jpg"
          alt=""
        />
      </div>
      <br></br>
      <div class="picture">
        <img
          src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg"
          alt=""
        />
      </div>
      <div className="homeimg">
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png"></img>
        </div>
        <div>
          <img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png"></img>
        </div>
      </div>
      <div className="homeproduct">
        {home && home.map((e) => {
          return (
            <div className="home_map">
              <img src={e.img}></img>,
              <p
                style={{
                  height: "60px",
                  color: "rgb(102, 102, 102)",
                  fontSize: "14px",
                }}
              >
                {e.title}
              </p>
              <div className="icons">
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
                <div>
                  <BsStarFill />
                </div>
              </div>
              <div className="price">
                <div className="oldprice">₹{e.oldprice}</div>
                <div style={{ color: "rgb(221, 2, 133)" }}>₹{e.newprice}</div>
                <div className="discount">{e.discount}</div>
              </div>
              <div className="button">
                <button>Add To Cart</button>
                <BsHeartFill
                  style={{ color: "rgb(221, 2, 133)", fontSize: "20px" }}
                ></BsHeartFill>
              </div>
            </div>
          );
        })}
      </div>
      <p class="avi">
        <a href="https://www.beautybebo.com/makeup.html">
          <img
            src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"
            alt="Beautybebo offer"
          />
        </a>
      </p>
    </div>
  );
};

export default Home;
