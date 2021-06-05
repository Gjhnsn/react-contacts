import styled from "styled-components";

const ContactDetailsCard = ({ contact }) => {
  return (
    <Wrapper>
      <div>
        <Avatar
          src={contact?.profilePic}
          alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}
        />
      </div>
      <DataWrapper>
        <Name>
          {contact?.firstName} {contact?.lastName}
        </Name>
        <dl>
          <b>
            <DataTitle>Phone Number</DataTitle>
          </b>
          <Data>{contact?.phoneNumber}</Data>

          <b>
            <DataTitle>Email</DataTitle>
          </b>
          <Data>{contact?.email}</Data>

          <b>
            <DataTitle>Address</DataTitle>
          </b>
          <Data>{contact?.address}</Data>
        </dl>
      </DataWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 550px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 8px grey;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
`;

const Name = styled.p`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  color: #555;
  font-weight: 400;
`;

const DataWrapper = styled.div`
  width: 60%;
`;

const DataTitle = styled.dt`
  padding-bottom: 5px;
`;

const Data = styled.dd`
  display: flex;
  justify-content: center;
`;

export default ContactDetailsCard;
