import React from 'react'
import { render, cleanup, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact Form is rendering', () => {
    it('renders', () => {
        render(<Contact></Contact>)
    });
    it('renders', () => {
        const { getByTestId } = render(<Contact></Contact>)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
      });
})