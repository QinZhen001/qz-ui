import { addDecorator,configure  } from '@storybook/vue';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

import Vue from 'vue';
import qzui from "../src/pc-index"



Vue.use(qzui)


// import Vuex from 'vuex';

// Vue.use(Vuex);

// addDecorator(withInfo); 



// configure(require.context('../stories', true, /\.stories\.js$/), module);
