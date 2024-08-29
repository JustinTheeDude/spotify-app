import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getArtists } from "@/lib/spotifyAPI";
import { useQuery } from '@tanstack/react-query';
import Search from './Search';

const testData = vi.hoisted(() => ({
    artists: {
        items: [
            {
                name: "Test Artist"
            }
        ]
    },
    albums: {
        items: [
            {
                name: "Test, album",
            }
        ]
    }
}))

vi.mock("@tanstack/react-query", () => ({
    useQuery: vi.fn(() => ({ data: testData })),
}))

vi.mock("@/lib/spotifyAPI.ts", () => ({
    getArtists: vi.fn(),
}))

describe("Search Bar", () => {
    it("updates the search value when typing", () => {
        render(<Search />)
        const input = screen.getByTestId("search");
        fireEvent.change(input, { target: { value: "Test Artist" } });
        expect(input).toHaveValue("Test Artist");
    });
    it("should render results when user has typed in a search term", () => {
        render(<Search />)
        expect(screen.queryByTestId("results")).toBeFalsy();
        fireEvent.change(screen.getByTestId("search"), { target: {value: 'test'}})
        expect(screen.queryByTestId("results")).toBeDefined();
    });
    it("calls useQuery with debounced search value", async () => {
        render(<Search />)
        const input = screen.getByTestId("search");
        fireEvent.change(input, { target: { value: "Test Artist" } });
        await waitFor(() => {
            expect(useQuery).toHaveBeenCalledWith(
                expect.objectContaining({
                    queryKey: ["artists", "Test Artist"],
                })
            );
        });
    });
});