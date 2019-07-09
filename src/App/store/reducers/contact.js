import { contactActions } from '../actions/index';

const initialState = {
  name: '',
  email: '',
  message: '',
  isAlreadySent: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactActions.SUBMIT: {
      return {
        ...state,
        email: action.payload.email,
        message: action.payload.message,
        name: action.payload.name,
        isAlreadySent: true,
      };
    }
    default:
      return state;
  }
};

export default contactReducer;
