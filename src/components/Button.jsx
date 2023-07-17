export default function Button({
  children: description = "Texto do botão",
  onButtonClick = null,
  className,
}) {
    function handleButtonClick() {
        if (onButtonClick) {
            onButtonClick()
        }
    }

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 ${className}`}
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}
