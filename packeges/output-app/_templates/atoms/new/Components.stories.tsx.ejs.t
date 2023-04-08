---
to: <%= path %>/index.stories.tsx
---
import { <%= componentName %> } from "."
import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type <%= componentName %>Type = typeof <%= componentName %>
type <%= componentName %>Story = ComponentStoryObj<<%= componentName %>Type>
const meta: Meta<ComponentProps<<%= componentName %>Type>> = {
  component: <%= componentName %>,
}
export default meta
export const Default: <%= componentName %>Story = {}