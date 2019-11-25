import * as React from 'react'

// see: https://pattern-library.portal.otto.market/fragments#icons
export type IconType =
    | 'arrowleft'
    | 'arrowright-bold'
    | 'calendar'
    | 'check-bold'
    | 'info'
    | 'menu'
    | 'minus-bold'
    | 'plus-bold'
    | 'search'
    | 'upload'
    | 'trash'
    | 'close'
    | 'settings'
    | 'circle'
    | 'help'
    | 'success'
    | 'arrowdown'
    | 'arrowleft-bold'
    | 'arrowup'
    | 'error'
    | 'viewtoggle-list'
    | 'tooltip'
    | 'close-bold'
    | 'plus'
    | 'edit'
    | 'check'
    | 'warning'
    | 'arrowdown-bold'
    | 'arrowright'
    | 'arrowup-bold'
    | 'download'
    | 'viewtoggle-tiles'

export interface IconProps {
    type: IconType
}

export default (props: IconProps) => <i className={`obc_icon-${props.type}`}></i>
