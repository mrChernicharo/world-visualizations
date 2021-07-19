import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { Country } from '../interfaces/Country';

import { Nav } from '../components/template/Nav';
import { Hero } from '../components/ui/Hero';
import { PageContainer, CountriesContainer } from '../styles/Index';

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

export default function HomePage({ countries, isAppleM1 }: IProps) {
  useEffect(() => console.log(countries));
  return (
    <PageContainer>
      <Nav />
      <h1>Hello World Visualizations</h1>

      <Hero isAppleM1 />

      <CountriesContainer>
        {countries.map(country => (
          <div key={country.numericCode}>
            <h3>{country.name}</h3>
            <Image
              src={country.flag}
              width={'100%'}
              height={64}
              alt={`Flag of ${country.name}`}
            />
            <p>Population: {country.population.toLocaleString('us')}</p>
          </div>
        ))}
      </CountriesContainer>
    </PageContainer>
  );
}
