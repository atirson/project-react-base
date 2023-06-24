import { render } from '@testing-library/react'
import { Home } from './Home'

describe('App', () => {
  it('should pass', () => {
    render(<Home />)

    expect(1).toEqual(1)
  })
})
