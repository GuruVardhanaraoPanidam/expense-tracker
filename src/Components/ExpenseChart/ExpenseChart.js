import Months from "../../Utils/Months";
import VerticalBar from "../UI/BarGraph/VerticalBar";

const ExpenseChart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsValues);
  return props.dataPoints.map((dataPoint) => (
    <VerticalBar
      key={dataPoint.label}
      label={dataPoint.label}
      value={dataPoint.value}
      maxValue={maxValue}
    />
  ));
};

export default ExpenseChart;
