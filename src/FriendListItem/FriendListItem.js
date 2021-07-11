import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';
import defaultImage from '../Profile/default.jpg';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={styles.isOnline}></span>
      ) : (
        <span className={styles.isOffline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
