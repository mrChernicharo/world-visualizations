import { useEffect } from 'react';
import { BarVertical } from '../../charts/BarVertical';
import { Nav } from '../../components/template/Nav';

interface ICountriesPageProps {}

export default function CountriesPage({}: ICountriesPageProps) {
  return (
    <div>
      <Nav />
      <h1>Countries</h1>
      <div>
        <BarVertical />
      </div>
    </div>
  );
}
