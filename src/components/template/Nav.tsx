import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { NavContainer } from './NavContainer';
import { HeaderLinks } from '../ui/HeaderLinks';

interface INavProps {}

export const Nav: React.FC<INavProps> = props => {
	const [location, setLocation] = useState('');

	return (
		<NavContainer>
			<div>
				<FiGlobe size={30} />
			</div>
			<HeaderLinks location={location} />
		</NavContainer>
	);
};
