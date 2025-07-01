import React, { createContext, useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [store, setStore] = useState({});
  const [actions, setActions] = useState({});

  const getStore = () => store;
  const setStoreWrapper = (updatedStore) =>
    setStore((prev) => ({ ...prev, ...updatedStore }));
  const getActions = () => actions;

  useEffect(() => {
    const flux = getState({ getStore, getActions, setStore: setStoreWrapper });
    setActions(flux.actions);
    setStore(flux.store);
  }, []);

  return (
    <Context.Provider value={{ store, actions }}>{children}</Context.Provider>
  );
};

export { ContextProvider };
