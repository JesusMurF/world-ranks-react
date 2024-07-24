import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

import { countries } from '../../../../__mocks__/countries.mock';

const handleQuery = jest.fn();

describe('Header', () => {
  beforeEach(() => {
    render(<Header countries={countries} handleQuery={handleQuery} />);
  });

  test('renders Header', () => {
    const countriesLength = screen.getByTestId('countriesLength');
    const searchInput = screen.getByTestId('searchInput');
    expect(countriesLength).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  test('it should show the number of countries found', () => {
    const length = screen.getByTestId('countriesLength');
    expect(length).toHaveTextContent(`Found ${countries.length} countries`);
  });

  test('it should call handleQuery', () => {
    const input = screen.getAllByTestId('searchInput')[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Nigeria' } });
    expect(handleQuery).toHaveBeenCalledTimes(1);
    expect(handleQuery).toHaveBeenCalledWith('Nigeria');
  });
});