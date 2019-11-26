import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Props } from '../react-typings'

import { popItem, pushItem } from './state/actions'

import Content from '../pattern-library/Content'
import Button from '../pattern-library/Button'
import Icon from '../pattern-library/Icon'
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
    push: (name: SelectableValue) => dispatch(pushItem(name)),
    pop: () => dispatch(popItem()),
})

export const component = (props: Props<FirstTestContentProps>) => {
    return (
        <Content>
            <Button type="primary" clicked={props.pop}>
                delete last item <Icon type="trash" />
            </Button>
            <Divider />
            last selection: {props.lastSelection || 'nothing selected yet'}
            <ToggleButton
                id="valueToggle"
                values={['first value', 'second value', 'another value']}
                changed={props.push}
                currentValue={props.lastSelection}
            ></ToggleButton>
        </Content>
    )
}

export default connect(
    (state: RootState) => mapStateToProps(extractTestPage(state)),
    dispatch => dispatchToProps(dispatch)
)(component)
