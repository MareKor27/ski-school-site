import { createContext, useContext } from "react";
import { createStore, useStore } from "zustand";

export interface EnvironmentState {
  apiBaseUrl: string;
  isLoaded: boolean;
  setConfig: (url: string) => void;
}

export const createEnvironmentStore = () =>
  createStore<EnvironmentState>((set) => ({
    apiBaseUrl: "",
    isLoaded: false,
    setConfig: (url) =>
      set({
        apiBaseUrl: url,
        isLoaded: true,
      }),
  }));

type EnvironmentStore = ReturnType<typeof createEnvironmentStore>;

export const EnvironmentStoreContext = createContext<EnvironmentStore | null>(
  null
);

export const useEnvironmentStore = <T>(
  selector: (state: EnvironmentState) => T
): T => {
  const store = useContext(EnvironmentStoreContext);
  if (!store) throw new Error("ConfigStoreProvider is missing");
  return useStore(store, selector);
};
