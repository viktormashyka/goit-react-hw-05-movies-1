import { useSearchParams } from 'react-router-dom';
import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
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
        <Input
          name="searchQuery"
          type="text"
          // value={value}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </Wrapper>
  );
};

// import { Wrapper, Input, Icon } from './SearchBox.styled';

// export const SearchBox = ({ value, onChange }) => {

//   return (
//     <Wrapper>
//       <Icon />
//       <Input
//         type="text"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//     </Wrapper>
//   );
// };

// export const SearchBox = ({ value, onSubmit }) => {
//   // const [inputValues, setInputValues] = useState({ name: '' });

//   // const handleChange = evt => {
//   //   const { name, value } = evt.target;
//   //   setInputValues({ ...inputValues, [name]: value });
//   // };
//   // const handleSubmit = e => {
//   //   e.preventDefault();
//   //   onSubmit({ ...inputValues });
//   // };
//   // const handleSubmit = evt => {
//   //   evt.preventDefault();
//   //   onSubmit({ ...inputValues });

//   //   setInputValues({ name: '', number: '' });
//   // };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const query = form.elements.login.value;
//     onSubmit({ query });
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <Wrapper>
//           <Icon />
//           <Input
//             name="name"
//             type="text"
//             value={value}
//             // onChange={e => onChange(e.target.value)}
//           />
//           <button type="submit">
//             <Icon />
//           </button>
//         </Wrapper>
//       </label>
//     </form>
//   );
// };

// export const Searchbar = ({ onSubmit }) => {
//   const [searchPhotos, setSearchPhotos] = useState('');

//   const handleChange = evt => {
//     setSearchPhotos(evt.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     if (searchPhotos.trim() === '') {
//       return toast.info('Input search name please ...');
//     }
//     onSubmit(searchPhotos);

//     setSearchPhotos('');
//   };

/* <header className="Searchbar">
  <form className="SearchForm" onSubmit={handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      value={searchPhotos}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
    />
  </form>
</header>; */

// import { Wrapper, Input, Icon } from './SearchBox.styled';

// export const SearchBox = ({ value, onChange }) => {
//   return (
//     <Wrapper>
//       <Icon />
//       <Input
//         type="text"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//     </Wrapper>
//   );
// };

// export const SearchBox = ({ value, onChange, onSubmit }) => {
//     const [query, setQuery] = useState('');

//     const handleSubmit = evt => {
//               evt.preventDefault();

//     if (query.trim() === '') {
//       return toast.info('Input search name movie please ...');
//     }

//     onSubmit(query);

//     setQuery('');
//     };

//   return (
//     <Wrapper>
//       <form className="SearchForm" onSubmit={handleSubmit}>
//         <button type="submit" className="SearchForm-button><Icon /></button>
//         <Input
//         type="text"
//         value={value}
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={e => onChange(e.target.value)}
//         />
//       </form>
//     </Wrapper>
//   );
// };
