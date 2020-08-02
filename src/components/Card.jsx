import React from "react";
import PropTypes from "prop-types";

export default function Card({ children, rect, big, className, color }) {
  let finalClass = "card";
  finalClass += rect ? " card--rect" : "";
  finalClass += big ? " card--big" : "";
  finalClass += className ? ` ${className}` : "";
  finalClass += color ? ` card--${color}` : "";

  return (
    <div class={finalClass}>
      <div class="card__body">{children}</div>
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.oneOf(["gray", "white", "blue", "yellow"]),
};
