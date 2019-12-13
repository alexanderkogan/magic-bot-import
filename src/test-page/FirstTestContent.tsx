import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Props } from '../react-typings'

import * as TestItemActions from './actions/test-item-actions'

import Content from '../pattern-library/Content'
import Button from '../pattern-library/Button'
import Divider from '../pattern-library/Divider'
import ToggleButton from '../pattern-library/ToggleButton'
import { RootState, extractTestPage } from '../composition/store'
import { TestPageState, SelectableValue } from './state'

export interface FirstTestContentProps {
    push: (name: SelectableValue) => {}
    pop: () => {}
    selections: number
    lastSelection: SelectableValue | undefined
}

export const mapStateToProps = (state: TestPageState) => ({
    selections: state.valuesSelected.length,
    lastSelection: state.valuesSelected[state.valuesSelected.length - 1],
})

export const dispatchToProps = (dispatch: Dispatch) => ({
    push: (name: SelectableValue) => dispatch(TestItemActions.push(name)),
    pop: () => dispatch(TestItemActions.pop()),
})

export const component = (props: Props<FirstTestContentProps>) => {
    return (
        <Content>
            <Button clicked={props.pop}>delete last item 🗑️</Button>
            <Divider />
            items selected: {props.selections}
            <br />
            last selection: {props.lastSelection || 'nothing selected yet'}
            <ToggleButton
                id="valueToggle"
                values={['first value', 'second value', 'another value']}
                changed={props.push}
                currentValue={props.lastSelection}
            />
        </Content>
    )
}

export default connect(
    (state: RootState) => mapStateToProps(extractTestPage(state)),
    dispatch => dispatchToProps(dispatch)
)(component)
