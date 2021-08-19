import * as React from 'react';
import Image from 'next/image';
import { Hero } from '../../components/ui/Hero';
import { Country } from '../../interfaces/Country';
import { FaUser } from 'react-icons/fa';
import { CountryCardContainer } from '../../styles/pages/HomePage';

interface ICountryCardProps {
	country: Country;
	isAppleM1: boolean;
}

export default function CountryCard({ country, isAppleM1 }: ICountryCardProps) {
	// React.useEffect(() => console.log(country));

	return (
		<CountryCardContainer>
			<h3>{country.name}</h3>
			<section>
				<Image
					src={country.flag}
					width={'100%'}
					height={64}
					alt={`Flag of ${country.name}`}
					unoptimized={
						process.env.NODE_ENV === 'development' && isAppleM1
					}
				/>
				<p>
					{' ' + country.population.toLocaleString('us')}
					<FaUser />
				</p>
			</section>
		</CountryCardContainer>
	);
}
