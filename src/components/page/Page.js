import React from 'react';
import { Link } from "react-router-dom";
import './page.css';

const Page = props => {
  const { src } = props.location.state;
  return (
    <>
      <div className="page-header">
        <Link className="back" to={"/"}>{"< Back"}</Link>
      </div>
      <iframe src={src} title="content" />
    </>
  );
};

export default Page;
