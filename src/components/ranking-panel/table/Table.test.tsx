import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import { countries } from "../../../../__mocks__/countries.mock";
import { Table } from "./Table";

describe('Table', () => {
  beforeEach(() => {
    render(<Table countries={countries} />);
  });

  test('renders Table', () => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('it should render the correct number of rows', () => {
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(countries.length + 1);
  });

  test('it should check insertCommas', () => {
    const populationCell = screen.getAllByTestId('populationCell')[0];
    const areaCell = screen.getAllByTestId('areaCell')[0];
    const populationCell2 = screen.getAllByTestId('populationCell')[1];
    const areaCell2 = screen.getAllByTestId('areaCell')[1];
    expect(populationCell).toHaveTextContent('323,947,000');
    expect(areaCell).toHaveTextContent('9,826,675');
    expect(populationCell2).toHaveTextContent('36,155,487');
    expect(areaCell2).toHaveTextContent('9,984,670');
  });
});