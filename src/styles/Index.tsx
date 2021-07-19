import styled from "styled-components";

export const PageContainer = styled.main`
  h1 {
    text-align: center;
  }
`;

export const CountriesContainer = styled.section`
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    text-align: center;
    border: 1px solid;
    width: 250px;
  }
`;
