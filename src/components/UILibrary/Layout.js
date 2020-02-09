import React from "react";

const Layout = function(props) {
  let { className, columns } = props;
  className = className || "";
  const containerClassName = "row-col-container " + className;
  columns = Number.parseInt(columns);
  const myChildren = React.Children.toArray(props.children);
  if (myChildren.length <= 0) {
    return null;
  }
  let mainBody = [];
  let rows = [];
  let tempColumnName = 12 / columns + "";
  let rowNum = 1;
  for (let i = 1; i <= myChildren.length; i++) {
    let columnClassName =
      "column-" + tempColumnName + " " + className + "-column-";
    let rowClassName = "row" + " " + className + "-row-";
    columnClassName = columnClassName + i;
    rows.push(
      <div className={columnClassName} key={columnClassName}>
        {myChildren[i - 1]}
      </div>
    );
    /** suppose children =5 and columns=2  */
    if (i % columns === 0 || i === myChildren.length) {
      rowClassName = rowClassName + rowNum;
      mainBody.push(
        <div className={rowClassName} key={"row" + i}>
          {rows}
        </div>
      );
      rowNum++;
      rows = [];
    }
  }
  return <div className={containerClassName}>{mainBody}</div>;
};

export default Layout;
