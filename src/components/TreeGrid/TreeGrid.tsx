import type { ReactNode } from 'react'
import TreeGridBody from '../TreeGridBody'
import TreeGridColgroup from '../TreeGridColgroup'
import TreeGridEmpty from '../TreeGridEmpty'
import TreeGridHead from '../TreeGridHead'
import type { Column } from '../types'
import classes from './TreeGrid.module.css'

interface Props<TData> {
    columns: Column<TData>[]
    data: TData[] | null | undefined
    children?: ReactNode
    headHidden?: boolean
    onRowClick?(data: TData): void
}

export default function TreeGrid<TData>({
    columns,
    data,
    children,
    headHidden,
    onRowClick,
}: Props<TData>) {
    const hasData = Array.isArray(data) && data.length > 0
    return (
        <table className={classes.table}>
            <TreeGridColgroup columns={columns} />
            <TreeGridHead columns={columns} hidden={headHidden} />
            {hasData ? (
                <TreeGridBody columns={columns} data={data} onRowClick={onRowClick} />
            ) : (
                <TreeGridEmpty>{children}</TreeGridEmpty>
            )}
        </table>
    )
}
