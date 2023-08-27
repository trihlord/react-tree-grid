import type { Column } from '../types'

interface Props<TData> {
    columns: Column<TData>[]
}

export default function TreeGridColgroup<TData>({ columns }: Props<TData>) {
    return (
        <colgroup>
            {columns.map(({ key, width }) => (
                <col key={key} style={{ width }} />
            ))}
        </colgroup>
    )
}
