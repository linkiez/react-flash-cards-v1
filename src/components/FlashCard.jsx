export default function FlashCard({
  id,
  title = "Titulo do card",
  description = "Descricao do card",
  showFlashCardTitle = false,
  onToggleFlashCard = null,
}) {
  const fontSizeClassName = showFlashCardTitle ? "text-xl" : "text-sm";

  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  return (
    <div
      className={`shadow-lg p-4 w-80 h-48 m-2 cursor-pointer rounded-md
                flex flex-row items-center justify-center
                font-semibold font-mono ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
