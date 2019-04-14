import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import styles from './contact.module.scss';
import View from '../../components/View/View';
import Tile from '../../components/Tile/Tile';

const validationSchema = {
  email: {
    validators: ['isEmail'],
    errorMessages: ['Email is not valid'],
  },
};


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View>
      <Tile center>
        <ValidatorForm onSubmit={() => {}}>
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
      </Tile>
    </View>
  );
};

export default Contact;
