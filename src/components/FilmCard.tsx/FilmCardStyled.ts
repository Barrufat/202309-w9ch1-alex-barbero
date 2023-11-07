import styled from "styled-components";

const FilmsListStyled = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 50px 10px 50px;
  position: relative;

  .film {
    &__image {
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
`;

export default FilmsListStyled;
