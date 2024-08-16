import { FaTrello } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorMessages from "../UI/ErrorMessages";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { sigInRequest } from "../../store/thanks/authThanks";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(sigInRequest({ userData, navigate }));
  };
  return (
    <StyledWrapper>
      <StyledIcon>
        <FaTrello style={{ width: "42px", height: "42px", color: "#077ead" }} />
        <h1>Trello</h1>
      </StyledIcon>
      <StyledContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <p>Вход в Trello</p>
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

          <button>Продолжать</button>
        </form>


        
        <hr style={{ width: "82%", margin: "0 auto" }} />
        <section>
          <Link>Не удаеться войти?</Link>

          <Link style={{ color: "blue", fontWeight: "500" }} to={"/register"}>
            <p>Зарегистирировать аккаунт</p>
          </Link>
        </section>
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & > div > h1 {
    color: #4b4857;
    font-size: 43px;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledContainer = styled.div`
  width: 480px;
  height: 480px;
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
      font-size: 16px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: blue;
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
