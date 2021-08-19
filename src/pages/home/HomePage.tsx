import * as React from 'react';
import Image from 'next/image';
import { Hero } from '../../components/ui/Hero';
import { Country } from '../../interfaces/Country';
import {
	HomePageContainer,
	CountriesContainer,
} from '../../styles/pages/HomePage';

interface IHomePageProps {
	countries: Country[];
	isAppleM1: boolean;
}

export default function HomePage({ countries, isAppleM1 }: IHomePageProps) {
	React.useEffect(() => console.log(countries));

	return (
		<HomePageContainer>
			<h1>Hello World Visualizations</h1>

			<Hero isAppleM1 />

			<article>
				<p>Information about the world we live in</p>
			</article>

			<CountriesContainer>
				{countries.map(country => (
					<div key={country.numericCode}>
						<h3>{country.name}</h3>
						<Image
							src={country.flag}
							width={'100%'}
							height={64}
							alt={`Flag of ${country.name}`}
							unoptimized={
								process.env.NODE_ENV === 'development' &&
								isAppleM1
							}
						/>
						<p>
							Population:
							{' ' + country.population.toLocaleString('us')}
						</p>
					</div>
				))}
			</CountriesContainer>
		</HomePageContainer>
	);
}
