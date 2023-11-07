import styled from "styled-components";

const FilmsListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default FilmsListStyled;
