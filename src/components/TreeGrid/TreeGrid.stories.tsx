import type { Meta, StoryObj } from '@storybook/react'
import type { MouseEvent } from 'react'
import type { Column } from '../types'
import TreeGrid from './TreeGrid'

const meta: Meta<typeof TreeGrid> = {
    title: 'components/TreeGrid',
    component: TreeGrid,
}

export default meta

type Story<TData> = StoryObj<typeof TreeGrid<TData>>

interface Country {
    name: string
    postCode: number
}

const countryData: Country[] = [{ name: 'Russia', postCode: 225 }]

const countryColumns: Column<Country>[] = [
    { header: 'Country', key: 'name' },
    { header: 'Post Code', key: 'postCode' },
]

const actionColumn: Column<Country> = {
    key: 'action',
    width: 87,
    render(_, [isHover]) {
        function handleClick(event: MouseEvent) {
            event.stopPropagation()
            console.log('action')
        }
        return (
            <button onClick={handleClick} hidden={!isHover}>
                Action
            </button>
        )
    },
}

function handleCountryClick() {
    console.log('country')
}

export const Default: Story<Country> = {
    args: {
        columns: countryColumns,
        data: countryData,
    },
}

export const Action: Story<Country> = {
    args: {
        columns: countryColumns.concat(actionColumn),
        data: countryData,
    },
}

export const Click: Story<Country> = {
    args: {
        columns: countryColumns.concat(actionColumn),
        data: countryData,
        onRowClick: handleCountryClick,
    },
}
