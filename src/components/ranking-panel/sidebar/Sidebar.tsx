import { useEffect, useState } from 'react';
import './Sidebar.scss';

import { CountryStatusState, CountryOptionsState, CountryTagsState } from '../../interfaces';

type SidebarProps = {
  handleSortBy: (key: string) => void;
  handleFilterByTags: (tags: string[]) => void;
  handleFilterByStatus: (status: CountryStatusState[]) => void;
}

export const Sidebar = ({ handleSortBy, handleFilterByTags, handleFilterByStatus }: SidebarProps): React.ReactElement => {
  const options: CountryOptionsState[] = [
    {value: 'Name', label: 'Name'},
    {value: 'Population', label: 'Population'},
    {value: 'Area', label: 'Area'}
  ]
  const [selected, setSelected] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<CountryTagsState>({
    Americas: false,
    Antartic: false,
    Africa: false,
    Asia: false,
    Europe: false,
    Oceania: false
  });
  const [selectedStatus, setSelectedStatus] = useState<CountryStatusState[]>([
    {id: 'independent', label: 'Independent', active: false},
    {id: 'unMember', label: 'Member of the United Nations', active: false}
  ]);

  useEffect(() => {
    const tags = Object.keys(selectedTags).filter(tag => selectedTags[tag]);
    handleFilterByTags(tags);
  }, [selectedTags, handleFilterByTags]);

  useEffect(() => {
    handleFilterByStatus(selectedStatus);
  }, [selectedStatus, handleFilterByStatus]);

  /**
   * Handles the selection of a region.
   * @param value - The value to sort the countries by.
   */
  const handleSelect = (value: string) => {
    setSelected(value);
    handleSortBy(value.toLowerCase());
    setIsOpen(false);
  }

  /**
   * Handles the selection of tags.
   * @param tag - The tag to filter the countries by.
   */
  const handleSelectedTags = (tag: string) => {
    setSelectedTags({...selectedTags, [tag]: !selectedTags[tag]});
    setSelected('');
  }

  /**
   * Handles the selection of status.
   * @param status - The status to filter the countries by.
   */
  const handleSelectedStatus = (status: CountryStatusState) => {
    const updatedStatus = selectedStatus.map(s => {
      if (s.id === status.id) {
        return {...s, active: !s.active};
      }
      return s;
    });
    setSelectedStatus(updatedStatus);
    setSelected('');
  }

  return (
    <>
      <ul className="siderbar" data-testid="sidebar">
        <li className='siderbar__item'>
          <label htmlFor="sorting-select">Sort by</label>
          <div className='sorting-select'>
            <div className={isOpen ? 'sorting-select__selected--open' : 'sorting-select__selected'} onClick={() => setIsOpen(!isOpen)} data-testid="sortingSelect">{selected || 'Select a region'}</div>
            <ul className={isOpen ? 'sorting-select__options--open' : 'sorting-select__options'}>
              {options.map(option => (
                <li key={option.value} className='sorting-select__option' onClick={() => handleSelect(option.value)} data-testid={'sortingSelectOption' + option.label}>{option.label}</li>
              ))}
            </ul>
          </div>
        </li>
        <li className='siderbar__item'>
          <label htmlFor="filter-select">Filter by</label>
          <div className='tags'>
            {Object.keys(selectedTags).map(tag => (
              <label key={tag} className='tag'>
                <input type='checkbox' className='tag__checkbox' checked={selectedTags[tag]} onChange={() => handleSelectedTags(tag)} data-testid="tag" />
                <span className='tag__control'>{tag}</span>
              </label>
            ))}
          </div>
        </li>
        <li className='siderbar__item'>
          <label htmlFor="status">Status</label>
          <div className='checkboxes'>
            {selectedStatus.map(status => (
              <label key={status.id} className='checkbox'>
                <input type='checkbox' className='checkbox__input' checked={status.active} onChange={() => handleSelectedStatus(status)} data-testid="status" />
                <span className='checkbox__control'></span>
                {status.label}
              </label>
            ))}
          </div>
        </li>
      </ul>
    </>
  )
}
