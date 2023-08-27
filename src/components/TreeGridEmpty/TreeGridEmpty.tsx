import type { ReactNode } from 'react'
import TreeGridCell from '../TreeGridCell'

interface Props {
    children?: ReactNode
}

export default function TreeGridEmpty({ children }: Props) {
    return (
        <tbody>
            <tr>
                <TreeGridCell type="data">{children}</TreeGridCell>
            </tr>
        </tbody>
    )
}
