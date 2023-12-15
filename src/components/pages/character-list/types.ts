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
