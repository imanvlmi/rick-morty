import CharacterShow from "../components/pages/character-show";
import CharacterListOrganism from "../components/pages/character-list";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterListOrganism />} />
      <Route path="/:id" element={<CharacterShow />} />
    </Routes>
  );
};

export default Router;
