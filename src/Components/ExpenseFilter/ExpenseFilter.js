import ExpenseChart from "../ExpenseChart/ExpenseChart";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth();

    if (expense.amount > 0) chartDataPoints[month].value += expense.amount;
  });

  const handleYearChange = (selectedYear) => {
    props.yearChange(selectedYear);
  };

  return (
    <div className="filter-container">
      <div className="filter-select-box">
        <label htmlFor="years">Filter By Year : </label>

        <select
          name="years"
          id="years"
          onChange={(event) => handleYearChange(event.target.value)}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className="chart-container">
        <ExpenseChart dataPoints={chartDataPoints} />
      </div>
    </div>
  );
};

export default ExpenseFilter;
