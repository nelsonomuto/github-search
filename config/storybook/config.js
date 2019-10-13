import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console';
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });
// automatically import all files ending in *.stories.js
const req = require.context('../../src/', true, /.stories.js$/);
function loadStories() {
    require('./index.stories');
    req.keys().forEach(filename => req(filename));
}
// Option defaults:
setOptions({
    name: 'Storybook: Nelson Omuto Github Search',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: false,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    selectedAddonPanel: undefined // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

configure(loadStories, module);
