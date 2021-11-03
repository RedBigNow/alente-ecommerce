import Vue from 'vue'

// UI
import Paginate from '~/node_modules/vuejs-paginate/src/components/Paginate'

// Controls
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextarea from '@/components/UI/Controls/Textarea.vue'

// UI
Vue.component('Paginate', Paginate)

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)
