import { shallow as renderShallow, mount as render, ReactWrapper, ShallowWrapper } from 'enzyme'
import { Dispatch } from 'redux'
import { Action } from '../src/composition/model/action'

export function shallow(element: JSX.Element): ShallowWrapper {
    return renderShallow(element)
}

export function mount(element: JSX.Element): ReactWrapper {
    return render(element)
}

export function dispatchedAction(f: (dispatcher: Dispatch) => void): Action {
    const dispatcher = jest.fn()
    f(dispatcher)
    return dispatcher.mock.calls[0][0]
}
