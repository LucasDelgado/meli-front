import React, { useContext, useReducer } from "react";
import { initialState, storeReducer } from "./storeReducer";

const StoreContext = React.createContext([] as any);

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreProvider, StoreContext, useStore, useDispatch };
