import styled from 'styled-components';

export const HeadLinksContainer = styled.div`
	/* border: 1px solid red; */
	width: calc(1rem * 24);
	display: flex;
	justify-content: space-between;

	&.active {
		color: var(--color-primary-300);
	}
`;
