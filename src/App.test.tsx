import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CharacterListOrganism from "./components/pages/character-list";
const queryClient = new QueryClient();

const MockCharactersList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CharacterListOrganism />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("CharactersList", () => {
  it("should fetch and render element", async () => {
    render(<MockCharactersList />);

    const elementMap = await screen.findByTestId("characterInfo");
    expect(elementMap).toBeInTheDocument();
  });
});
