import { AppContext } from '../src/composition/context'
import { BookApi } from '../src/test-page/api/fetch-book-info'

export function mockedContext(): AppContext {
    return {
        books: mockedBooks(),
    }
}

export function mockedBooks(): BookApi {
    return {
        fetchBookInfo: jest.fn(),
    }
}
