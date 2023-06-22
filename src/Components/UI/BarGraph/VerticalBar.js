import "./VerticalBar.css";

const VerticalBar = (props) => {
  let fillValue = "0%";
  if (props.value > 0) {
    fillValue = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="bar-container">
      <div className="max-quantity-container">
        <div style={{ height: fillValue }} className="actual_quantity"></div>
      </div>
      <h4>{props.label}</h4>
    </div>
  );
};

export default VerticalBar;
