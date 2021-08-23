import create, { UseStore } from 'zustand';
import { nanoid } from 'nanoid';
import { Country } from '../interfaces/Country';

export interface CountriesState {
	countries: Country[];
	setCountries: (countries: Country[]) => void;
	getCountries: () => void;
}

export const useStore: UseStore<CountriesState> = create((set, get) => ({
	countries: [],
	setCountries: countries => set(state => ({ countries })),
	getCountries: () => get(),
}));
