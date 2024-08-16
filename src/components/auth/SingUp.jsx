import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { singUpRequest } from "../../store/thanks/authThanks";
import ErrorMessages from "../UI/ErrorMessages";

export default function SingUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });
  const submitHandler = (userData) => {
    dispatch(singUpRequest({ userData, navigate }));
  };

  return (
    <StyledRegisterPage>
      <StyledContainer>
        <form onClick={handleSubmit(submitHandler)}>
          <h1>Registration</h1>
          <StyledMessage>
            <input
              {...register("firstName", { required: "Введите имя" })}
              type="text"
              placeholder="Введите имя"
            />
            <ErrorMessages>{errors?.firstName?.message}</ErrorMessages>
          </StyledMessage>

          <StyledMessage>
            <input
              {...register("lastName", { required: "Введите фомилию" })}
              type="text"
              placeholder="Введите фамилию"
            />

            <ErrorMessages>{errors?.lastName?.message}</ErrorMessages>
          </StyledMessage>

          <StyledMessage>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "не правильно введень email",
                },
              })}
              type="email"
              placeholder="Укажите адрес электронный почти"
            />
            <ErrorMessages>{errors?.email?.message}</ErrorMessages>
          </StyledMessage>

          <StyledMessage>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите password",
                },
                minLength: {
                  value: 6,
                  message: "пароль должен быть неменее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "слишком много ",
                },
              })}
              type="password"
              placeholder="Введите пароль"
            />
            <ErrorMessages>{errors?.password?.message}</ErrorMessages>
          </StyledMessage>
          <button type="submit">Отправить</button>
        </form>
        <hr style={{ width: "82%", margin: "0 auto" }} />
        <section>
          <span>
            {" "}
            У ва есть аккаунть?
            <Link to={"/"}>
              <b>Войти </b>
            </Link>
          </span>
        </section>
      </StyledContainer>
    </StyledRegisterPage>
  );
}

const StyledRegisterPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 480px;
  height: 580px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 /0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 35px;
    align-items: center;

    & > p {
      color: #0f0f0faa;
      font-size: 18px;
      font-weight: bold;
    }
    & > input {
      width: 100%;
      height: 38px;
      padding: 5px;
      font-weight: 400;
    }
    & > button {
      width: 100%;
      height: 30px;
      border-radius: 5px;
      border: none;
      background-color: #119811;
      color: white;
      font-weight: 600;
    }
  }
  & > section {
    color: blue;
    text-align: center;
  }
`;
const StyledMessage = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  & > input {
    width: 100%;
    height: 38px;
    font-size: 16px;
    padding-left: 5px;
  }
`;
