import { useState } from 'react';
import api from '../services/apiConfig'
import FormImperial from './FormImperial';

export default function ImperialSystem() {
  const default_input = {
    weight: 0,
    height: 0,
  }

  const [input, setInput] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("", { fields })
    console.log(res.data)
    setInput(default_input)
  }

  const handleImperialInput = (event) => {
    const { id, valueAsNumber } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [id]: valueAsNumber,
    }));
  };
  return (
    <div>
      <FormImperial input={input}
        handleSubmit={handleSubmit}
        handleImperialInput={handleImperialInput}
        type={"Sumbit"}
      />
    </div>
  )
}
