import styled from "styled-components";

const FilmsListStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  .film {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 50px 10px 50px;
    position: relative;

    &__image {
      width: 300px;
      height: 200px;
      border-radius: 10px 50px 10px 50px;
    }

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      height: 40%;
      background-color: #ffdace8e;
      border-radius: 0 0 10px 50px;
      position: absolute;
      padding: 20px;
      bottom: 0;
    }

    &__title {
      margin: 0;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default FilmsListStyled;
