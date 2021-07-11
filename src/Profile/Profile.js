import React from 'react';
import PropTypes from 'prop-types';

import defaultImage from './default.jpg';
import styles from './Profile.module.css';

const Profile = ({ options }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={options.avatar} alt="Аватар пользователя" className={styles.avatar}/>
        <p className={styles.name}>{options.name}</p>
        <p className={styles.tag}>@{options.tag}</p>
        <p className={styles.location}>{options.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span><br/>
          <span className={styles.quantity}>{options.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span><br/>
          <span className={styles.quantity}>{options.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span><br/>
          <span className={styles.quantity}>{options.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.number),
}

export default Profile;