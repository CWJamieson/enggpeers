import React from 'react';
import { Link } from "react-router-dom";
import { PATHS } from "./constants";
import background from "./img/engg-peers-background.jpg";
import './home.css';

const Home = () => {
  return (
    <>
      <img className="background" src={background} alt="an error occured" />
      <div className="header">
        <div className="news">
          <p>Have a great semester!</p>
        </div>
      </div>
      {PATHS.map(obj => {
        return (
          <Link
            key={obj.classname}
            className={obj.classname + " to-page"}
            to={{
              pathname: '/page',
              state: {
                src: obj.pathname
              }
            }}
          />
        );
      })}
    </>
  );
};

export default Home;
