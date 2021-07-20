import { useEffect } from 'react';
import { Bar } from '../../components/charts/Bar';
import { Nav } from '../../components/template/Nav';
import { useStore } from '../../hooks/useStore';

interface ICountriesPageProps {}

export default function CountriesPage({}: ICountriesPageProps) {
  const store = useStore();
  return (
    <div>
      <Nav />
      <h1>Countries</h1>
      <div>
        <Bar width={600} height={400} data={store.countries} />
      </div>
    </div>
  );
}
