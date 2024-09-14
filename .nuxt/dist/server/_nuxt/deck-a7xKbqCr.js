import { _ as __nuxt_component_5 } from "./Deck-DPxRpB4L.js";
import { defineComponent, ref, withCtx, unref, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { V as VContainer } from "./index-CFjtekCL.js";
import "./client-only-BGVDPhwJ.js";
import "hookable";
import "./VSkeletonLoader-DHOnnq9S.js";
import "./VCard-VswUOIBc.js";
import "./useRender-DTeZIzyd.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "./VBtn-DUYXxIVD.js";
import "./resizeObserver-BobTccIq.js";
import "./VSelect-B1Jq1ap5.js";
import "./VList-DHJjDQbL.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "deck",
  __ssrInlineRender: true,
  setup(__props) {
    const year = ref("2023 - 2024");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Deck = __nuxt_component_5;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_Deck, {
              yearLvl: unref(year),
              "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { style: { "height": "100px", "width": "100%" } }),
              createVNode(_component_Deck, {
                yearLvl: unref(year),
                "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
              }, null, 8, ["yearLvl", "onUpdate:yearLvl"]),
              createVNode("div", { style: { "height": "100px", "width": "100%" } })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clwang_test/deck.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=deck-a7xKbqCr.js.map
