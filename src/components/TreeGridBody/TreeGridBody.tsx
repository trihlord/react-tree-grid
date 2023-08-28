import TreeGridRow from '../TreeGridRow'
import type { Column } from '../types'

interface Props<TData> {
    columns: Column<TData>[]
    data: TData[]
    onRowClick?(data: TData): void
}

export default function TreeGridBody<TData>({ columns, data, onRowClick }: Props<TData>) {
    return (
        <tbody>
            {data.map((data) => (
                <TreeGridRow columns={columns} data={data} onClick={onRowClick} />
            ))}
        </tbody>
    )
}
