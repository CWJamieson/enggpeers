import React from 'react';
import { WEB_URL } from '../../helpers/constants';
import { Link } from "react-router-dom";
import './page.css';

const Page = props => {
  const { src } = props.location.state;
  return (
    <>
      <div className="page-header">
        <Link className="back" to={`${WEB_URL}`}>{"< Back"}</Link>
      </div>
      <iframe src={src} title="content" />
    </>
  );
};

export default Page;
