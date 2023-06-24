import { App } from '../App'
import { render } from './setupTests'

describe('App', () => {
  it('should pass', () => {
    render(<App />)

    expect(true).toBe(true)
  })
})
