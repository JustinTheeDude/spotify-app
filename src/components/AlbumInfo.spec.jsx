import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AlbumInfo from './AlbumInfo';

vi.mock('next/image', () => ({
  default: (props) => <img {...props} />,
}));

describe("Album Info", () => {
    it("should render the album info with the correct props", () => {
        render(<AlbumInfo 
                releaseDate="10-10-2022"
                totalTracks={20}
            />) 
        expect(screen.getByTestId("release-date").textContent).toBe("Release Date: 10-10-2022")
        expect(screen.getByTestId("total-tracks").textContent).toBe( "Total Tracks: 20")
    });
})