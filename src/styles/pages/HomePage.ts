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

export const CountryCardContainer = styled.div`
	text-align: center;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 0.5rem;
	box-shadow: 3px 3px 8px var(--color-grey-300);
	transition: 0.6s;

	&:hover {
		cursor: pointer;
		background-color: var(--color-primary-100-trans);
	}

	h3 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.25rem 1rem 0.25rem;
		margin: 0;
		min-height: 4rem;
	}

	section {
		div {
			// image
			width: auto;
			height: auto;
			/* border: 1px ; */
			background-clip: border-box;
			box-shadow: 2px 4px 8px var(--color-grey-200);
		}
		p {
			margin: 0;
			font-size: 14px;
			padding: 0.5rem 0 1rem;
		}
	}
`;
