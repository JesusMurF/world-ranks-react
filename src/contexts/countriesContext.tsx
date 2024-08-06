import { createContext } from "react";
import { Country } from "../components/interfaces";

export const CountriesContext = createContext<{countries: Country[], loading: boolean}>({countries: [], loading: false});
