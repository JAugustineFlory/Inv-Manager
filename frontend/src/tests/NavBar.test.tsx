// Dependencies-----------------------------
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// File being tested
import NavBar from '../components/NavBar.tsx';

afterEach(cleanup);

// Helper Functions -------------------------
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

function renderNotSignedInNavBar() {

  return render(
    <MemoryRouter>
      <NavBar user={null} />
    </MemoryRouter>
  )
}


// Tests ---------------------------
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

describe('Not Signed in NavBar', () => {
  it('If not logged in, Display log in', () => {
    renderNotSignedInNavBar();
    screen.debug();

    expect(
      screen.getByText('Log in'),
    ).toBeTruthy();
  });
});