import { useSearchParams } from 'react-router-dom';
import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.searchQuery.value;
    const query = value.trim();

    if (!query) {
      alert('empty query');
      return;
    }
    setSearchParams({ query });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Icon />
        <Input name="searchQuery" type="text" />
      </form>
    </Wrapper>
  );
};
