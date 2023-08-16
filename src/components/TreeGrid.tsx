import { clsx } from 'clsx'
import { Key, ReactNode } from 'react'
import classes from './TreeGrid.module.css'

interface Column<TData> {
    key: Key
    header: ReactNode
    renderData(data: TData): ReactNode
}

interface HeadProps<TData> {
    columns: Column<TData>[]
    className?: string
}

function Head<TData>({ columns, className }: HeadProps<TData>) {
    return (
        <div role="row" className={clsx(classes.contents, className)}>
            {columns.map(({ header, key }) => (
                <div role="columnheader" key={key}>
                    {header}
                </div>
            ))}
        </div>
    )
}

interface BodyProps<TData> {
    columns: Column<TData>[]
    datas: TData[]
    getKey(data: TData): Key
    getClassName?: (data: TData) => string
}

function Body<TData>({ columns, datas, getKey, getClassName }: BodyProps<TData>) {
    return (
        <>
            {datas.map((data) => (
                <div
                    role="row"
                    className={clsx(classes.contents, getClassName?.(data))}
                    key={getKey(data)}
                >
                    {columns.map(({ key, renderData }) => (
                        <div role="gridcell" key={key}>
                            {renderData(data)}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

interface EmptyProps {
    children?: ReactNode
}

function Empty({ children }: EmptyProps) {
    return (
        <div role="row" className={classes.contents}>
            <div role="gridcell" className={classes.colSpanFull}>
                {children}
            </div>
        </div>
    )
}

const REPEAT_COUNT = '--repeat-count'

interface TreeGridProps<TData> extends HeadProps<TData>, BodyProps<TData>, EmptyProps {
    headClassName?: string
}

function TreeGrid<TData>({
    columns,
    datas,
    children,
    className,
    headClassName,
    getKey,
    getClassName,
}: TreeGridProps<TData>) {
    return (
        <div
            role="treegrid"
            className={clsx(classes.grid, className)}
            style={{ [REPEAT_COUNT]: columns.length }}
        >
            <Head columns={columns} className={headClassName} />
            {Array.isArray(datas) && datas.length > 0 ? (
                <Body columns={columns} datas={datas} getKey={getKey} getClassName={getClassName} />
            ) : (
                <Empty>{children}</Empty>
            )}
        </div>
    )
}

export default TreeGrid
export {}

declare module 'csstype' {
    interface Properties {
        [REPEAT_COUNT]: number
    }
}
