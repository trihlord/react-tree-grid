import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import classes from './Cell.module.css'

interface CellProps {
    type: 'data' | 'header'
    columnSpan?: 'full'
    className?: string
    children?: ReactNode
}

export default function Cell({ type, columnSpan, className, children }: CellProps) {
    const Component = type === 'data' ? 'td' : 'th'
    return (
        <Component
            className={clsx(
                classes.cell,
                type === 'header' && classes.header,
                columnSpan === 'full' && classes.columnSpanFull,
                className,
            )}
        >
            {children}
        </Component>
    )
}
