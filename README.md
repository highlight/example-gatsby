# Gatsby 3 and Highlight Example Application

## Install the Highlight Gatsby Plugin

```sh
npm install @highlight-run/gatsby-plugin-highlight

# or using Yarn
yarn add @highlight-run/gatsby-plugin-highlight
```

## Register Highlight as a Plugin

In your `gatsby-config.js`:


```js
module.exports = {
  plugins: [
    {
      resolve: "@highlight-run/gatsby-plugin-highlight",
      options: {
        // See all the options here: https://docs.highlight.run/reference#options
    	disableNetworkRecording: false;
    	disableConsoleRecording: false;
		enableStrictPrivacy: false;
		environment: 'production';
    	version: '5.2.3';
    	networkRecording: true;
      }
    },
  ]
}
```

## Calling Highlight Methods

If you need to call any [Highlight methods](https://docs.highlight.run/reference#track), you can do so by importing `H` from `highlight.run`

```jsx
// In Component.jsx
import { H } from 'highlight.run';

const Component = () => (
	<button onClick={() => {
		H.track('fancyButtonClicked');
	}}>
		My fancy button
	</button>
);
```
