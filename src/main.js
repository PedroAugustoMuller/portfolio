// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//Styles
import './assets/css/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHtml5, faCss3Alt, faJs, faPhp, faNode, faBootstrap, faVuejs, faLaravel, faGit, faGithub, faBitbucket, faJira, faDocker, faLinux } from "@fortawesome/free-brands-svg-icons";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add( faCoffee,faHtml5, faCss3Alt, faJs, faPhp, faNode, faBootstrap, faVuejs, faLaravel, faGit, faGithub, faBitbucket, faJira, faDocker, faLinux)

const app = createApp(App)



registerPlugins(app)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
