export default function TravelTreeNorm({ placeId, plan, onDone, parentId }) {
  const place = plan[placeId];

  return (
    <>
      <li>
        {place.title}

        <button
          className="ml-2 p-2 border"
          onClick={() => onDone(parentId, placeId)}
        >
          Done
        </button>

        <ol>
          {place.childIds.length > 0 &&
            place.childIds.map((childId) => (
              <TravelTreeNorm
                key={childId}
                placeId={childId}
                parentId={placeId}
                plan={plan}
                onDone={onDone}
              />
            ))}
        </ol>
      </li>
    </>
  );
}
