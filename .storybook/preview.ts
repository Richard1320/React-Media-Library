import type { Preview } from "@storybook/react";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['React-Media-Library', ['ReactMediaLibrary', 'FileLibraryCard']],
      },
    },
  },
};

export default preview;

