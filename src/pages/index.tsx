import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Country } from "../interfaces/Country";

interface IProps {
  countries: Country[];
}

export async function getStaticProps() {
  const req = await fetch("https://restcountries.eu/rest/v2/all");

  const countries = await req.json();

  return {
    props: {
      countries,
    },
  };
}

export default function HomePage({ countries }: IProps) {
  useEffect(() => console.log(countries));
  return (
    <div>
      <h1>Hello Charts</h1>

      {countries.map((country) => (
        <div key={country.numericCode}>
          <h3>{country.name}</h3>
          <p>Population: {country.population}</p>
        </div>
      ))}
    </div>
  );
}
