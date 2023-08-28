import { clsx } from 'clsx'
import { useState } from 'react'
import TreeGridCell from '../TreeGridCell'
import type { Column } from '../types'
import classes from './TreeGridRow.module.css'

interface Props<TData> {
    columns: Column<TData>[]
    data: TData
    onClick?(data: TData): void
}

export default function TreeGridRow<TData>({ columns, data, onClick }: Props<TData>) {
    const hoverState = useState(false)
    const [isHover, setIsHover] = hoverState
    const hoverClassName = clsx(isHover && classes.hover)
    function handlePointerOver() {
        setIsHover(true)
    }
    function handlePointerLeave() {
        setIsHover(false)
    }
    function handleClick() {
        onClick?.(data)
    }
    return (
        <tr
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerLeave={handlePointerLeave}
            className={clsx(classes.row, onClick && classes.pointer)}
        >
            {columns.map(({ key, render }) => (
                <TreeGridCell type="data" key={key} className={hoverClassName}>
                    {render ? render(data, hoverState) : data[key]}
                </TreeGridCell>
            ))}
        </tr>
    )
}
