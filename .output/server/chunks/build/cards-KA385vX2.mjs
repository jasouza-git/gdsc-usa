import { a as alterColors, C as ColorAdjustParas, V as VDataIterator, b as VSkeletonLoader, r as randomColor, _ as __nuxt_component_1 } from './VSkeletonLoader-DHOnnq9S.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer, a as VRow, b as VCol } from './index-CFjtekCL.mjs';
import { V as VBtn } from './VBtn-DUYXxIVD.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './VCard-VswUOIBc.mjs';
import './useRender-DTeZIzyd.mjs';
import './server.mjs';
import 'vue-router';
import './resizeObserver-BobTccIq.mjs';

const colorLightenLvl = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cards",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    var cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl);
    const members = ref([
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-blue",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fbLink: "https://www.facebook.com/chenlin.wang.16100/",
        lnLink: "https://www.facebook.com/chenlin.wang.16100/",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-red",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fbLink: "https://www.facebook.com/chenlin.wang.16100/",
        lnLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-purple",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-green",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-black",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-orange",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      },
      {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-purple",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
      }
    ]);
    const getRandomColor = () => {
      const res = randomColor(cardColors);
      if (res.remainingColors.length === 0) {
        cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl);
      } else {
        cardColors = res.remainingColors;
      }
      return res.color;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "height": "100px", "width": "100%" })}"${_scopeId}></div>`);
            _push2(ssrRenderComponent(VDataIterator, {
              items: unref(members),
              "items-per-page": 6,
              loading: unref(loading)
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          density: "comfortable",
                          variant: "tonal",
                          rounded: "",
                          onClick: ($event) => loading.value = !unref(loading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`loading off/on`);
                            } else {
                              return [
                                createTextVNode("loading off/on")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            density: "comfortable",
                            variant: "tonal",
                            rounded: "",
                            onClick: ($event) => loading.value = !unref(loading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("loading off/on")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          density: "comfortable",
                          variant: "tonal",
                          rounded: "",
                          onClick: ($event) => loading.value = !unref(loading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("loading off/on")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(items, (member, index) => {
                          _push4(ssrRenderComponent(VCol, { key: index }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Card, {
                                  class: "mx-auto",
                                  member: (
                                    /* @ts-ignore */
                                    member.raw
                                  )
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Card, {
                                    class: "mx-auto",
                                    member: (
                                      /* @ts-ignore */
                                      member.raw
                                    )
                                  }, null, 8, ["member"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(items, (member, index) => {
                            return openBlock(), createBlock(VCol, { key: index }, {
                              default: withCtx(() => [
                                createVNode(_component_Card, {
                                  class: "mx-auto",
                                  member: (
                                    /* @ts-ignore */
                                    member.raw
                                  )
                                }, null, 8, ["member"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (member, index) => {
                          return openBlock(), createBlock(VCol, { key: index }, {
                            default: withCtx(() => [
                              createVNode(_component_Card, {
                                class: "mx-auto",
                                member: (
                                  /* @ts-ignore */
                                  member.raw
                                )
                              }, null, 8, ["member"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              footer: withCtx(({ page, pageCount, prevPage, nextPage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center pa-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    disabled: page === 1,
                    density: "comfortable",
                    icon: "mdi-arrow-left",
                    variant: "tonal",
                    rounded: "",
                    onClick: prevPage
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mx-2 text-caption"${_scopeId2}> Page ${ssrInterpolate(page)} of ${ssrInterpolate(pageCount)}</div>`);
                  _push3(ssrRenderComponent(VBtn, {
                    disabled: page >= pageCount,
                    density: "comfortable",
                    icon: "mdi-arrow-right",
                    variant: "tonal",
                    rounded: "",
                    onClick: nextPage
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center pa-4" }, [
                      createVNode(VBtn, {
                        disabled: page === 1,
                        density: "comfortable",
                        icon: "mdi-arrow-left",
                        variant: "tonal",
                        rounded: "",
                        onClick: prevPage
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode("div", { class: "mx-2 text-caption" }, " Page " + toDisplayString(page) + " of " + toDisplayString(pageCount), 1),
                      createVNode(VBtn, {
                        disabled: page >= pageCount,
                        density: "comfortable",
                        icon: "mdi-arrow-right",
                        variant: "tonal",
                        rounded: "",
                        onClick: nextPage
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ];
                }
              }),
              loader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList([0, 1, 2, 3, 4, 5], (_4, k) => {
                          _push4(ssrRenderComponent(VCol, { key: k }, {
                            default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSkeletonLoader, {
                                  color: getRandomColor(),
                                  style: { "border-radius": "10px" },
                                  elevation: 12,
                                  class: "border mx-auto",
                                  width: "320",
                                  height: "184",
                                  type: "list-item-avatar-three-line, paragraph"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSkeletonLoader, {
                                    color: getRandomColor(),
                                    style: { "border-radius": "10px" },
                                    elevation: 12,
                                    class: "border mx-auto",
                                    width: "320",
                                    height: "184",
                                    type: "list-item-avatar-three-line, paragraph"
                                  }, null, 8, ["color"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList([0, 1, 2, 3, 4, 5], (_4, k) => {
                            return createVNode(VCol, { key: k }, {
                              default: withCtx(() => [
                                createVNode(VSkeletonLoader, {
                                  color: getRandomColor(),
                                  style: { "border-radius": "10px" },
                                  elevation: 12,
                                  class: "border mx-auto",
                                  width: "320",
                                  height: "184",
                                  type: "list-item-avatar-three-line, paragraph"
                                }, null, 8, ["color"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList([0, 1, 2, 3, 4, 5], (_3, k) => {
                          return createVNode(VCol, { key: k }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, {
                                color: getRandomColor(),
                                style: { "border-radius": "10px" },
                                elevation: 12,
                                class: "border mx-auto",
                                width: "320",
                                height: "184",
                                type: "list-item-avatar-three-line, paragraph"
                              }, null, 8, ["color"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
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
              createVNode(VDataIterator, {
                items: unref(members),
                "items-per-page": 6,
                loading: unref(loading)
              }, {
                header: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        density: "comfortable",
                        variant: "tonal",
                        rounded: "",
                        onClick: ($event) => loading.value = !unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("loading off/on")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(({ items }) => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(items, (member, index) => {
                        return openBlock(), createBlock(VCol, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_Card, {
                              class: "mx-auto",
                              member: (
                                /* @ts-ignore */
                                member.raw
                              )
                            }, null, 8, ["member"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                footer: withCtx(({ page, pageCount, prevPage, nextPage }) => [
                  createVNode("div", { class: "d-flex align-center justify-center pa-4" }, [
                    createVNode(VBtn, {
                      disabled: page === 1,
                      density: "comfortable",
                      icon: "mdi-arrow-left",
                      variant: "tonal",
                      rounded: "",
                      onClick: prevPage
                    }, null, 8, ["disabled", "onClick"]),
                    createVNode("div", { class: "mx-2 text-caption" }, " Page " + toDisplayString(page) + " of " + toDisplayString(pageCount), 1),
                    createVNode(VBtn, {
                      disabled: page >= pageCount,
                      density: "comfortable",
                      icon: "mdi-arrow-right",
                      variant: "tonal",
                      rounded: "",
                      onClick: nextPage
                    }, null, 8, ["disabled", "onClick"])
                  ])
                ]),
                loader: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList([0, 1, 2, 3, 4, 5], (_2, k) => {
                        return createVNode(VCol, { key: k }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, {
                              color: getRandomColor(),
                              style: { "border-radius": "10px" },
                              elevation: 12,
                              class: "border mx-auto",
                              width: "320",
                              height: "184",
                              type: "list-item-avatar-three-line, paragraph"
                            }, null, 8, ["color"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items", "loading"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clwang_test/cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cards-KA385vX2.mjs.map
