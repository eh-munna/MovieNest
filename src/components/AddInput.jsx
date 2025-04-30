import { useState } from 'react';

export default function AddInput() {
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      {
        id:
          prevInputs.length > 0 ? prevInputs[prevInputs.length - 1].id + 1 : 0,
        value: '',
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-col">
        {inputs.map((input) => (
          <input
            key={input?.id}
            className="px-1 mb-2"
            type="text"
            placeholder="Add something..."
          />
        ))}
        <button onClick={handleAddInput} type="submit">
          Add
        </button>
      </div>
    </>
  );
}
