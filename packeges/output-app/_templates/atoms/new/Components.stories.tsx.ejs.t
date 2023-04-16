---
to: <%= path %>/index.stories.tsx
---
import { <%= componentName %> } from "."
import type { StoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"
type <%= componentName %>Type = typeof <%= componentName %>
type <%= componentName %>Story = StoryObj<<%= componentName %>Type>
const meta: Meta<ComponentProps<<%= componentName %>Type>> = {
  component: <%= componentName %>,
}
export default meta
export const Default: <%= componentName %>Story = {}