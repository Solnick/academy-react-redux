import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import MessageSentBanner from './MessageSentBanner/MessageSentBanner';
import View from '../../components/View/View';
import Tile from '../../components/Tile/Tile';

const Contact = ({
  isAlreadySent,
}) => (
  <View>
    <Tile center>
      {
        isAlreadySent
          ? <MessageSentBanner />
          : <ContactForm />
      }
    </Tile>
  </View>
);

Contact.propTypes = {
  isAlreadySent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAlreadySent: state.contact.isAlreadySent,
});

export default connect(mapStateToProps)(Contact);
