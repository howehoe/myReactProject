module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["storybook-addon-swc", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-next", "storybook-addon-pseudo-states", "storycap", "storybook-addon-designs", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ["../public", "./public"],
  docs: {
    autodocs: true
  }
};