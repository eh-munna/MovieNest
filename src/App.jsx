function App() {
  return (
    <>
      <div className="text-red-400 flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]">
        <div className="space-y-6">
          <h1 className="text-3xl">Reacting to Input with State</h1>
          <p className="text-lg">
            React provides a declarative way to manipulate the UI. Instead of
            manipulating individual pieces of the UI directly, you describe the
            different states that your component can be in, and switch between
            them in response to the user input. This is similar to how designers
            think about the UI.
          </p>

          <a
            href="https://react.dev/learn/reacting-to-input-with-state"
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
