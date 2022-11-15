export const Cast = ({ cast }) => {
  console.log('cast, ', cast);
  return (
    <section>
      <div>
        <h2>Cast</h2>
        <ul>
          {cast.map(c => (
            <li key={c.id}>
              <img src={c.profile_path} alt={c.name} />
              <p>{c.name}</p>
              <p>Character: {c.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
