import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Switch from "../components/SwitchDemo.vue";
import Button from "../components/ButtonDemo.vue";
import Dialog from "../components/DialogDemo.vue";
import Tabs from "../components/TabsDemo.vue";
import Markdown from "../components/Markdown.vue";
import {h} from "vue";
import Icon from "../components/IconDemo.vue";
import intro from '../markdown/intro.md'
import install from '../markdown/install.md'
import getStarted from '../markdown/get-started.md'
const md = string => h(Markdown, {content: string, key:string});
const history = createWebHashHistory();
export const router = createRouter(
  {
    history: history,
    routes: [
      {path: "/", component: Home},
      {
        path: "/doc", component: Doc, children: [
          {path: "icon", component: Icon},
          {path: "switch", component: Switch},
          {path: "dialog", component: Dialog},
          {path: "button", component: Button},
          {path: "tabs", component: Tabs},
          {path: "intro", component: md(intro)},
          {path: "install", component: md(install)},
          {path: "get-started", component: md(getStarted)}
        ]
      }
    ]
  });
router.afterEach(() => {

});
