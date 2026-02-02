import PropTypes from "prop-types"; 
export const FriendList = ({ friend }) => {
  return (
    <ul class="friend-list">
      {friend.map(({ avatar, name, isOnline, id }) => {
        return (
          <li class="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
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