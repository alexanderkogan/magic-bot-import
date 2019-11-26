import { shallow as renderShallow, mount as render, ReactWrapper, ShallowWrapper } from 'enzyme'
import { Dispatch } from 'redux'
import { Action } from '../src/composition/model/action'

export function shallow(element: JSX.Element): ShallowWrapper {
    return renderShallow(element)
}

export function mount(element: JSX.Element): ReactWrapper {
    return render(element)
}

export function mockReturnValue<T>(o: object, value: T): void {
    ;(o as jest.Mock).mockReturnValue(value)
}

export function mockReturnValues<T>(o: object, ...values: T[]): void {
    const mock = o as jest.Mock
    for (const value of values) {
        mock.mockReturnValueOnce(value)
    }
}
