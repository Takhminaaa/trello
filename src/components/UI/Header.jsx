import { BiAdjust, BiGrid } from "react-icons/bi";
import { FaTrello } from "react-icons/fa";
import { GrCircleQuestion } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import { TbSchoolBell } from "react-icons/tb";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../../store/slices/trelloSlice";

export default function Header() {
  const dispatch = useDispatch();

  
  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledOne />
        <div>
          <StyledTwo />
          <h2>Trello</h2>
        </div>
        <select>
          <option value="">Рабочие пространства</option>
        </select>
        <select>
          <option value="">Недавние</option>
        </select>
        <select>
          <option value=""> В избранном</option>
        </select>
        <select>
          <option value="">Шаблоны</option>
        </select>
        <button>Создать</button>
      </StyledContainer>
      <StyledContainer>
        <StyledForm>
          <HiOutlineMagnifyingGlass />
          <input type="text" placeholder="Поиск" />
        </StyledForm>

        <StyledThree />

        <GrCircleQuestion
          style={{ width: "21px", height: "21px", cursor: "pointer" }}
        />

        <BiAdjust
          style={{ width: "21px", height: "21px", cursor: "pointer" }}
        />
        <RiContactsFill
          onClick={openCartHandler}
          style={{ width: "21px", height: "21px", cursor: "pointer" }}
        />
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background: #575656;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  & > div {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  & select {
    background: #575656;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
  & button {
    width: 100px;
    height: 36px;
    background: #7f7e7e;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  div {
    display: flex;
    gap: 6px;
    align-items: center;
  }
`;
const StyledForm = styled.div`
  width: 240px;
  border: 1px solid #7f7e7e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  background-color: #7f7e7e;

  input {
    overflow: hidden;
    cursor: pointer;

    outline: none;
    height: 35px;
    border: none;
    background-color: #7f7e7e;
  }
`;

const StyledOne = styled(BiGrid)`
  width: 25px;
  height: 25px;
  color: #eae9e9;
  cursor: pointer;
`;

const StyledTwo = styled(FaTrello)`
  width: 23px;
  height: 23px;
  color: #eae9e9;
`;
const StyledThree = styled(TbSchoolBell)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
