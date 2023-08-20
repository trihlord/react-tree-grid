import TreeGrid, { type TreeGridProps } from './TreeGrid'
import { useColumn } from './useColumn'

interface WithDropdownMenuProps<TData> extends TreeGridProps<TData> {
    dropdownMenuProps: any
}

function TreeGridWithDropdownMenu<TData>({
    dropdownMenuProps,
    columns,
    ...props
}: WithDropdownMenuProps<TData>) {
    const dropdownMenuColumn = useColumn({
        key: 'dropdownMenu',
        renderData(_, [isVisible, setIsVisible]) {
            return (
                <button
                    {...dropdownMenuProps}
                    hidden={!isVisible}
                    onClick={(event) => event.stopPropagation()}
                    onFocus={() => setIsVisible(true)}
                    onBlur={() => setIsVisible(false)}
                />
            )
        },
    })
    return <TreeGrid {...props} columns={columns.concat(dropdownMenuColumn)} />
}

export default TreeGridWithDropdownMenu
