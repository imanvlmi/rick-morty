import { create } from "zustand";
import { Actions, State, character, characterInfo } from "./interface";

const myStore = create<State & Actions>((set) => ({
  charactersList: [],
  characterInfo: {
    character: {
      name: "",
      gender: "",
      image: "",
      created: "",
      location: {
        name: "",
      },
    },
  },
  setList: (data: character[]): void => set(() => ({ charactersList: data })),
  setCharacterInfo: (data: characterInfo): void =>
    set(() => ({ characterInfo: data })),
}));

export default myStore;
