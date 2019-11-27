import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { fetchedBookInfo } from './state/actions'

import Content from '../pattern-library/Content'
import { RootState, extractTestPage } from '../composition/store'
import { TestPageState } from './state'
import { AsyncReader } from '../async-reader'
import { AppContext, AppContextProps } from '../composition/context'

export interface FirstTestContentProps {
    load: (isb: string) => AsyncReader<AppContext, void>
    bookInfo: string | undefined
}

export const mapStateToProps = (state: TestPageState) => ({
    bookInfo: state.bookInfo,
})

export const dispatchToProps = (dispatch: Dispatch) => ({
    load: (isbn: string) => {
        return async (context: AppContext) => {
            const info = await context.books.fetchBookInfo(isbn)
            dispatch(fetchedBookInfo(info))
        }
    },
})

export class Component extends React.Component<FirstTestContentProps & AppContextProps> {
    public componentDidMount() {
        const harryPotter = '0747532699'
        this.props.load(harryPotter)(this.props.context)
    }

    public render() {
        return <Content>{this.props.bookInfo}</Content>
    }
}

export const componentWithContext = (props: FirstTestContentProps) => {
    return <AppContext.Consumer>{context => <Component context={context} {...props}></Component>}</AppContext.Consumer>
}

export default connect(
    (state: RootState) => mapStateToProps(extractTestPage(state)),
    (dispatch: Dispatch) => dispatchToProps(dispatch)
)(componentWithContext)
