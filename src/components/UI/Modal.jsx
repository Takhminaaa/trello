import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeCart } from "../../store/slices/authSlice";
import { closeModal } from "../../store/slices/trelloSlice";

export default function Modal() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    dispatch(closeCart());
    handleClose();
  };

  
  return createPortal(
    <StyledModalContainer onClick={handleClose}>
      <WrapperContent onClick={(e) => e.stopPropagation()}>
        <h2>Вы точно хотите выйти ?</h2>
        <StyledContainerBtn>
          <StyledButton onClick={logoutHandler}>Yes</StyledButton>
          <StyledButton onClick={handleClose}>No</StyledButton>
        </StyledContainerBtn>
      </WrapperContent>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
}

const WrapperContent = styled.div`
  width: 600px;
  height: 400px;
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 14px;
  & > h2 {
    text-align: center;
  }
`;

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #6666666f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 0;
  margin-left: 0;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: #275938;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: 2px solid white;
`;

const StyledContainerBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
