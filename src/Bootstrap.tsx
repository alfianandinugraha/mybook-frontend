import React from 'react'

interface BootstrapProps {
  children: React.ReactNode
}

const Bootstrap = ({ children }: BootstrapProps): JSX.Element => (
  <div>{children}</div>
)

export default Bootstrap
