import { UseQueryResult, useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { characterInfo } from "@store/interface";
import { rickAndMorty } from "@api/urls/url";

const graphQLClient = new GraphQLClient(rickAndMorty.rickApiUrl);

export const useCharacterItem = (
  id: string | undefined,
  handlerSuccess: (data: characterInfo) => void
): UseQueryResult => {
  return useQuery(
    "characterItem",
    async (): Promise<unknown> => {
      const characterItem = await graphQLClient.request(gql`
      query Characters {
        character(id:${id}) {
        name
        gender
        image
        created
        location {
            name
        }
    } 
 }
    `);
      return characterItem;
    },
    {
      onSuccess(data: characterInfo) {
        handlerSuccess(data);
      },
    }
  );
};
