import styled from "styled-components";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <Card>
      <InfoWrapper>
        <div>
          <Avatar
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </div>
        <ContactInfo>
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
        </ContactInfo>
      </InfoWrapper>
      <ButtonWrapper>
        <Button>X</Button>
      </ButtonWrapper>
    </Card>
  );
};

const Card = styled.div`
  height: 120px;
  width: 600px;
  box-shadow: 0px 3px 8px grey;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: #fffffd;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: auto;
  position: relative;
  margin-left: 15px;
`;

const ContactInfo = styled.div`
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid lightgrey;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1rem;
  color: white;
  font-weight: 800;
  background-color: #999;
`;

export default ContactCard;
