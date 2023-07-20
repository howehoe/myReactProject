import { TextField } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type TextFieldType = typeof TextField
type TextFieldStory = ComponentStoryObj<TextFieldType>
const meta: Meta<ComponentProps<TextFieldType>> = {
  component: TextField,
}
export default meta
export const Default: TextFieldStory = {}