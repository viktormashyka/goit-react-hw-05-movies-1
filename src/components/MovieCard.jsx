const MovieCard = ({ data }) => {
  const { genres, title, release_date } = data;
  const genresList = genres.map(({ name }) => name).join(', ');

  const year1 = new Date(release_date).getFullYear();
  const year2 = release_date.split('-')[0];
  const year3 = release_date.slice(0, 4);

  return (
    <>
      <p>{genresList}</p>
      <br />
      <p>{[title, year1].join(', ')}</p>
      <p>{[title, year2].join(', ')}</p>
      <p>{[title, year3].join(', ')}</p>
    </>
  );
};

export default MovieCard;
