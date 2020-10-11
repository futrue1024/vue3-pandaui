import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Switch from "../components/SwitchDemo.vue";
import Button from "../components/ButtonDemo.vue";
import Dialog from "../components/DialogDemo.vue";
import Tabs from "../components/TabsDemo.vue";
import GetStarted from '../lib/GetStarted.vue'
import Install from '../lib/install.vue'
import Intro from '../lib/intro.vue'


const history = createWebHashHistory();
export const router = createRouter(
  {
    history: history,
    routes: [
      {path: "/", component: Home},
      {
        path: "/doc", component: Doc, children: [
          {path: "switch", component: Switch},
          {path: "dialog", component: Dialog},
          {path: "button", component: Button},
          {path: "tabs", component: Tabs},
          {path: "intro", component: Intro},
          {path: "install", component: Install},
          {path: "get-started", component: GetStarted}
        ]
      }
    ]
  });
router.afterEach(() => {

});
