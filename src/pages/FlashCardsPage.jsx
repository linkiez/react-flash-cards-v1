import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCards } from "../data/allFlashcards";
import { useState } from "react";
import { shuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = shuffleArray(allCards);
    setAllCards(shuffledCards);
  }

  function handleRadioShowTitleClick() {
    const updatedCards = [...allCards].map((flashCard) => {
      return {
        ...flashCard,
        showTitle: true,
      };
    });
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    const updatedCards = [...allCards].map((flashCard) => {
      return {
        ...flashCard,
        showTitle: false,
      };
    });
    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const newCards = allCards.map((flashCard) => {
      if (flashCard.id === cardId) {
        return {
          ...flashCard,
          showTitle: !flashCard.showTitle,
        };
      }
      return flashCard;
    });
    setAllCards(newCards);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="ShowInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Titulo
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="ShowInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map((flashCard) => {
            return (
              <FlashCard
                key={flashCard.id}
                id={flashCard.id}
                title={flashCard.title}
                description={flashCard.description}
                showFlashCardTitle={flashCard.showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
