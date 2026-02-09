import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
export const FriendList = ({ friend }) => {
  return (
    <ul className={styles.list}>
      {friend.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={`${styles.span} ${ isOnline ? styles.isOnline : styles.isOffline }`}></span>
            <img className={styles.img} src={avatar} alt={name} width="48" />
            <p className={styles.text}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
