export default function Panel({ title, content, onToggle, isOpen }) {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 space-y-3">
        <h1 className="text-xl font-bold">{title}</h1>
        {isOpen ? <p>{content}</p> : null}

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onToggle}
            className="bg-slate-600 px-2 py-1 border border-sky-400 rounded-md"
          >
            {!isOpen ? 'Show' : 'Hide'}
          </button>
        </div>
      </div>
    </>
  );
}
