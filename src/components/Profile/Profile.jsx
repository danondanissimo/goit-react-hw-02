import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.body}>
      <div>
        <img src={image} alt="User avatar" className={css.image} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsListItemName}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListItemName}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListItemName}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
