import { formatNumberWithCommas } from "../../Services/functions";
import css from "./UserItem.module.css";

export const UserItem = ({ user, onFollow }) => {

  const followers = formatNumberWithCommas(user.followers);

 const handleFollow = () => {
  onFollow(user.id);
};

  return (
    <li className={css.item}>
      <img src="" alt="" className={css.logo} />
      <img src="" alt="" className={css.image} />
      <img src={user.avatar} alt={user.user} className={css.avatar} />

      <p className={css.text}>{user.user}</p>
      <p className={css.text}>{user.tweets} tweets</p>
      <p className={css.text}>{followers} followers</p>
      <button type="button" onClick={handleFollow}>
        {user.follow ? "following" : "follow"}
      </button>
    </li>
  );
};