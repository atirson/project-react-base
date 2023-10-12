import React from 'react'
import { QueryClientProvider } from '../config/config-react-query.services'

interface Props {
  components: Array<
    React.JSXElementConstructor<React.PropsWithChildren<unknown>>
  >
  children: React.ReactNode
}

interface AppProvidersProps {
  children: React.ReactNode
}

const providers = [QueryClientProvider] as Array<
  React.JSXElementConstructor<React.PropsWithChildren<unknown>>
>

export const Compose = (props: Props) => {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight(
        (childrenElementsByProviders, ComponentProviders) => {
          return (
            <ComponentProviders>
              {childrenElementsByProviders}
            </ComponentProviders>
          )
        },
        children,
      )}
    </>
  )
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <Compose components={providers}>{children}</Compose>
}
