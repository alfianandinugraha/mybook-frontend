import React from 'react'
import { HashRouter } from 'react-router-dom'

interface BootstrapProps {
  children: React.ReactNode
}

const Bootstrap = ({ children }: BootstrapProps): JSX.Element => (
  <HashRouter>{children}</HashRouter>
)

export default Bootstrap
