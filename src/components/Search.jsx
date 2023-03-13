function Search({ onChange }) {
	return (
		<input type="search" className="form-input rounded-lg w-full md:w-80" placeholder="Search..." onChange={onChange} />
	);
}
export default Search;
