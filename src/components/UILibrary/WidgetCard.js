import React from "react";
import PropTypes from "prop-types";
import Loading from "../UILibrary/Loading";

const WidgetCard = ({
  className,
  heading,
  component: Component,
  list,
  isLoading
}) => {
  const widgetClassName = "widget-card " + className,
    widgetHeaderClassName = "widget-header " + className + "-header",
    widgetBodyClassName = "widget-body " + className + "-body";
  let body = "No results found";
  if (isLoading) {
    body = <Loading />;
  } else if (list.length > 0) {
    body = list.map((data, index) => {
      return <Component data={data} key={index} />;
    });
  } else return null;
  if (!Component) {
    return null;
  }
  return (
    <div className={widgetClassName}>
      <h2 aria-label={heading} className={widgetHeaderClassName}>
        {heading}
      </h2>
      <div className={widgetBodyClassName}>{body}</div>
    </div>
  );
};

WidgetCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  Component: PropTypes.symbol
};

export default WidgetCard;
