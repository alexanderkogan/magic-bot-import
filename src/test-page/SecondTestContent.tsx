import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import * as BookInfoActions from './actions/book-info-actions'

import Content from '../pattern-library/Content'
import { RootState, extractTestPage } from '../composition/store'
import { TestPageState } from './state'
import { AsyncReader } from '../async-reader'
import { AppContext, AppContextProps } from '../composition/context'
import { Fetchable } from '../composition/model/fetchable'

export interface SecondTestContentProps {
    load: (isb: string) => AsyncReader<AppContext, void>
    bookInfo: Fetchable<string>
}

export const mapStateToProps = (state: TestPageState) => {
    return { bookInfo: state.bookInfo }
}

export const dispatchToProps = (dispatch: Dispatch) => ({
    load: (isbn: string) => async (context: AppContext) => {
        dispatch(BookInfoActions.fetching())
        try {
            const info = await context.books.fetchBookInfo(isbn)
            if (info !== undefined) {
                dispatch(BookInfoActions.fetched(info.description))
            }
        } catch (e) {
            dispatch(BookInfoActions.failed(e))
        }
    },
})

export class Component extends React.Component<SecondTestContentProps & AppContextProps> {
    public componentDidMount() {
        const harryPotter = '0747532699'
        this.props.load(harryPotter)(this.props.context)
    }

    public render() {
        return <Content>{JSON.stringify(this.props.bookInfo)}</Content>
    }
}

export const componentWithContext = (props: SecondTestContentProps) => {
    return <AppContext.Consumer>{context => <Component context={context} {...props}></Component>}</AppContext.Consumer>
}

export default connect(
    (state: RootState) => mapStateToProps(extractTestPage(state)),
    (dispatch: Dispatch) => dispatchToProps(dispatch)
)(componentWithContext)
