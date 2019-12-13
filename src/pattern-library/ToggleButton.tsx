import * as React from 'react'
import { Props } from '../react-typings'

export interface ToggleButtonProps<T extends string = string> {
    id: string
    values: T[]
    changed: (newValue: T) => void
    currentValue?: T
}

function createInput<T extends string = string>(id: string, value: T, props: ToggleButtonProps<T>): JSX.Element {
    return (
        <input
            type="radio"
            name="radio-group"
            id={id}
            key={`input_${id}`}
            onChange={() => props.changed(value)}
            checked={props.currentValue === value}
        />
    )
}

function createLabel(id: string, value: string): JSX.Element {
    return (
        <label key={`label_${id}`} htmlFor={id}>
            {value}
        </label>
    )
}

export default <T extends string = string>(props: Props<ToggleButtonProps<T>>) => {
    const toggles: JSX.Element[] = []
    props.values.forEach((value, index) => {
        const id = `${props.id}${index}`
        const input = createInput(id, value, props)
        const label = createLabel(id, value)
        // we have to render inputs and labels alternating without a div wrapper. Jsx does not allow this directly,
        // so we collect them in an array.
        toggles.push(input, label)
    })
    return <div>{toggles}</div>
}
