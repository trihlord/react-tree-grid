import type { ReactNode } from 'react'
import classes from './Table.module.css'
import Cell from './components/Cell'
import Row from './components/Row'
import type { Column, Data, DataKey, GetDataKey } from './types'

interface TableProps<T> {
    columns: Column<T>[]
    data: Data<T>
    dataKey: DataKey<T> | GetDataKey<T>
    isHeadHidden?: boolean
    emptyChildren?: ReactNode
}

export default function Table<T extends object>({
    columns,
    data,
    dataKey,
    isHeadHidden,
    emptyChildren,
}: TableProps<T>) {
    const isSomeDataPresent = Array.isArray(data) && data.length > 0
    const getDataKey = typeof dataKey === 'function' ? dataKey : (data: T) => data[dataKey]
    return (
        <table className={classes.table}>
            <colgroup>
                {columns.map(({ key, width }) => (
                    <col key={key} style={{ width }} />
                ))}
            </colgroup>
            <thead hidden={isHeadHidden}>
                <tr>
                    {columns.map(({ key, header }) => (
                        <Cell type="header" key={key}>
                            {header}
                        </Cell>
                    ))}
                </tr>
            </thead>
            <tbody>
                {isSomeDataPresent ? (
                    data.map((datum) => (
                        <Row columns={columns} data={datum} key={getDataKey(datum)} />
                    ))
                ) : (
                    <tr>
                        <Cell type="data" columnSpan="full">
                            {emptyChildren}
                        </Cell>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
