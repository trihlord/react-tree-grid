import type { CSSProperties, Dispatch, Key, ReactNode, SetStateAction } from 'react'

type Width = CSSProperties['width']

type HoverState = [boolean, Dispatch<SetStateAction<boolean>>]

export interface Column<TData> {
    key: Key
    width?: Width
    header?: ReactNode
    render?(data: TData, state: HoverState): ReactNode
}
