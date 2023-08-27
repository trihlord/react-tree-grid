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
}

export default function TreeGrid<TData>({ columns, data, children, headHidden }: Props<TData>) {
    const dataPresent = Array.isArray(data) && data.length > 0
    return (
        <table className={classes.table}>
            <TreeGridColgroup columns={columns} />
            <TreeGridHead columns={columns} hidden={headHidden} />
            {dataPresent ? (
                <TreeGridBody columns={columns} data={data} />
            ) : (
                <TreeGridEmpty>{children}</TreeGridEmpty>
            )}
        </table>
    )
}
