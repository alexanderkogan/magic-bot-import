import * as React from 'react'
import { BookApi, BookApiImpl } from '../test-page/api/fetch-book-info'

export interface AppContext {
    books: BookApi
}
export interface AppContextProps {
    context: AppContext
}
export const productionContext: AppContext = {
    books: new BookApiImpl(),
}
export const AppContext: React.Context<AppContext> = React.createContext(productionContext)
