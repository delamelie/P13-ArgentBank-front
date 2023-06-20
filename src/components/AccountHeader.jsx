import styled from "styled-components";

export default function AccountHeader() {
  return (
    <div>
      <AccountHeaderWrapper>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <EditButton>Edit Name</EditButton>
      </AccountHeaderWrapper>
    </div>
  );
}

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const AccountHeaderWrapper = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;