import type { Meta, StoryObj } from '@storybook/react'

import TreeGrid from './TreeGrid'
import { useColumn } from './useColumn'

const meta: Meta<typeof TreeGrid> = {
    title: 'Components/TreeGrid',
    component: TreeGrid,
}

export default meta

type Story = StoryObj<typeof TreeGrid>

export const Country: Story = {
    args: {
        columns: [
            { key: 'country', header: 'Country' },
            { key: 'postCode', header: 'Post Code' },
            useColumn!({
                key: 'mailTo',
                renderData(_, [visible, setIsVisible]) {
                    return (
                        <button
                            hidden={!visible}
                            onFocus={() => setIsVisible(true)}
                            onBlur={() => setIsVisible(false)}
                        >
                            mail to
                        </button>
                    )
                },
            }),
        ],
        datas: [{ id: 0, country: 'Russia', postCode: 225 }],
        children: 'Empty Countries',
        getKey({ id }) {
            return id
        },
        onClick({ id }) {
            alert(id)
        },
    },
}
