import { clsx } from 'clsx'
import { useState } from 'react'
import type { Column } from '../../types'
import Cell from '../Cell'
import classes from './Row.module.css'

interface RowProps<T> {
    columns: Column<T>[]
    data: T
}

export default function Row<T>({ columns, data }: RowProps<T>) {
    const [isHover, setIsHover] = useState(false)
    function handlePointerEnter() {
        setIsHover(true)
    }
    function handlePointerLeave() {
        setIsHover(false)
    }
    const cellClassName = clsx(isHover && classes.hover)
    const [isFocus, setIsFocus] = useState(false)
    const isVisible = isHover || isFocus
    return (
        <tr
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className={classes.row}
        >
            {columns.map(({ key, render }) => (
                <Cell type="data" className={cellClassName} key={key}>
                    {render?.(data, [isVisible, setIsFocus])}
                </Cell>
            ))}
        </tr>
    )
}
