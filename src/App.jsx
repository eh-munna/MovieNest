function App() {
  return (
    <>
      <div className="text-red-400 flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]">
        <div className="space-y-6">
          <h1 className="text-3xl">
            Choosing the State Structure - Avoid contradictions in state
          </h1>
          <p className="text-lg">
            When the state is structured in a way that several pieces of state
            may contradict and “disagree” with each other, you leave room for
            mistakes. Try to avoid this.
          </p>

          <a
            href="https://react.dev/learn/choosing-the-state-structure#avoid-contradictions-in-state"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
