import ContactCard from "./ContactCard";
import styled from "styled-components";
import { useContext } from "react";
import { ContactContext } from "../../contexts/Context";

const ContactList = () => {
  const { contacts, removeContact } = useContext(ContactContext);
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
          onRemove={() => removeContact(contact.id)}
        />
      ))}
    </ContactsList>
  );
};

const ContactsList = styled.div`
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border: 1px solid grey;
`;

export default ContactList;
