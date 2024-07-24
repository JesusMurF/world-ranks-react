import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Sidebar } from "./Sidebar";

const handleSortBy = jest.fn();
const handleFilterByTags = jest.fn();
const handleFilterByStatus = jest.fn();

describe('Sidebar', () => {
  beforeEach(() => {
    render(<Sidebar handleSortBy={handleSortBy} handleFilterByTags={handleFilterByTags} handleFilterByStatus={handleFilterByStatus} />);
  });

  test('renders Sidebar', () => {
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('it should handleSelect', () => {
    const select = screen.getByTestId('sortingSelect');
    fireEvent.click(select);
    const option = screen.getAllByTestId('sortingSelectOption');
    fireEvent.click(option[0]);
    expect(handleSortBy).toHaveBeenCalledTimes(1);
    expect(select).toHaveTextContent('Name');
  });

  test('it should handleSelectedTags', () => {
    const tag = screen.getAllByTestId('tag')[0];
    const select = screen.getByTestId('sortingSelect');
    fireEvent.click(tag);
    expect(tag).toBeChecked();
    expect(select).toHaveTextContent('Select a region');
  });

  test('it should handleFilterByStatus', () => {
    const status = screen.getAllByTestId('status')[0];
    const select = screen.getByTestId('sortingSelect');
    fireEvent.click(status);
    expect(status).toBeChecked();
    expect(select).toHaveTextContent('Select a region');
  });
});