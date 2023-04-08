import { DropDown } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type DropDownType = typeof DropDown
type DropDownStory = ComponentStoryObj<DropDownType>
const meta: Meta<ComponentProps<DropDownType>> = {
  component: DropDown,
}
export default meta
export const Default: DropDownStory = {}