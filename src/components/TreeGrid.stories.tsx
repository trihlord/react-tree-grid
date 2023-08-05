import type { Meta, StoryObj } from '@storybook/react'

import TreeGrid from './TreeGrid'

const meta: Meta<typeof TreeGrid> = {
    title: 'Components/TreeGrid',
    component: TreeGrid,
}

export default meta

type Story = StoryObj<typeof TreeGrid>

export const Default: Story = {
    args: {},
}
