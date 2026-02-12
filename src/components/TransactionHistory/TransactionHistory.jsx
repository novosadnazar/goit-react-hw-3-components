import style from"./TransactionHistory.module.css"
import PropTypes from "prop-types"; 
export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.history}>
      <thead className={style.thead}>
        <tr className={style.list}>
          <th className={style.item}>Type</th>
          <th className={style.item}>Amount</th>
          <th className={style.item}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.list2}>
            <td className={style.item2}>{type}</td>
            <td className={style.item2}>{amount}</td>
            <td className={style.item2}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ),
};
