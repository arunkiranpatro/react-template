import React from 'react';
import { FaCopy } from 'react-icons/fa';

const Details = function (props) {
  const {
    label, value, ccicon = 'false', children, className = ''
  } = props;
  let body;
  if (children) {
    body = children;
  } else if (value && value !== '') {
    body = <span className="field-value">{value}</span>;
  }
  return (
    <div className={className}>
      {label && label !== '' && (
        <label>
          {label}
          {'   '}
        </label>
      )}
      {body}
      {ccicon === 'true' && (
        <button className="cc-icon" aria-label="show all">
          <FaCopy />
        </button>
      )}
    </div>
  );
};
export default Details;
