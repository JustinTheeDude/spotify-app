import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './index';

vi.mock('@/components/Search', () => ({
  default: () => <div data-testid="search-component">Search Component</div>,
}));

vi.mock('@/components/FavoritesList', () => ({
  default: () => <div data-testid="favorites-list">Favorites List</div>,
}));

vi.mock('next/image', () => ({
  default: (props) => <img {...props} />,
}));

describe('Home Component', () => {
  it('renders the component correctly', () => {
    render(<Home />);
    
    expect(screen.getByText('Music Search')).toBeDefined();
    expect(screen.getByText('My Favorite Artists')).toBeDefined();
    expect(screen.getByTestId("search-component")).toBeDefined();
    expect(screen.getByTestId("favorites-list")).toBeDefined();
  }); 
});