import { Key, ReactNode } from 'react'
import classes from './TreeGrid.module.css'

interface Column {
    id: Key
    header: ReactNode
}

interface TreeGridProps {
    columns: Column[]
}

function TreeGrid({ columns }: TreeGridProps) {
    return (
        <div className={classes.container}>
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
            </div>
        </div>
    )
}

export default TreeGrid
