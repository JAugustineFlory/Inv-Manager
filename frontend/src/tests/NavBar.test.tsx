// Dependencies
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// File being tested
import NavBar from '../components/NavBar.tsx';

afterEach(cleanup);

function renderNavBar() {

  const user = {
    id: 1,
    name: 'test User',
  }

  return render(
    <MemoryRouter>
      <NavBar user={user} />
    </MemoryRouter>
  );
}

describe('NavBar', () => {
  it('Shows Logo', () => {
    renderNavBar();

    expect(
      screen.getByRole('heading', { name: 'Inv-Manager' }), 
    ).toBeTruthy();
  });

  it('Nav content displays (Profile Image & Nav links)', () => {
    renderNavBar();
    // screen.debug();

    expect(
      screen.getByRole('img', { name: 'profile icon' }),
    ).toBeTruthy();

    expect(
      screen.getByRole('link', {name: 'My Inventory' }),
    ).toBeTruthy();

    const globalItemsLink = screen.getByRole('link', {
      name: 'All Inventories',
    });
    expect(globalItemsLink.getAttribute('href')).toBe('/AllInventories');
  });
});