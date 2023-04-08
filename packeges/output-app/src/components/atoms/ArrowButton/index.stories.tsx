import { ArrowButton } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type ArrowButtonType = typeof ArrowButton
type ArrowButtonStory = ComponentStoryObj<ArrowButtonType>
const meta: Meta<ComponentProps<ArrowButtonType>> = {
  component: ArrowButton,
}
export default meta
export const Default: ArrowButtonStory = {}