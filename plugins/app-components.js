import Vue from 'vue'

// UI
import Preloader from '@/components/UI/Preloader.vue'
import Paginate from '~/node_modules/vuejs-paginate/src/components/Paginate'

// Controls
import AppButton from '@/components/UI/Controls/Button.vue'

// UI
Vue.component('Preloader', Preloader)
Vue.component('Paginate', Paginate)

// Controls
Vue.component('AppButton', AppButton)
