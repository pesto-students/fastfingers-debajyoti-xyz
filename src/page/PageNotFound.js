import React from "react";
import PropTypes from "prop-types";

const PageNotFound = ({ navigate }) => {
  const handleAnchorClick = (e) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    navigate(url.pathname);
  };

  return (
    <div className="404-page">
      <h1>Page not found</h1>
      <a href="/" onClick={handleAnchorClick}>
        Go to home
      </a>
    </div>
  );
};

PageNotFound.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default PageNotFound;
