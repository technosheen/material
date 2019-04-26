# Build a Material Theme

This remixable project is hosted on Glitch. With a built-in code-editor and automated deployment, you can see your custom styles cascade instantly through Material Components for the web. [Remix](https://glitch.com/edit/#!/remix/material-theme-builder) to get a copy of the project to begin customizing your own Material Theme. Then navigate to the code view to make changes.


## Change values for typography, shape, and color
To begin customizing your theme, you’ll modify the variables in your project’s ```my-theme-vars.scss``` file. By default each theme starts off with our baseline values. We’ve added these values in the theme so you can easily swap them out.

### Typography
To change your theme’s typography, we recommend using <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> and choosing a font-family that best reflects your style. Copy the font’s @import url and set the global font-family.

```
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
$mdc-typography-font-family: unquote("Roboto, sans-serif");
```

### Shape
Now let’s adjust the shape scheme. To systematically apply shape throughout your app, components are categorized by size, grouped into categories of small, medium and large. Each component size group can be themed by overriding the default values. We recommend using our <a href="https://material.io/design/shape/about-shape.html#shape-customization-tool" target="_blank">shape customization tool</a> to help you pick your radius values. (Note: Material Components for Web only supports rounded corners)

```
$mdc-shape-small-component-radius: 4px;
$mdc-shape-medium-component-radius: 4px;
$mdc-shape-large-component-radius: 0px;
```

### Color
Last but not least, let’s add some color. To change your theme's color scheme, replace the existing HEX color values with custom HEX color values. Use our <a href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors" target="_blank">color palette generator</a>  to help come up with pairings and check your color contrast.

Primary colors ```$mdc-theme-primary``` map to components and elements, and secondary colors  ```$mdc-theme-secondary``` are used as accents on components.

```
$mdc-theme-primary: #6200ee;
$mdc-theme-secondary: #018786;
```

Theme background ```$mdc-theme-background``` appears behind scrollable content. Surface color ```$mdc-theme-surface``` is mapped to the surface of components such as cards, sheets, and menus. Error color ```$mdc-theme-error``` is used to indicate an error state for components such as text fields.

```
$mdc-theme-surface: #ffffff;
$mdc-theme-background: #ffffff;
$mdc-theme-error: #b00020;
```

"On" colors define how text, icons, and strokes are colored in relation to the surface on which they appear.

```
$mdc-theme-on-primary: #ffffff;
$mdc-theme-on-secondary: #ffffff;
$mdc-theme-on-error: #ffffff;
$mdc-theme-on-surface: #000000;
```

Modifying these variables in your project's ```my-theme-vars.scss``` file create your own Material Theme that you can see cascade through Material Components for the web. 

## Copy your code
Congrats! Now you have own Material Theme that you can use in your [Material Components for the Web](https://github.com/material-components/material-components-web) projects. We’ve made it easy to start building your web project with our [Material Starter Kit](https://glitch.com/~material-starter-kit), just copy your theming variables from ```my-theme-vars.scss``` into the starter kit’s ```my-theme-vars.scss``` and start building. Happy Theming!

## Interested in learning more?
Check out the [Material Components for the Web](https://github.com/material-components/material-components-web) documentation to add more components and styling. Read the full [Getting Started guide](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md) and learn about [Material Theming](https://material.io/design/material-theming).

