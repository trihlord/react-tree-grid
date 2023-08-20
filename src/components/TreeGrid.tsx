import { clsx } from 'clsx'
import { Dispatch, SetStateAction, createContext, useState, type Key, type ReactNode } from 'react'

import classes from './TreeGrid.module.css'

interface Column<TData> {
    key: Key
    header?: ReactNode
    renderData?(data: TData): ReactNode
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

type VisibleState = [boolean, Dispatch<SetStateAction<boolean>>]

const VisibleContext = createContext<VisibleState | null>(null)

interface RowProps<TData> {
    columns: Column<TData>[]
    data: TData
    className?: string
    onClick?(data: TData): void
}

function Row<TData>({ columns, data, className, onClick }: RowProps<TData>) {
    const [isHover, setIsHover] = useState(false)
    function handleMouseEnter() {
        setIsHover(true)
    }
    function handleMouseLeave() {
        setIsHover(false)
    }
    const [isFocus, setIsFocus] = useState(false)
    const isVisible = isHover || isFocus
    const gridCellClassName = clsx(isVisible && classes.bgSlate200)
    function handleClick() {
        onClick?.(data)
    }
    return (
        <div
            role="row"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx(classes.contents, className)}
        >
            <VisibleContext.Provider value={[isVisible, setIsFocus]}>
                {columns.map(({ key, renderData }) => (
                    <div role="gridcell" className={gridCellClassName} key={key}>
                        {renderData ? renderData(data) : data[key as keyof object]}
                    </div>
                ))}
            </VisibleContext.Provider>
        </div>
    )
}

interface BodyProps<TData> {
    columns: Column<TData>[]
    datas: TData[]
    getKey(data: TData): Key
    getClassName?(data: TData): string
    onClick?(data: TData): void
}

function Body<TData>({ columns, datas, getKey, getClassName, onClick }: BodyProps<TData>) {
    return (
        <>
            {datas.map((data) => (
                <Row
                    columns={columns}
                    data={data}
                    onClick={onClick}
                    className={getClassName?.(data)}
                    key={getKey(data)}
                />
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
    onClick,
}: TreeGridProps<TData>) {
    return (
        <div
            role="treegrid"
            className={clsx(classes.grid, className)}
            style={{ [REPEAT_COUNT]: columns.length }}
        >
            <Head columns={columns} className={headClassName} />
            {Array.isArray(datas) && datas.length > 0 ? (
                <Body
                    columns={columns}
                    datas={datas}
                    getKey={getKey}
                    getClassName={getClassName}
                    onClick={onClick}
                />
            ) : (
                <Empty>{children}</Empty>
            )}
        </div>
    )
}

export default TreeGrid
export { VisibleContext }
export type { Column, VisibleState }

declare module 'csstype' {
    interface Properties {
        [REPEAT_COUNT]: number
    }
}
