import { Card } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type CardType = typeof Card
type CardStory = ComponentStoryObj<CardType>
const meta: Meta<ComponentProps<CardType>> = {
  component: Card,
}
export default meta
export const Default: CardStory = {}