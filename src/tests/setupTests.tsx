import '@testing-library/jest-dom'

import { render as renderLibrary, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

const ComponentsToRender = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => renderLibrary(ui, { wrapper: ComponentsToRender, ...options })

export * from '@testing-library/react'
