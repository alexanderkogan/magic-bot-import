import { AppContext } from '../src/composition/context'
import { MtgCardsApi } from '../src/test-page/api/fetch-mtg-cards'
import { Card } from 'scryfall-sdk'

export function mockedContext(): AppContext {
    return {
        mtgCards: mockedMtgCards(),
    }
}

export function mockedMtgCards(): MtgCardsApi {
    return {
        fetchMtgCards: jest.fn(),
    }
}

export function mockedCards(): Card[] {
    return [
        {
            object: 'card',
            id: 'fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e',
            oracle_id: '35df179a-c0e6-4ac1-a861-e6e9b4d1614d',
            multiverse_ids: [472963],
            mtgo_id: 78088,
            arena_id: 70148,
            tcgplayer_id: 199292,
            name: 'Acclaimed Contender',
            lang: 'en',
            released_at: '2019-10-04',
            uri: 'https://api.scryfall.com/cards/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e',
            scryfall_uri: 'https://scryfall.com/card/eld/1/acclaimed-contender?utm_source=api',
            layout: 'normal',
            highres_image: true,
            image_uris: {
                small: 'https://img.scryfall.com/cards/small/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
                normal: 'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
                large: 'https://img.scryfall.com/cards/large/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
                png: 'https://img.scryfall.com/cards/png/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.png?1572489601',
                art_crop: 'https://img.scryfall.com/cards/art_crop/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
                border_crop: 'https://img.scryfall.com/cards/border_crop/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
            },
            mana_cost: '{2}{W}',
            cmc: 3,
            type_line: 'Creature — Human Knight',
            oracle_text:
                'When Acclaimed Contender enters the battlefield, if you control another Knight, look at the top five cards of your library. You may reveal a Knight, Aura, Equipment, or legendary artifact card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.',
            power: '3',
            toughness: '3',
            colors: ['W'],
            color_identity: ['W'],
            legalities: {
                standard: 'legal',
                future: 'legal',
                modern: 'legal',
                legacy: 'legal',
                pauper: 'not_legal',
                vintage: 'legal',
                penny: 'legal',
                commander: 'legal',
                brawl: 'legal',
                duel: 'legal',
                '1v1': 'legal',
                frontier: 'legal',
            },
            games: ['arena', 'mtgo', 'paper'],
            reserved: false,
            foil: true,
            nonfoil: true,
            oversized: false,
            promo: false,
            reprint: false,
            set: 'eld',
            set_name: 'Throne of Eldraine',
            set_uri: 'https://api.scryfall.com/sets/a90a7b2f-9dd8-4fc7-9f7d-8ea2797ec782',
            set_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aeld&unique=prints',
            scryfall_set_uri: 'https://scryfall.com/sets/eld?utm_source=api',
            rulings_uri: 'https://api.scryfall.com/cards/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e/rulings',
            prints_search_uri:
                'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A35df179a-c0e6-4ac1-a861-e6e9b4d1614d&unique=prints',
            collector_number: '1',
            digital: false,
            rarity: 'rare',
            artist: 'David Gaillet',
            illustration_id: '390caef4-f3d2-4183-bee3-dc95188cea79',
            border_color: 'black',
            frame: 2015,
            frame_effect: 'colorshifted',
            full_art: false,
            story_spotlight: false,
            edhrec_rank: 6237,
            prices: { usd: '0.31', usd_foil: '0.56', eur: '0.27', tix: '0.01' },
            related_uris: {
                gatherer: 'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=472963',
                tcgplayer_decks:
                    'https://decks.tcgplayer.com/magic/deck/search?contains=Acclaimed+Contender&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
                edhrec: 'https://edhrec.com/route/?cc=Acclaimed+Contender',
                mtgtop8: 'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Acclaimed+Contender',
            },
            purchase_uris: {
                tcgplayer:
                    'https://shop.tcgplayer.com/product/productsearch?id=199292&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
                cardmarket:
                    'https://www.cardmarket.com/en/Magic/Products/Singles/Throne-of-Eldraine/Acclaimed-Contender?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
                cardhoarder:
                    'https://www.cardhoarder.com/cards/78088?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
            },
        },
    ]
}
