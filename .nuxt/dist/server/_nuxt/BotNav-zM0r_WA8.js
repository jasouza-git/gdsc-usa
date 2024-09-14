import { _ as __nuxt_component_2 } from "./client-only-BGVDPhwJ.js";
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VContainer, a as VRow, b as VCol } from "./index-CFjtekCL.js";
import { V as VList, a as VDivider, b as VListItem } from "./VList-DHJjDQbL.js";
import { e as useDisplay, _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BotNav",
  __ssrInlineRender: true,
  props: {
    titles: {},
    links: {}
  },
  setup(__props) {
    const goToLink = (url) => {
      if (url !== null) (void 0).open(url, "_blank");
    };
    const fontSize = () => useDisplay().mdAndUp.value ? 15 : useDisplay().smAndUp.value ? 13 : 12;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "text-center pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.titles, (t, i) => {
                        return openBlock(), createBlock(VCol, { class: "px-0" }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              class: "mb-0 text-no-wrap",
                              style: `font-size: ${fontSize()}px; font-weight: 900; color: grey;`
                            }, toDisplayString(t), 5),
                            createVNode(VList, {
                              density: "compact",
                              class: "bg-transparent ma-0 pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDivider, { thickness: 3 }),
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links[i], (n) => {
                                  return openBlock(), createBlock(VListItem, {
                                    style: `font-size: ${fontSize()}px; color: grey;`,
                                    active: false,
                                    rounded: "shaped",
                                    value: n.link,
                                    onClick: ($event) => goToLink(n.link)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(n.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["style", "value", "onClick"]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BotNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-192e408c"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=BotNav-zM0r_WA8.js.map
