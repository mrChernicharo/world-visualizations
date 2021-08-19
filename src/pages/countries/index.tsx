import { useEffect } from 'react';
import { Bar } from '../../components/charts/Bar';
import { Nav } from '../../components/template/Nav';
import { useStore } from '../../hooks/useStore';
import { Country } from '../../interfaces/Country';

interface ICountriesPageProps {}
const getRandom = (arr: Country[], n: number) =>
	new Array(n)
		.fill(null)
		.map(() => arr[Math.floor(Math.random() * arr.length)]);

export default function CountriesPage({}: ICountriesPageProps) {
	const store = useStore();
	const barCountries = getRandom(store.countries, 6);
	return (
		<div>
			<Nav />
			<h1>Countries</h1>
			<div>
				<Bar width={600} height={400} data={barCountries} />
			</div>
		</div>
	);
}
