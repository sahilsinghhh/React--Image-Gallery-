import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";
import like from "../images/heart.png";
import view from "../images/eye.png";
import download from "../images/download.png";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [Gallery, setGallery] = useState([]);
  const [Shape, setShape] = useState(false);
  const [DarkTheme, setDarkTheme] = useState(false);
  const [ThemeName, setThemeName] = useState(false);

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=22633744-ee830b109cb02b433b1095ba3&q=${search}&image_type=photo&pretty=true`
      )
      .then((res) => setGallery(res.data.hits))
      .catch((error) => console.log(error));
    setSearch("");
  };

  const shapeHandler = () => {
    setShape(!Shape);
  };
  const themeHandler = () => {
    setDarkTheme(!DarkTheme);
    setThemeName(!ThemeName);
  };

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=22633744-ee830b109cb02b433b1095ba3&q=mountain&image_type=photo&pretty=true`
      )
      .then((res) => setGallery(res.data.hits))
      .catch((error) => console.log(error));
    setSearch("");
  }, []);

  return (
    <div className={`${DarkTheme ? "bg-dark" : null}`}>
      <div className="container">
        <button onClick={shapeHandler} className="btn btn-primary">
          Change Frame
        </button>
        <button
          onClick={themeHandler}
          className={`btn ${ThemeName ? "bg-light" : "bg-dark text-light"} `}
        >
          {ThemeName ? "Light Theme" : " Dark Theme"}
        </button>
      </div>

      <div className="input-group mt-5 container">
        <input
          type="text"
          className="form-control"
          placeholder="Search photos ...."
          value={search}
          onChange={inputHandler}
        />
        <span
          className="input-group-text"
          id="basic-addon2"
          onClick={searchHandler}
        >
          Search
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        className="container mt-5 "
      >
        {Gallery.map((image) => (
          <div
            key={image.id}
            class={`card m-3  ${DarkTheme ? "bg-dark" : null}`}
            style={{ width: "18rem" }}
          >
            <img
              style={{ width: "18rem", height: "18rem" }}
              src={image.webformatURL}
              className={`card-img-top img-fluid ${
                Shape ? "rounded-circle" : null
              }`}
              alt="image_url"
            />

            <div class="card-body d-flex justify-content-between ">
              <img src={like} alt="like" />
              <span className={DarkTheme ? "text-light" : null}>
                {image.likes}
              </span>
              <img src={view} alt="views" />
              <span className={DarkTheme ? "text-light" : null}>
                {image.views}
              </span>
              <img src={download} alt="downloads" />
              <span className={DarkTheme ? "text-light" : null}>
                {image.downloads}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
