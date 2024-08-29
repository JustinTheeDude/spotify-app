import { render, screen, fireEvent } from "@testing-library/react";
import LikeButton from "@/components/LikeButton";
import { useLikeStore } from "@/store/store";
import { vi } from "vitest";

// Mock the useLikeStore hook
vi.mock("@/store/store", () => ({
  useLikeStore: vi.fn(),
}));

describe("LikeButton Component", () => {
  const mockAddArtists = vi.fn();
  const mockLikes = [{ id: "1", name: "Artist 1" }];

  beforeEach(() => {
    useLikeStore.mockImplementation((selector) => {
      if (selector.name === "likes") return mockLikes;
      if (selector.name === "addArtists") return mockAddArtists;
    });
  });

  it("renders the correct button text when the artist is not liked", () => {
    render(<LikeButton addText="Add to Favorites" removeText="Remove" />)
    const button = screen.getByTestId("like");
    expect(button).toHaveTextContent("Add to Favorites");
  });
});