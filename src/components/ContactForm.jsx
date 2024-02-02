import { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  ContactFormUi,
  ContactFormLabel,
  ContactFormInput,
  ContactAddButton,
} from './ContactFormStyles';

export default function ContactForm({ onSubmit }) {
  const nameRef = useRef();
  const numberRef = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name: nameRef.current.value, number: numberRef.current.value });
    nameRef.current.value = '';
    numberRef.current.value = '';
  };

  return (
    <ContactFormUi onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name:
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          ref={nameRef}
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Number:
        <ContactFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          ref={numberRef}
        />
      </ContactFormLabel>
      <ContactAddButton type="submit">Add contact</ContactAddButton>
    </ContactFormUi>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
