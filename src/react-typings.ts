import { ReactNode } from 'react'

export type Props<P = {}> = Readonly<P> & Readonly<{ children?: ReactNode }>
