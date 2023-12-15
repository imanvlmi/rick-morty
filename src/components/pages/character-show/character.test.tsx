import myStore from "@store/store";
import { renderHook } from "@testing-library/react";
import { useStore } from "zustand";

describe("My store", () => {
  test("Characters Info", async () => {
    const { result } = renderHook(() => useStore(myStore));

    expect(result.current.characterInfo.character).toEqual({
      created: "",
      gender: "",
      image: "",
      location: { name: "" },
      name: "",
    });
  });
});
