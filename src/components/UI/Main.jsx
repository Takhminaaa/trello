import styled from "styled-components";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import TrelloForm from "..//UI/TrelloForm";

export default function Main() {
  const { isOpenCart } = useSelector((store) => store.trello);

  return (
    <StyledMain>
      <TrelloForm />
      {isOpenCart && <Modal />}
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background-image: url("https://w.wallhaven.cc/full/4y/wallhaven-4yep8l.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  overflow-x: scroll;
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
`;
