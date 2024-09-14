import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, renderSlot, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { V as VContainer, j as VImg, a as VRow, b as VCol } from './index-CFjtekCL.mjs';
import { _ as _export_sfc } from './server.mjs';

const favicon_dark = "" + buildAssetsURL("favicon_dark.lX_A4ysK.png");
const favicon_white = "" + buildAssetsURL("favicon_white.DRx5m5qr.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Block",
  __ssrInlineRender: true,
  props: {
    dark: { type: Boolean, default: false },
    grey: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    img: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        style: _ctx.img ? `background-color: #12181ADD; background-image: url(${_ctx.img})` : "",
        class: "py-0 px-0 fill-width fill-width " + (_ctx.img ? "bg-image " : "") + (_ctx.grey ? "z-bg-grey text-black" : _ctx.dark ? "i-bg-gray text-white" : "bg-white text-black")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.icon) {
              _push2(`<div class="${ssrRenderClass("border-circle " + (_ctx.grey ? "z-bg-grey" : _ctx.dark ? "i-bg-gray" : "bg-white"))}" data-v-6e0cf8a7${_scopeId}>`);
              _push2(ssrRenderComponent(VImg, {
                class: "icon mx-auto",
                src: _ctx.dark ? unref(favicon_white) : unref(favicon_dark)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VRow, {
              class: "mx-0 my-0 px-0 py-0",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { class: "py-0 px-0 mx-0 my-0 text-center d-flex align-center justify-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { class: "py-0 px-0 mx-0 my-0 text-center d-flex align-center justify-center" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.icon ? (openBlock(), createBlock("div", {
                key: 0,
                class: "border-circle " + (_ctx.grey ? "z-bg-grey" : _ctx.dark ? "i-bg-gray" : "bg-white")
              }, [
                createVNode(VImg, {
                  class: "icon mx-auto",
                  src: _ctx.dark ? unref(favicon_white) : unref(favicon_dark)
                }, null, 8, ["src"])
              ], 2)) : createCommentVNode("", true),
              createVNode(VRow, {
                class: "mx-0 my-0 px-0 py-0",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "py-0 px-0 mx-0 my-0 text-center d-flex align-center justify-center" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e0cf8a7"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Block-o2RbuNOS.mjs.map
