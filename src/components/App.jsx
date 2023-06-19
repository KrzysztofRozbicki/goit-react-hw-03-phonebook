import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //Metoda tworzy kontakt i modyfikuje state dodajac do niego nowy kontakt
  addContact = event => {
    event.preventDefault();

    //Tworzy nowy obiekt - kontakt na podstawie danych z inputów
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    // Walidacja - sprawdza czy kontakt jest już dodany (case insensitive)
    if (
      this.state.contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} already in contacts`);
    }

    //Dodaje kontakt do state
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    event.target.reset();
  };

  //Ustawia filtr do wyszukiwania kontaktów
  filterContacts = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  //Usuwa kontakt z bazy danych na podstawie id
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
