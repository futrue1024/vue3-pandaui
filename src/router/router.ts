import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Switch from "../components/SwitchDemo.vue";
import Button from "../components/ButtonDemo.vue";
import Dialog from "../components/DialogDemo.vue";
import Tabs from "../components/TabsDemo.vue";

import Markdown from "../components/Markdown.vue";
import {h} from "vue";

const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
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
          {path: "intro", component: md('intro')},
          {path: "install", component: md('install')},
          {path: "get-started", component: md('get-started')}
        ]
      }
    ]
  });
router.afterEach(() => {

});
