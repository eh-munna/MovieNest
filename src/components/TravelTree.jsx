export default function TravelTree({ place }) {
  const childPlaces = place.childPlaces;

  return (
    <>
      <li>
        {place.title}

        {childPlaces.length > 0 && (
          <ol className="list-decimal">
            {childPlaces.map((childPlace) => (
              <TravelTree key={childPlace?.id} place={childPlace} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
