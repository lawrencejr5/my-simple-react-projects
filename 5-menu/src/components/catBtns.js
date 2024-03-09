const CatBtns = ({ mapItems, filerFunc }) => {
  return (
    <div className="btn-container">
      {mapItems.map((cat, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filerFunc(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
export default CatBtns;
