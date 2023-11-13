/* eslint-disable react/prop-types */
import React from "react";

export class TrainClass extends React.Component {

  render() {
    const {porsche,exercise,reps,weight} = this.props

    return (
      <div>
        <h1>exercício: {exercise}</h1>
        <p>Repetições: {reps}</p>
        <p>Peso: {weight}kg</p>
        <p>Carro: {porsche} Turbo</p>
      </div>
    );
  }
}

export default TrainClass;
