import { clsx } from 'clsx'
import { useState } from 'react'
import TreeGridCell from '../TreeGridCell'
import type { Column } from '../types'
import classes from './TreeGridRow.module.css'

interface Props<TData> {
    columns: Column<TData>[]
    data: TData
}

export default function TreeGridRow<TData>({ columns, data }: Props<TData>) {
    const [isHover, setIsHover] = useState(false)
    function handlePointerOver() {
        setIsHover(true)
    }
    function handlePointerLeave() {
        setIsHover(false)
    }
    const hoverClassName = clsx(isHover && classes.hover)
    return (
        <tr
            onPointerOver={handlePointerOver}
            onPointerLeave={handlePointerLeave}
            className={classes.row}
        >
            {columns.map(({ key, render }) => (
                <TreeGridCell type="data" key={key} className={hoverClassName}>
                    {render ? render(data, [isHover, setIsHover]) : data[key]}
                </TreeGridCell>
            ))}
        </tr>
    )
}
