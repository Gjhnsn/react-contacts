import ContactDetailsCard from "./ContactDetailsCard";
import styled from "styled-components";

const ContactDetailsPage = ({ contact }) => {
  return (
    <Wrapper>
      <ContactDetailsCard contact={contact} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ddd;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export default ContactDetailsPage;
