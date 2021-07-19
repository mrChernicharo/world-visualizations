import styled from 'styled-components';

export const PageContainer = styled.main`
  h1 {
    text-align: center;
  }
`;

export const CountriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    text-align: center;
    width: 250px;
    background: var(--color-grey-100);
    transition: 0.3s;

    p {
      /* margin: 0; */
    }

    div {
      width: 50px;
      height: auto;
      border: none;
    }

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
