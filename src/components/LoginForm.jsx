import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { loginUser } from "../utils/userSlice.js";

export default function LoginForm() {
  useEffect(() => {
    document.title = "ArgentBank - Login";
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    let userCredentials = { email, password };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/profile");
      }
    });
  }

  return (
    <main className="main bg-dark">
      <SignInContent>
        <StyledFontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {/* <ErrorMessage className={error ? "error" : "offscreen"}>
            {error}
          </ErrorMessage> */}
          <InputWrapper>
            <InputWrapperLabel htmlFor="username">Username</InputWrapperLabel>
            <InputWrapperInput
              type="email"
              name="username"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <InputWrapperLabel htmlFor="password">Password</InputWrapperLabel>
            <InputWrapperInput
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <InputRememberLabel htmlFor="remember-me">
              Remember me
            </InputRememberLabel>
          </InputRemember>

          <SignInButton
            type="submit"
            value={loading ? "Loading..." : "Sign In"}
          />

          {error && <div className="alert">{error}</div>}
        </form>
      </SignInContent>
    </main>
  );
}

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputWrapperLabel = styled.label`
  font-weight: bold;
`;

const InputWrapperInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
`;

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const SignInButton = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;