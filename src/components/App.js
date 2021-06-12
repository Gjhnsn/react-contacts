import React, { useState, useEffect } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { addContact, deleteContact, getContacts } from "../utils/contacts";
import { getMockContacts } from "../utils/getMockContacts";
import { ContactContext } from "../contexts/Context";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts : getMockContacts);
  }, []);

  const createNewContact = (contact) => {
    const newContact = addContact(contacts);
    setContacts([newContact, ...contacts]);
  };

  const removeContact = (contactId) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    deleteContact(contactId);
    setContacts(newContacts);
  };

  return (
    <ContactContext.Provider
      value={{ createNewContact, removeContact, contacts }}
    >
      <LoginPage />
      <RegisterPage />
      <ContactsPage contacts={contacts} />
      <ContactDetailsPage contact={contacts[0]} />
      <ContactCreatePage />
    </ContactContext.Provider>
  );
};

export default App;
