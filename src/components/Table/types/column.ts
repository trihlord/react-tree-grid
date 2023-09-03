import type { CSSProperties, Dispatch, Key, ReactNode, SetStateAction } from 'react'

type Width = CSSProperties['width']

type VisibleState = [boolean, Dispatch<SetStateAction<boolean>>]

export interface Column<T> {
    key: Key
    width: Width
    header?: ReactNode
    render?(data: T, visibleState: VisibleState): ReactNode
}
