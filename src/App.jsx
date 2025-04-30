import AddInput from './components/AddInput';

function App() {
  return (
    <>
      <div className="text-red-400 flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]">
        <div className="space-y-6">
          <h1 className="text-3xl">Choosing the State Structure</h1>
          <p className="text-lg">
            Structuring state well can make a difference between a component
            that is pleasant to modify and debug, and one that is a constant
            source of bugs. Here are some tips you should consider when
            structuring state.
          </p>

          <a
            href="https://react.dev/learn/choosing-the-state-structure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Learn More
          </a>
        </div>

        <div className="flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center">
          <AddInput />
        </div>
      </div>
    </>
  );
}

export default App;
