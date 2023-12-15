import { UseQueryResult, useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { rickAndMorty } from "@api/urls/url";

interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

const graphQLClient = new GraphQLClient(rickAndMorty.rickApiUrl);

export const useCharactersList = (
  handlerSuccess: (data: any) => void
): UseQueryResult => {
  return useQuery(
    "charactersList",
    async (): Promise<unknown> => {
      const characters = await graphQLClient.request(gql`
        query Characters {
          characters {
            results {
              id
              name
              species
              image
            }
          }
        }
      `);
      return characters;
    },
    {
      onSuccess(data) {
        handlerSuccess(data);
      },
    }
  );
};
