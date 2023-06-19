import css from './contactList.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  //Funkcja filtruje kontakty na podstawie przekazanej tablicy (contacts) i stringa (filter)
  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //Renderowanie listy kontaktów na podstawie przefiltrowanej tablicy
  return (
    <ul className={css.contacts}>
      {filteredArray.map(({ id, name, number }) => (
        <li key={id} className={css.contacts__item}>
          <p className={css.contacts__name}> {name} </p>
          <p className={css.contacts__number}>{number} </p>

          <button
            className={css.contacts__button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};
