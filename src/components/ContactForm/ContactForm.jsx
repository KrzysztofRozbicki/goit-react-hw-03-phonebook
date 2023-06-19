import css from './contactForm.module.css';

export const ContactForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact} className={css.form}>
      <label>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          id=""
          placeholder="Contact name"
          pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          placeholder="Contact number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};
