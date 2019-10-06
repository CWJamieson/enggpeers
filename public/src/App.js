import React from 'react';
import background from "./img/engg-peers-background.jpg";
import './App.css';

const App = () => {
  return (
    <>
      <img className="background" src={background} alt="an error occured" />
      <div className="header" onClick={() => {
        console.log("clicked header");
      }}>
        <div className="news">
          <p>Have a great semester!</p>
        </div>
      </div>
      <div className="book-meeting" onClick={() => {
        console.log("clicked book-meeting");
      }}/>
      <div className="events" onClick={() => {
        console.log("clicked events");
      }}/>
      <div className="time-management" onClick={() => {
        console.log("clicked time-management");
      }}/>
      <div className="problem-solving" onClick={() => {
        console.log("clicked problem-solving");
      }}/>
      <div className="about" onClick={() => {
        console.log("clicked about");
      }}/>
      <div className="settings" onClick={() => {
        console.log("clicked settings");
      }}/>
    </>
  );
};

export default App;
