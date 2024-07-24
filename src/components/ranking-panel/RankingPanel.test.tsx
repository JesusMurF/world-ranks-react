import { render, waitFor, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { RankingPanel } from "./RankingPanel";
import { countries } from "../../../__mocks__/countries.mock";

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(countries),
    })
  )
}));


describe('RankingPanel', () => {
  beforeEach(async () => {
    await act( async () => render(<RankingPanel/>));
  });
  
  test('useEffect loads all the countries on component mount', async () => {
    const country = await waitFor(() => screen.getByText('United States'));
    expect(country).toContainHTML('United States');
  });
});