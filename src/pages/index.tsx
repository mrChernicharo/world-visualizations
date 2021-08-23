import { useEffect } from 'react';
import { Country } from '../interfaces/Country';

import { Nav } from '../components/template/Nav';
import HomePage from './home/HomePage';
import { IndexContainer } from './IndexContainer';
import { useStore } from '../hooks/useStore';

interface IProps {
	countries: Country[];
	fuelData: any;
	isAppleM1: boolean;
}

export default function Index({ countries, fuelData, isAppleM1 }: IProps) {
	const { setCountries } = useStore();

	useEffect(() => {
		setCountries(countries);
	}, [setCountries, countries]);

	useEffect(() => console.log(fuelData), [fuelData]);
	return (
		<IndexContainer>
			<Nav />

			<HomePage countries={countries} isAppleM1 />
		</IndexContainer>
	);
}

export async function getStaticProps() {
	const req = await fetch('https://restcountries.eu/rest/v2/all');

	const fuelReq = await fetch(
		`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=10&api_key=${process.env.DATA_GOV_API_KEY}`
	);

	const countries = await req.json();
	const fuelData = await fuelReq.json();

	return {
		props: {
			countries,
			fuelData,
			isAppleM1:
				process.arch === 'arm64' && process.platform === 'darwin', // bug fix pro M1
		},
		revalidate: 1200,
	};
}
