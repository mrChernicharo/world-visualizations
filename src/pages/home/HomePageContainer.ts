import styled from 'styled-components';

export const HomePageContainer = styled.div`
	h1 {
		background-color: #000;
		margin: 0;
		color: #fff;
	}

	article p {
		font-size: 1.25rem;
		color: var(--color-grey-600);
		text-align: center;
	}
`;

export const CountriesContainer = styled.section`
	margin-inline: auto;
	max-width: 1200px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	padding: 0.75rem;

	grid-gap: 0.75rem;
`;
