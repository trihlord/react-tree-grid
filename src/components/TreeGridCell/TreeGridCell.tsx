import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import classes from './TreeGridCell.module.css'

interface Props {
    type: 'data' | 'header'
    children?: ReactNode
    className?: string
}

export default function TreeGridCell({ type, children, className }: Props) {
    const Component = type === 'data' ? 'td' : 'th'
    return (
        <Component className={clsx(classes.cell, type === 'header' && classes.header, className)}>
            {children}
        </Component>
    )
}
