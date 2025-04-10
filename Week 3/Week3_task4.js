export function BlueButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Click Me
    </button>
  );
}
