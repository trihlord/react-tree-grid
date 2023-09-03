import type { Meta, StoryObj } from '@storybook/react'
import Table from './Table'

const meta: Meta<typeof Table> = {
    title: 'components/Table',
    component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
    args: {},
}

// type Story<TData> = StoryObj<typeof TreeGrid<TData>>

// interface Country {
//     name: string
//     postCode: number
// }

// const countryData: Country[] = [{ name: 'Russia', postCode: 225 }]

// const countryColumns: Column<Country>[] = [
//     { header: 'Country', key: 'name' },
//     { header: 'Post Code', key: 'postCode' },
// ]

// const actionColumn: Column<Country> = {
//     key: 'action',
//     width: 87,
//     render(_, [isHover]) {
//         function handleClick() {
//             console.log('action')
//         }
//         return (
//             <button onClick={handleClick} hidden={!isHover}>
//                 Action
//             </button>
//         )
//     },
// }

// function handleCountryClick() {
//     console.log('country')
// }

// export const Default: Story<Country> = {
//     args: {
//         columns: countryColumns,
//         data: countryData,
//     },
// }

// export const Action: Story<Country> = {
//     args: {
//         columns: countryColumns.concat(actionColumn),
//         data: countryData,
//     },
// }

// export const Click: Story<Country> = {
//     args: {
//         columns: countryColumns,
//         data: countryData,
//         onRowClick: handleCountryClick,
//     },
// }

// export const Expand: Story<Country> = {
//     args: {
//         columns: countryColumns,
//         data: countryData,
//         isRowExpand() {
//             return true
//         },
//         renderRowExpand() {
//             return null
//         },
//     },
// }
