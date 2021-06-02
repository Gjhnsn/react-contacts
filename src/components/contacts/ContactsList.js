import ContactCard from "./ContactCard";
import styled from "styled-components";

const ContactList = ({ contacts = [] }) => {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </ContactsList>
  );
};

const ContactsList = styled.div`
  background-color: #ddd;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border: 1px solid grey;
`;

export default ContactList;
