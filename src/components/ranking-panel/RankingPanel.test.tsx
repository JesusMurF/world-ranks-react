import { render, waitFor, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { RankingPanel } from "./RankingPanel";
import { countries } from "../../../__mocks__/countries.mock";

jest.mock('../../hooks/useFetchCountries', () => {
  return () => ({
    data: countries,
    loading: false,
    error: null
  });
});


describe('RankingPanel', () => {
  beforeEach(async () => {
    await act( async () => render(<RankingPanel/>));
  });
  
  test('useEffect loads all the countries on component mount', async () => {
    const country = await waitFor(() => screen.getByText('United States'));
    expect(country).toContainHTML('United States');
  });


  test('it should search for a country', async () => {
    const searchInput = screen.getByTestId('searchInput') as HTMLInputElement;
    await act( async () => {
      searchInput.focus();
      await waitFor(() => {
        searchInput.value = 'United States';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
    const country = await waitFor(() => screen.getByText('United States'));
    expect(country).toContainHTML('United States');
  });

  test('it should sort the countries by name', async () => {
    const select = screen.getByTestId('sortingSelect') as HTMLSelectElement;
    const nameHeader = screen.getByTestId('sortingSelectOptionName');
    await act( async () => {
      select.click();
      nameHeader.click();
    });
    const tableRow = screen.getAllByTestId('tableRow')[0];
    expect(tableRow).toContainHTML('Argentina');
  });

  test('it should sort the countries by population', async () => {
    const select = screen.getByTestId('sortingSelect') as HTMLSelectElement;
    const populationHeader = screen.getByTestId('sortingSelectOptionPopulation');
    await act( async () => {
      select.click();
      populationHeader.click();
    });
    const tableRow = screen.getAllByTestId('tableRow')[0];
    expect(tableRow).toContainHTML('Canada');
  });

  test('it should sort the countries by area', async () => {
    const select = screen.getByTestId('sortingSelect') as HTMLSelectElement;
    const areaHeader = screen.getByTestId('sortingSelectOptionArea');
    await act( async () => {
      select.click();
      areaHeader.click();
    });
    const tableRow = screen.getAllByTestId('tableRow')[0];
    expect(tableRow).toContainHTML('Mexico');
  });
});