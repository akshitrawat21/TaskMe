import React, { useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from "../data/defaultCards";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex flex-wrap gap-4 p-2">
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <Column
          title="Backlog"
          column="backlog"
          headingColor="text-gray-500"
          cards={cards}
          setCards={setCards}
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <Column
          title="TODO"
          column="todo"
          headingColor="text-yellow-300"
          cards={cards}
          setCards={setCards}
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <Column
          title="In progress"
          column="doing"
          headingColor="text-blue-300"
          cards={cards}
          setCards={setCards}
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <Column
          title="Complete"
          column="done"
          headingColor="text-green-300"
          cards={cards}
          setCards={setCards}
        />
      </div>
      <div className="flex flex-row">
        <BurnBarrel 
         setCards={setCards} />
      </div>
    </div>
  );
};

export default Board;
