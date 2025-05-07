import { useState } from 'react';
import { initialTravelPlan } from '../data/places';
import TravelTree from './TravelTree';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const places = plan.childPlaces;

  return (
    <>
      <ol className="list-decimal ml-4">
        {places.map((place) => (
          <TravelTree key={place?.id} place={place} />
        ))}
      </ol>
    </>
  );
}
