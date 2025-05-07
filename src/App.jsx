import TravelPlanNorm from './components/TravelPlanNorm';

function App() {
  return (
    <>
      {/* <div className="text-red-400 flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]"> */}
      <div className="text-red-400 flex flex-col">
        <h1 className="text-3xl font-bold">Travel Plan App</h1>
        <TravelPlanNorm />
      </div>
    </>
  );
}

export default App;
