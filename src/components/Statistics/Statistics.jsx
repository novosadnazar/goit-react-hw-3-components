import PropTypes from "prop-types"; // ES6
export const Statistics = ({ data }) => {
  return (
    <ul className="stat-list">
      {data.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{`${percentage}%`}</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};