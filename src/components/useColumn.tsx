import { type ReactNode } from 'react'

import { VisibleContext, type Column, type VisibleState } from './TreeGrid'

interface UseColumnParams<TData> extends Omit<Column<TData>, 'renderData'> {
    renderData(data: TData, visibleState: VisibleState): ReactNode
}

function useColumn<TData>({ renderData, ...column }: UseColumnParams<TData>): Column<TData> {
    return {
        ...column,
        renderData(data) {
            return (
                <VisibleContext.Consumer>
                    {(visibleState) => renderData(data, visibleState!)}
                </VisibleContext.Consumer>
            )
        },
    }
}

export { useColumn }
