import React from "react";
import "./NewCard.css"

const NewCard = () =>{
    return (
        <div class="flex justify justify-center">
        <div
          class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
}

export default NewCard;