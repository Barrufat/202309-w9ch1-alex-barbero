import styled from "styled-components";

const FilmsListStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default FilmsListStyled;
