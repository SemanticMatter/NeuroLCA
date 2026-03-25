import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the landing screen by default', () => {
    render(<App />);

    expect(screen.getByText('Neurosymbolic AI for Life Cycle Assessment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start interactive demo/i })).toBeInTheDocument();
  });

  it('moves from the landing page to the scenario builder and dashboard flow', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /start interactive demo/i }));
    expect(screen.getByRole('heading', { name: /define product system/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /generate lca model/i }));
    expect(screen.getByRole('heading', { name: /lifecycle model: electric bicycle/i })).toBeInTheDocument();
    expect(screen.getByText('Generated from natural language and validated against constraints.')).toBeInTheDocument();
  });

  it('switches between dashboard and executive summary views', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /start interactive demo/i }));
    await user.click(screen.getByRole('button', { name: /generate lca model/i }));

    await user.click(screen.getByRole('button', { name: /graphrag trace/i }));
    expect(screen.getByRole('heading', { name: /graphrag retrieval trace/i })).toBeInTheDocument();
    expect(screen.getByText('Explainable path from natural language to candidate graph concepts.')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /executive summary/i }));
    expect(screen.getByRole('heading', { name: /neurosymbolic ai for lca/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /the problem/i })).toBeInTheDocument();
  });
});
