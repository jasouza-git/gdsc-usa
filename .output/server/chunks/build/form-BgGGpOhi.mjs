import { _ as __nuxt_component_6 } from './Form-CFbpCbpx.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { V as VContainer, a as VRow } from './index-CFjtekCL.mjs';
import './VSelect-B1Jq1ap5.mjs';
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
import './VBtn-DUYXxIVD.mjs';
import './resizeObserver-BobTccIq.mjs';
import './VList-DHJjDQbL.mjs';
import './VCard-VswUOIBc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    const handleFormSubmit = (values) => {
      console.log("Form Submitted:", values);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_6;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"${_scopeId}></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Form, {
                    onSubmit: handleFormSubmit,
                    class: "mx-auto"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Form, {
                      onSubmit: handleFormSubmit,
                      class: "mx-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "height": "70px", "width": "100%" })}"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { style: { "height": "100px", "width": "100%" } }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_Form, {
                    onSubmit: handleFormSubmit,
                    class: "mx-auto"
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { "height": "70px", "width": "100%" } })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clwang_test/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-BgGGpOhi.mjs.map
