export const Reviews = ({ reviews }) => {
  console.log('reviews, ', reviews);
  return (
    <section>
      <div>
        <h2>Authors review</h2>
        <ul>
          {reviews.map(r => (
            <li key={r.id}>
              <p>Author: {r.author}</p>
              <p>{r.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// export const Reviews = () => {
//   return (
//     <section>
//       <div>
//         <h2>Author review</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi
//           impedit provident laborum? Cumque facilis quam quidem qui delectus,
//           unde dolorem alias ea dicta vitae natus ipsam modi quia error!
//         </p>
//       </div>
//     </section>
//   );
// };
