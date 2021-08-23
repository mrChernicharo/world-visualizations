import * as React from 'react';
import Image from 'next/image';
import { Hero } from '../../components/ui/Hero';
import { Country } from '../../interfaces/Country';
import { HomePageContainer, CountriesContainer } from './HomePageContainer';
import CountryCard from '../../components/ui/CountryCard';

interface IHomePageProps {
	countries: Country[];
	isAppleM1: boolean;
}

export default function HomePage({ countries, isAppleM1 }: IHomePageProps) {
	// React.useEffect(() => console.log(countries));

	return (
		<HomePageContainer>
			<h1>Hello World Visualizations</h1>

			<Hero isAppleM1 />

			<article>
				<p>Information about the world we live in</p>
			</article>

			<CountriesContainer>
				{countries.map(country => (
					<CountryCard
						key={country.alpha3Code}
						country={country}
						isAppleM1={isAppleM1}
					/>
				))}
			</CountriesContainer>
		</HomePageContainer>
	);
}
