import React, { useEffect } from "react";
import {
  EnvironmentStoreContext,
  createEnvironmentStore as createEnvironmentStore,
} from "./environmentStore";

export const store = createEnvironmentStore();

export const EnvironmentStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useEffect(() => {
    fetch("/env.json")
      .then((res) => res.json())
      .then((config) => {
        store.getState().setConfig(config.API_URL);
      })
      .catch((err) => {
        console.error("Błąd ładowania config.json:", err);
      });
  }, []);

  return (
    <EnvironmentStoreContext.Provider value={store}>
      {children}
    </EnvironmentStoreContext.Provider>
  );
};
