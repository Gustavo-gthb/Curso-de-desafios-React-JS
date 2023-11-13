// eslint-disable-next-line react/prop-types
const Train = ({ exercise, reps, weight }) => {
  return (
    <>
      <h3>Training name: {exercise}</h3>
      <p>Repetitions: {reps} reps</p>
      <p>Weight per serie: {weight}kg each side</p>
    </>
  );
};

export default Train;
