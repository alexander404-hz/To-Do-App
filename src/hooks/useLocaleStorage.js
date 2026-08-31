import React, { useState, useEffect } from "react";

function useLocalStorage(itemKey, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  //Load item

  useEffect(() => {
    setTimeout(() => {
      try {
        const itemJSON = localStorage.getItem(itemKey);
        let defaultItem;

        if (itemJSON) {
          defaultItem = JSON.parse(itemJSON);
          setItem(defaultItem);
        } else {
          saveItem(initialValue);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMsg({
          type: "error",
          text: `Ocurrio un error al cargar el item (${itemKey})`,
          description: error.message,
        });

        console.error(error);
      }
    }, 1000);
  }, []);

  //save item
  const saveItem = (newItem) => {
    if (!Array.isArray(newItem)) {
      setErrorMsg({
        type: "error",
        text: `Error al guardar el item (${itemKey})`,
        description: "El item deberia ser un arreglo",
      });
      return;
    }

    try {
      const newItemJSON = JSON.stringify(newItem);
      localStorage.setItem(itemKey, newItemJSON);

      setItem(newItem);
      setErrorMsg(null);
    } catch (error) {
      setErrorMsg({
        type: "error",
        text: `Error al guardar el item (${itemKey})`,
        description: error.message,
      });

      console.error(error);
    }
  };

  return { item, saveItem, isLoading, errorMsg };
}

export { useLocalStorage };
