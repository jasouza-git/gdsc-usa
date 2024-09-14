import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"></div><ul class="ma-8"><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/clwang_test/form" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`see Form`);
      } else {
        return [
          createTextVNode("see Form")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/clwang_test/cards" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`see Cards`);
      } else {
        return [
          createTextVNode("see Cards")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/clwang_test/botnav" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`see Bottom Navigations`);
      } else {
        return [
          createTextVNode("see Bottom Navigations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/clwang_test/deck" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`see Deck`);
      } else {
        return [
          createTextVNode("see Deck")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clwang_test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-D5kK9BiY.mjs.map
