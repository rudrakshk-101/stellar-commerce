import React from "react";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";

const QuantityButton = ({ quant, onRemove, onAdd }) => {
  return (
    <div className="amount">
      <button className="minus" onClick={onRemove} disabled={quant === 0}>
        <img src={minus} alt="icon-minus" />
      </button>
      <p>{quant}</p>
      <button className="plus" onClick={onAdd} disabled={quant === 100}>
        <img src={plus} alt="icon-plus" />
      </button>
    </div>
  );
};

export default QuantityButton;
