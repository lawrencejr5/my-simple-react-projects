const Reviews = (props) => {
  const { img, name, jutsu, quote, next, prev, suprise } = props;
  return (
    <article className="review-box">
      <img src={img} id="image" alt="" height="auto" width="250px" />
      <h2 id="name">{name}</h2>
      <b id="jutsu">{jutsu}</b>
      <p id="quote">{quote}</p>
      <div className="btn-container">
        <button className="btn previous-btn" onClick={prev}>
          .....Prev
        </button>
        <button className="btn next-btn" onClick={next}>
          Next.....
        </button>
        <br />
        <button className="btn random" onClick={suprise}>
          Suprise me
        </button>
      </div>
    </article>
  );
};
export default Reviews;
