import { fireEvent, render, screen } from '@testing-library/react-native';

import { Counter } from '@/components/Counter';
import { Screen } from '@/components/Screen';

describe('Screen', () => {
  it('renders the title as a header', () => {
    render(<Screen title="Hello" />);

    expect(screen.getByRole('header', { name: 'Hello' })).toBeTruthy();
  });

  it('renders the subtitle when provided', () => {
    render(<Screen title="Hello" subtitle="World" />);

    expect(screen.getByText('World')).toBeTruthy();
  });

  it('omits the subtitle when not provided', () => {
    render(<Screen title="Hello" />);

    expect(screen.queryByText('World')).toBeNull();
  });
});

describe('Counter', () => {
  it('starts at zero by default', () => {
    render(<Counter />);

    expect(screen.getByText('count is 0')).toBeTruthy();
  });

  it('respects the initial value', () => {
    render(<Counter initial={5} />);

    expect(screen.getByText('count is 5')).toBeTruthy();
  });

  it('increments when pressed', () => {
    render(<Counter />);

    fireEvent.press(screen.getByRole('button'));

    expect(screen.getByText('count is 1')).toBeTruthy();
  });
});
