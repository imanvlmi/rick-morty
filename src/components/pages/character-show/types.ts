export interface ICharacter {
  imageUrl?: string;
  characterName?: string;
  characterSpecies?: string;
  created?: string | undefined;
  gender?: string;
  location?:
    | {
        name?: string | undefined;
      }
    | undefined;
}
export interface IResults {
  image: string;
  name: string;
  species: string;
}
export interface IUseCharactersList {
  characters: {
    results: {
      id: string;
      name: string;
      image: string;
      species: string;
    }[];
  };

  error: unknown;
  isLoading: boolean;
}
export interface IUseCharacterItem {
  character: {
    name: string;
    image: string;
    created: string;
    gender: string;
    location: {
      name: string;
    };
  };

  error: unknown;
  isLoading: boolean;
}
