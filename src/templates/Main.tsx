import React, { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = ({ meta, children }: IMainProps) => (
  <div>
    {meta}
    {children}
  </div>
)

export { Main }
