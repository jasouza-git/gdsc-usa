import { _ as __nuxt_component_1 } from './BotNav-zM0r_WA8.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import './client-only-BGVDPhwJ.mjs';
import './index-CFjtekCL.mjs';
import './useRender-DTeZIzyd.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './VList-DHJjDQbL.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "botNav",
  __ssrInlineRender: true,
  setup(__props) {
    const titles = ["title 1", "title 2", "title 3"];
    const links = [[
      { title: "item 1", link: "http://google.com" },
      { title: "item 2", link: "https://www.youtube.com" }
    ], [
      { title: "item 1", link: "http://google.com" },
      { title: "item 2", link: "https://www.youtube.com" },
      { title: "item 3", link: "https://translate.google.com" }
    ], [
      { title: "item 1", link: "http://google.com" },
      { title: "item 2", link: "https://www.youtube.com" },
      { title: "item 3", link: "https://translate.google.com" }
    ]];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BotNav = __nuxt_component_1;
      _push(`<!--[--><div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"></div>`);
      _push(ssrRenderComponent(_component_BotNav, {
        titles,
        links
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clwang_test/botNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=botNav-Ux8NdPWC.mjs.map
