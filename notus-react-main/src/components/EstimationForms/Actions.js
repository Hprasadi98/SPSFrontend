const Actions = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleSubmit}
        className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150"
      >
        Submit
      </button>
    </div>
  );
};

export default Actions;
