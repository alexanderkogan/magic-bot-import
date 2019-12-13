import { Card, Cards } from 'scryfall-sdk'

export interface MtgCardsApi {
    fetchMtgCards(setKeyword: string): Promise<Card[] | undefined>
}

export class MtgCardsApiImpl implements MtgCardsApi {
    public constructor(private readonly cards: typeof Cards = Cards) {}

    public async fetchMtgCards(setKeyword?: string): Promise<Card[] | undefined> {
        const fetchedCards: Card[] = []
        return this.cards
            .search(`set:${setKeyword}`)
            .on('data', card => {
                fetchedCards.push(card)
            })
            .on('end', () => {
                return fetchedCards
            })
            .waitForAll()
    }
}
