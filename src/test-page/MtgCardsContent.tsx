import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Content from '../pattern-library/Content'
import { RootState, extractTestPage } from '../composition/store'
import { TestPageState } from './state'
import { AsyncReader } from '../async-reader'
import { AppContext, AppContextProps } from '../composition/context'
import { Fetchable } from '../composition/model/fetchable'
import { Card } from 'scryfall-sdk'
import * as MtgCardsActions from './actions/mtg-cards-actions'

export interface MtgCardsContentProps {
    load: (isb: string) => AsyncReader<AppContext, void>
    cardsInfo: Fetchable<Card[]>
}

export const mapStateToProps = (state: TestPageState) => {
    return { cardsInfo: state.cardsInfo }
}

export const dispatchToProps = (dispatch: Dispatch) => ({
    load: (setKeyword: string) => async (context: AppContext) => {
        dispatch(MtgCardsActions.fetching())
        try {
            const info = await context.mtgCards.fetchMtgCards(setKeyword)
            if (info !== undefined) {
                dispatch(MtgCardsActions.fetched(info))
            }
        } catch (e) {
            dispatch(MtgCardsActions.failed(e))
        }
    },
})

export class Component extends React.Component<MtgCardsContentProps & AppContextProps> {
    public componentDidMount() {
        const throneOfEldraineSetKeyword = 'ELD'
        this.props.load(throneOfEldraineSetKeyword)(this.props.context)
    }

    public render() {
        return <Content>{JSON.stringify(this.props.cardsInfo)}</Content>
    }
}

export const componentWithContext = (props: MtgCardsContentProps) => {
    return <AppContext.Consumer>{context => <Component context={context} {...props}></Component>}</AppContext.Consumer>
}

export default connect(
    (state: RootState) => mapStateToProps(extractTestPage(state)),
    (dispatch: Dispatch) => dispatchToProps(dispatch)
)(componentWithContext)
