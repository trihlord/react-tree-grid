import classes from './TreeGrid.module.css'

function TreeGrid() {
    return (
        <div className={classes.container}>
            <div role="treegrid" className={classes.treeGrid}>
                <div role="rowgroup" className={classes.rowGroup}>
                    <div role="row" className={classes.row}>
                        <div
                            role="columnheader"
                            className={classes.columnHeader}
                        >
                            Country
                        </div>
                        <div
                            role="columnheader"
                            className={classes.columnHeader}
                        >
                            Post Code
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TreeGrid
