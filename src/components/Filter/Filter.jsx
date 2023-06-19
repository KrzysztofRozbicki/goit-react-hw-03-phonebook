import css from './filter.module.css';

export const Filter = ({ filterContacts }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        onChange={filterContacts}
        placeholder="Contact name"
      ></input>
    </div>
  );
};
