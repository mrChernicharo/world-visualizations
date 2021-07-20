import { useEffect } from 'react';
import { Country } from '../interfaces/Country';

import { Nav } from '../components/template/Nav';
import HomePage from './home/HomePage';
import { PageContainer, CountriesContainer } from '../styles/Index';
import { useStore } from '../hooks/useStore';

interface IProps {
  countries: Country[];
  isAppleM1: boolean;
}

export async function getStaticProps() {
  const req = await fetch('https://restcountries.eu/rest/v2/all');

  const countries = await req.json();

  return {
    props: {
      countries,
      isAppleM1: process.arch === 'arm64' && process.platform === 'darwin', // bug fix pro M1
    },
  };
}

export default function Index({ countries, isAppleM1 }: IProps) {
  const { setCountries } = useStore();

  useEffect(() => {
    setCountries(countries);
  }, [setCountries, countries]);
  return (
    <PageContainer>
      <Nav />

      <HomePage countries={countries} isAppleM1 />
    </PageContainer>
  );
}
