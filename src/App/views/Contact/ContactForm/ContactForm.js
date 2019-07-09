import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import styles from './contactForm.module.scss';
import { contactActions } from '../../../store/actions/index';


const validationSchema = {
  email: {
    validators: ['isEmail'],
    errorMessages: ['Email is not valid'],
  },
};

const Contact = ({
  dispatch,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onMessageSubmit = () => {
    dispatch({
      type: contactActions.SUBMIT,
      payload: {
        name,
        email,
        message,
      },
    });
  };

  return (
    <ValidatorForm onSubmit={onMessageSubmit}>
      <div className={styles.contactFormWrapper}>
        <TextValidator
          required
          variant="standard"
          name="name"
          label="Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextValidator
          required
          {...validationSchema.email}
          variant="standard"
          name="email"
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextValidator
          multiline
          rows={6}
          variant="standard"
          name="message"
          label="Message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          className={styles.textArea}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.sendButton}
        >
          Send
        </Button>
      </div>
    </ValidatorForm>
  );
};

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Contact);
