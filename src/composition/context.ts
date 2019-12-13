import * as React from 'react'
import { MtgCardsApi, MtgCardsApiImpl } from '../test-page/api/fetch-mtg-cards'

export interface AppContext {
    mtgCards: MtgCardsApi
}
export interface AppContextProps {
    context: AppContext
}
export const productionContext: AppContext = {
    mtgCards: new MtgCardsApiImpl(),
}
export const AppContext: React.Context<AppContext> = React.createContext(productionContext)
