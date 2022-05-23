import PropTypes from 'prop-types';
import styles from './profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt={username} className={styles.avatar} />
          <p className={styles.user}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.statItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li className={styles.statItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li className={styles.statItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};