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
