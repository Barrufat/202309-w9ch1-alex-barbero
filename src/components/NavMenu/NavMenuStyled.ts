import styled from "styled-components";

const NavMenuStyled = styled.nav`
  color: #fff;
  width: 100%;
  display: flex;

  .nav-container {
    padding: 0 50px;
    width: 100%;
    display: flex;
    gap: 50px;
    justify-content: flex-end;
    margin: 20px;
  }

  @media (max-width: 660px) {
    .nav-container {
      padding: 0;
      font-size: 18px;
      gap: 20px;
      justify-content: center;
    }
  }
`;

export default NavMenuStyled;
