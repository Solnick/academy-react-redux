import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './messageSentBanner.module.scss';

const Contact = ({
  email,
  message,
  name,
}) => (
  <div className={styles.bannerWrapper}>
    <p className={styles.title}>Message sent!</p>
    <div>
      {message}
    </div>
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  </div>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  email: state.contact.email,
  message: state.contact.message,
  name: state.contact.name,
});

export default connect(mapStateToProps)(Contact);
