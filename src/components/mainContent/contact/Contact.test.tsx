import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
    it('renders without crashing', () => {
        render(<Contact />);
        screen.debug(); // Optional: Inspect the rendered output
        expect(screen.getAllByRole('textbox')).toHaveLength(4); // Check for 4 text inputs
    });
});
