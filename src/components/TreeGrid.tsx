import { Key, ReactNode } from 'react'
import classes from './TreeGrid.module.css'

const REPEAT_COUNT = '--repeat-count'

interface Column {
    id: Key
    header: ReactNode
}

interface TreeGridProps {
    columns: Column[]
    dataArray?: [] | null | undefined
    children?: ReactNode
}

function TreeGrid({ columns, dataArray, children }: TreeGridProps) {
    return (
        <div
            className={classes.container}
            style={{ [REPEAT_COUNT]: columns.length }}
        >
            <div role="treegrid" className={classes.treeGrid}>
                <div role="rowgroup" className={classes.rowGroup}>
                    <div role="row" className={classes.row}>
                        {columns.map(({ id, header }) => (
                            <div
                                role="columnheader"
                                className={classes.columnHeader}
                                key={id}
                            >
                                {header}
                            </div>
                        ))}
                    </div>
                </div>
                {Array.isArray(dataArray) && dataArray.length > 0 ? null : (
                    <div role="row" className={classes.row}>
                        <div
                            role="gridcell"
                            className={classes.gridCellSpanFull}
                        >
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TreeGrid

declare module 'csstype' {
    interface Properties {
        [REPEAT_COUNT]: number
    }
}
