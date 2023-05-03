/** @format */

import { createContext, useContext } from "react";
import appStore from "./models/app";
class RootStore {
	appStore = appStore;
}

const store = new RootStore();

const Context = createContext(store);

export const useStore = () => {
	return useContext(Context);
};
