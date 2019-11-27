import fetch from 'cross-fetch'

export interface BookInfo {
    pageCount: number
    description: string
}

export interface BookApi {
    fetchBookInfo(isbn: string): Promise<BookInfo | undefined>
}

export class BookApiImpl implements BookApi {
    public constructor(private readonly call: typeof fetch = fetch) {}

    public async fetchBookInfo(isbn: string): Promise<BookInfo | undefined> {
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        const response = await this.call(url)
        const body = await response.json()
        if (body.items[0] !== undefined) {
            return body.items[0].volumeInfo
        }
        return undefined
    }
}
