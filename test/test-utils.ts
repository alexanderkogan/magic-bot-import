import { shallow as renderShallow, mount as render, ReactWrapper, ShallowWrapper } from 'enzyme'

export function shallow(element: JSX.Element): ShallowWrapper {
    return renderShallow(element)
}

export function mount(element: JSX.Element): ReactWrapper {
    return render(element)
}
