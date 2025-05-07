import { useState } from 'react';
import { initialTravelPlan } from '../data/places-norm';
import TravelTreeNorm from './TravelTreeNorm';

export default function TravelPlanNorm() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];

  const handleDone = (parentId, placeId) => {
    console.log(parentId);
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== placeId),
    };

    setPlan((prevPlan) => ({ ...prevPlan, [parentId]: nextParent }));
  };

  return (
    <>
      <ol>
        {root.childIds.map((place) => (
          <TravelTreeNorm
            key={place}
            placeId={place}
            parentId={0}
            plan={plan}
            onDone={handleDone}
          />
        ))}
      </ol>
    </>
  );
}
