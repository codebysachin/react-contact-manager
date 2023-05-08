import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  // define key for local storage
  const LOCAL_STORAGE_KEY = "contacts";

  // set state to local storage or empty array
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? [])
  );

  // handler for adding contacts, 
  // iterate over contacts array and add new contact to end of array
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // find element with id and create new array without that element
  // persist new array to state
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contacts.id !== id;
    });
    setContacts(newContactList);
  };

  // if contacts change, update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // return components
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
