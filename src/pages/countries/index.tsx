import { useEffect, useRef, useState } from 'react';
import { Bar } from '../../components/charts/Bar';
import { Nav } from '../../components/template/Nav';
import { useStore } from '../../hooks/useStore';
import { Country } from '../../interfaces/Country';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface ICountriesPageProps {}
const getRandom = (arr: Country[], n: number) =>
	new Array(n)
		.fill(null)
		.map(() => arr[Math.floor(Math.random() * arr.length)]);

export default function CountriesPage({}: ICountriesPageProps) {
	const store = useStore();
	const initialArr = getRandom(store.countries, 8);
	const [barCountries, setBarCountries] = useState<Country[]>(initialArr);

	function addCountry() {
		setBarCountries([...barCountries, ...getRandom(store.countries, 1)]);
	}
	function removeCountry() {
		const last = barCountries.length - 1;
		setBarCountries(barCountries.slice(0, last));
	}

	return (
		<div>
			<Nav />
			<h1>Countries</h1>
			<div>
				<Bar width={800} height={400} data={barCountries} />
			</div>

			<button onClick={addCountry}>
				<FaPlus />
			</button>
			<button onClick={removeCountry}>
				<FaMinus />
			</button>
		</div>
	);
}
