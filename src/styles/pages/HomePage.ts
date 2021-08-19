import styled from 'styled-components';

export const HomePageContainer = styled.div`
	h1 {
		background-color: #000;
		margin: 0;
		color: #fff;
	}

	article p {
		font-size: 2rem;
		color: var(--color-grey-600);
		text-align: center;
	}
`;

export const CountriesContainer = styled.section`
	margin-inline: auto;
	max-width: 1200px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

	div {
		text-align: center;
		background: var(--color-grey-100);
		transition: 0.3s;

		h3 {
			margin: 0;
		}
		p {
			margin: 0;
			font-size: 14px;
		}

		div {
			width: auto;
			height: auto;
			border: none;
		}

		&:hover {
			opacity: 0.7;
			cursor: pointer;
		}
	}
`;
