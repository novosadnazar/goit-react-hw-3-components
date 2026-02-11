import style from "./Statistic.module.css"
import PropTypes from "prop-types"; 
export const Statistics = ({ data }) => {
  return (
    <ul className={style.list}>
      {data.map(({ id, label, percentage }) => (
        <li className={style.item} key={id}>
          <span className={style.status}>{label}</span>
          <span className={style.badge}>{`${percentage}%`}</span>
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