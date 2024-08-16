import styled from "styled-components";

const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <StyledButton
      className="button"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 165px;
  height: 38px;
  border-radius: 4px;
  border: none;
  background: #5757ef;
  color: white;
  cursor: pointer;
`;
