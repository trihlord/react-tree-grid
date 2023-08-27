import TreeGridRow from '../TreeGridRow'
import type { Column } from '../types'

interface Props<TData> {
    columns: Column<TData>[]
    data: TData[]
}

export default function TreeGridBody<TData>({ columns, data }: Props<TData>) {
    return (
        <tbody>
            {data.map((data) => (
                <TreeGridRow columns={columns} data={data} />
            ))}
        </tbody>
    )
}
