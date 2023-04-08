import { CheckBox } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type CheckBoxType = typeof CheckBox
type CheckBoxStory = ComponentStoryObj<CheckBoxType>
const meta: Meta<ComponentProps<CheckBoxType>> = {
  component: CheckBox,
}
export default meta
export const Default: CheckBoxStory = {}