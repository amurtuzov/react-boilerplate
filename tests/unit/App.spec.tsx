import { screen } from '@testing-library/react'
import App from '@/App/App.tsx'
import { renderWithProviders } from '../utils.tsx'

describe('App', () => {
  it('Should render root component correctly', async () => {
    renderWithProviders(<App />, {
      preloadedState: { main: { windowWidth: 768 } },
    })
    const h1 = await screen.queryByText('Vite + React TS')
    expect(h1).not.toBeNull()
  })
})
