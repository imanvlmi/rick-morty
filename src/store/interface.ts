export interface character {
  id: string;
  name: string;
  species: string;
  image: string;
}
export interface characterInfo {
  character: {
    name: string;
    gender: string;
    image: string;
    created: string;
    location: {
      name: string;
    };
  };
}
export interface State {
  charactersList: character[];
  characterInfo: characterInfo;
}
export interface Actions {
  setList: (data: character[]) => void;
  setCharacterInfo: (data: characterInfo) => void;
}
