import { formatNumberWithCommas } from "../../Services/functions";
import css from "./UserItem.module.css";
import image from "../../images/image.png";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.png";

export const UserItem = ({ user, onFollow }) => {
  const followers = formatNumberWithCommas(user.followers);
  const tweets = formatNumberWithCommas(user.tweets);

  const handleFollow = () => {
    onFollow(user.id);
  };

  const avatarSource = user.avatar ? user.avatar : avatar;

  return (
    <li className={css.item}>
      <img src={logo} alt="" className={css.logo} />
      <img src={image} alt="" className={css.image} />
      <img src={avatarSource} alt={user.user} className={css.avatar} />
      <div className={css.tagline}></div>
      <div className={css.box}>
        <p className={css.text}>{tweets} tweets</p>
        <p className={css.text}>{followers} followers</p>
      </div>

      <button
        type="button"
        onClick={handleFollow}
        className={`${css.button} ${user.follow && css.button_follow}`}
      >
        {user.follow ? "following" : "follow"}
      </button>
    </li>
  );
};
