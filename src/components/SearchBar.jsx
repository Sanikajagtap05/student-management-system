function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      className="d-flex justify-content-center mb-4"
      style={{
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="🔍 Search Student..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "450px",
          height: "50px",
          borderRadius: "10px",
          border: "2px solid #0d6efd",
          fontSize: "18px",
          paddingLeft: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
}

export default SearchBar;