import TreeGridCell from '../TreeGridCell'
import type { Column } from '../types'

interface Props<TData> {
    columns: Column<TData>[]
    hidden?: boolean
}

export default function TreeGridHead<TData>({ columns, hidden }: Props<TData>) {
    return (
        <thead hidden={hidden}>
            <tr>
                {columns.map(({ header }) => (
                    <TreeGridCell type="header">{header}</TreeGridCell>
                ))}
            </tr>
        </thead>
    )
}
