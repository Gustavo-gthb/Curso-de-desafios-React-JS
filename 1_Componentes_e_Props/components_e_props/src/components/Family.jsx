/* eslint-disable react/prop-types */
import Train from "./Train";

function Family({ members }) {
  return (
    <>
      {members.map((item, index) => (
        <Train
          key={index}
          exercise={item.exercise}
          reps={item.reps}
          weight={item.weight}
        />
      ))}
    </>
  );
}

export default Family;
