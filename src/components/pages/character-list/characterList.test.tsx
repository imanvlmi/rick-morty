import myStore from "@store/store";
import { renderHook } from "@testing-library/react";
import { useStore } from "zustand";

describe("My store", () => {
  test("Characters list", async () => {
    const { result } = renderHook(() => useStore(myStore));

    expect(result.current.charactersList).toEqual([]);
  });
});
