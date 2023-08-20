import type { Meta, StoryObj } from '@storybook/react'
import TreeGridWithDropdownMenu from './TreeGridWithDropdownMenu'

const meta: Meta<typeof TreeGridWithDropdownMenu> = {
    title: 'Components/TreeGridWithDropdownMenu',
    component: TreeGridWithDropdownMenu,
}

export default meta

type Story = StoryObj<typeof TreeGridWithDropdownMenu>

export const Country: Story = {
    args: {
        columns: [
            { key: 'country', header: 'Country' },
            { key: 'postCode', header: 'Post Code' },
        ],
        datas: [{ id: 0, country: 'Russia', postCode: 225 }],
        children: 'Empty Countries',
        getKey({ id }) {
            return id
        },
        onClick({ id }) {
            alert(id)
        },
        dropdownMenuProps: {
            children: 'Send Message',
        },
    },
}
