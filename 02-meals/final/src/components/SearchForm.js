const SearchForm = ({ name, setName }) => {
  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h5>Search Meals</h5>
      <input
        type='text'
        className='form-input'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};
export default SearchForm;
