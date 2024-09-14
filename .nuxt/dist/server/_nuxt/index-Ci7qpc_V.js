import { _ as __nuxt_component_0 } from "./Block-o2RbuNOS.js";
import { _ as __nuxt_component_2 } from "./client-only-BGVDPhwJ.js";
import { defineComponent, ref, inject, mergeProps, useSSRContext, provide, withAsyncContext, watch, withCtx, createVNode, openBlock, createBlock, createCommentVNode, unref, Fragment, renderList, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, e as useDisplay } from "../server.mjs";
import { u as useAsyncData, _ as __nuxt_component_5 } from "./Deck-DPxRpB4L.js";
import { _ as __nuxt_component_6 } from "./Form-CFbpCbpx.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { V as VContainer, a as VRow, b as VCol } from "./index-CFjtekCL.js";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "./VSkeletonLoader-DHOnnq9S.js";
import "./VCard-VswUOIBc.js";
import "./useRender-DTeZIzyd.js";
import "./VBtn-DUYXxIVD.js";
import "./resizeObserver-BobTccIq.js";
import "./VSelect-B1Jq1ap5.js";
import "./VList-DHJjDQbL.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Bubble",
  __ssrInlineRender: true,
  props: {
    fill: { default: "red" },
    x: { default: 0 },
    y: { default: 0 },
    z: { default: 200 },
    f: { default: 0.25 },
    r: { default: 1 },
    m: { default: 300 },
    back: { type: Boolean, default: false }
  },
  setup(__props) {
    const bubble = ref(null);
    ref({
      oY: 0,
      oX: 0,
      vX: 0,
      vY: 0,
      pX: 0,
      pY: 0,
      aX: 0,
      aY: 0,
      dT: Number(/* @__PURE__ */ new Date())
    });
    ref([]);
    inject("mouse");
    inject("area");
    ref({
      n: 0,
      x: 0,
      y: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bubble",
        ref_key: "bubble",
        ref: bubble
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bubble.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Bubbles",
  __ssrInlineRender: true,
  props: {
    amount: { default: 15 },
    colors: { default: ["red", "yellow", "green", "blue"] },
    imgOff: { default: 5 },
    bubOff: { default: 20 },
    durVar: { default: 500 },
    durOff: { default: 250 }
  },
  setup(__props) {
    const info = __props;
    let area = ref([Math.random() * Math.PI, 0, info.imgOff]);
    provide("area", area);
    let bubbles = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Bubble = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bubbles hidden a500",
        ref_key: "bubbles",
        ref: bubbles
      }, _attrs))}><!--[-->`);
      ssrRenderList(info.amount, (n) => {
        _push(ssrRenderComponent(_component_Bubble, {
          fill: info.colors[Math.floor(Math.random() * info.colors.length)],
          x: Math.random() * info.bubOff - info.bubOff / 2,
          y: Math.random() * info.bubOff - info.bubOff / 2,
          z: Math.round(Math.random() * 75) + 25,
          f: n / info.amount / 4,
          back: ""
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bubbles.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/title.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formRegister = (value) => {
      console.log(value);
    };
    const decideFormWidth = () => {
      const w = useDisplay().width.value;
      return w < 430 ? 340 : useDisplay().smAndDown.value ? 420 : 500;
    };
    const { data: randomNums } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("randomNums", async () => [1, 2, 3, 4, 5].map((i) => Math.random()))), __temp = await __temp, __restore(), __temp);
    const year = ref("2023 - 2024");
    watch(randomNums, () => {
      console.log(randomNums);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Block = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_Bubbles = _sfc_main$2;
      const _component_Bubble = _sfc_main$3;
      const _component_Slider = __nuxt_component_4;
      const _component_Deck = __nuxt_component_5;
      const _component_Form = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Block, {
        dark: "",
        img: "group_photo.png"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              fluid: "",
              style: { "height": "100vh" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "fill-height px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6${_scopeId4}>01 - GDSC</h6><h1${_scopeId4}>Google Developer Student Clubs</h1><h3${_scopeId4}>University of San Agustin</h3>`);
                            } else {
                              return [
                                createVNode("h6", null, "01 - GDSC"),
                                createVNode("h1", null, "Google Developer Student Clubs"),
                                createVNode("h3", null, "University of San Agustin")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("h6", null, "01 - GDSC"),
                              createVNode("h1", null, "Google Developer Student Clubs"),
                              createVNode("h3", null, "University of San Agustin")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      class: "fill-height px-8",
                      align: "center",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("h6", null, "01 - GDSC"),
                            createVNode("h1", null, "Google Developer Student Clubs"),
                            createVNode("h3", null, "University of San Agustin")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                fluid: "",
                style: { "height": "100vh" }
              }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    class: "fill-height px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("h6", null, "01 - GDSC"),
                          createVNode("h1", null, "Google Developer Student Clubs"),
                          createVNode("h3", null, "University of San Agustin")
                        ]),
                        _: 1
                      })
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
      _push(ssrRenderComponent(_component_Block, {
        dark: "",
        icon: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: "",
                    style: { "height": "100vh" },
                    "min-height": _ctx.$vuetify.display.smAndDown ? "400px" : "800px"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        class: "fill-height px-8",
                        align: "center",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "height": "50px" } }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "02 - About GDSC USA"),
                                  createVNode("p", null, "GDSC USA is a community group for Augustinian students interested in growing their technical knowledge and applying it to real life situations to create solutions for local businesses and their community.")
                                ]),
                                _: 1
                              }),
                              !_ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VCol, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_Bubbles, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Bubble, { fill: "/pop00.png" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              !_ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VCol, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_Bubbles, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Bubble, { fill: "/pop02.png" }),
                                      createVNode(_component_Bubble, { fill: "/pop01.png" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "03 - What We Do"),
                                  createVNode("p", null, "As a program supported by Google Developers, students from all courses and year levels can join GDSC USA. We arrange webinars, hold workshops, and engage in community building to help kickstart careers!")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { style: { "height": "50px" } })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["min-height"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Block, { icon: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              fluid: "",
              style: { "height": "100vh" },
              "min-height": "500px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "fill-height py-10 px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h2${_scopeId4}>04 - GDSC Event Gallery</h2><p class="mb-4"${_scopeId4}>We arrange webinars, hold workshops, and engage in community building to help kickstart careers! </p><!--[-->`);
                              ssrRenderList(unref(randomNums), (n, i) => {
                                _push5(ssrRenderComponent(VRow, {
                                  align: "center",
                                  justify: "center",
                                  key: i
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<input${ssrRenderAttr("value", n)}${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("input", { value: n }, null, 8, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_Slider, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h2", null, "04 - GDSC Event Gallery"),
                                createVNode("p", { class: "mb-4" }, "We arrange webinars, hold workshops, and engage in community building to help kickstart careers! "),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(randomNums), (n, i) => {
                                  return openBlock(), createBlock(VRow, {
                                    align: "center",
                                    justify: "center",
                                    key: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("input", { value: n }, null, 8, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode(_component_Slider)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("h2", null, "04 - GDSC Event Gallery"),
                              createVNode("p", { class: "mb-4" }, "We arrange webinars, hold workshops, and engage in community building to help kickstart careers! "),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(randomNums), (n, i) => {
                                return openBlock(), createBlock(VRow, {
                                  align: "center",
                                  justify: "center",
                                  key: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode("input", { value: n }, null, 8, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(_component_Slider)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      class: "fill-height py-10 px-8",
                      align: "center",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("h2", null, "04 - GDSC Event Gallery"),
                            createVNode("p", { class: "mb-4" }, "We arrange webinars, hold workshops, and engage in community building to help kickstart careers! "),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(randomNums), (n, i) => {
                              return openBlock(), createBlock(VRow, {
                                align: "center",
                                justify: "center",
                                key: i
                              }, {
                                default: withCtx(() => [
                                  createVNode("input", { value: n }, null, 8, ["value"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            createVNode(_component_Slider)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                fluid: "",
                style: { "height": "100vh" },
                "min-height": "500px"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    class: "fill-height py-10 px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("h2", null, "04 - GDSC Event Gallery"),
                          createVNode("p", { class: "mb-4" }, "We arrange webinars, hold workshops, and engage in community building to help kickstart careers! "),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(randomNums), (n, i) => {
                            return openBlock(), createBlock(VRow, {
                              align: "center",
                              justify: "center",
                              key: i
                            }, {
                              default: withCtx(() => [
                                createVNode("input", { value: n }, null, 8, ["value"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          createVNode(_component_Slider)
                        ]),
                        _: 1
                      })
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
      _push(ssrRenderComponent(_component_Block, {
        dark: "",
        icon: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              fluid: "",
              "min-height": "500px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "fill-height py-10",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "mt-8 mb-10" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="mx-auto"${_scopeId5}>Meet Our Team!</h2>`);
                                  } else {
                                    return [
                                      createVNode("h2", { class: "mx-auto" }, "Meet Our Team!")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Deck, {
                                      yearLvl: unref(year),
                                      "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Deck, {
                                        yearLvl: unref(year),
                                        "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                                      }, null, 8, ["yearLvl", "onUpdate:yearLvl"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { class: "mt-8 mb-10" }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "mx-auto" }, "Meet Our Team!")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Deck, {
                                      yearLvl: unref(year),
                                      "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                                    }, null, 8, ["yearLvl", "onUpdate:yearLvl"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "mt-8 mb-10" }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "mx-auto" }, "Meet Our Team!")
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Deck, {
                                    yearLvl: unref(year),
                                    "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                                  }, null, 8, ["yearLvl", "onUpdate:yearLvl"])
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
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "height": "50px" })}"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode(VRow, {
                      class: "fill-height py-10",
                      align: "center",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "mt-8 mb-10" }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "mx-auto" }, "Meet Our Team!")
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_Deck, {
                                  yearLvl: unref(year),
                                  "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                                }, null, 8, ["yearLvl", "onUpdate:yearLvl"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "height": "50px" } })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                fluid: "",
                "min-height": "500px"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    class: "fill-height py-10",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "mt-8 mb-10" }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "mx-auto" }, "Meet Our Team!")
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_Deck, {
                                yearLvl: unref(year),
                                "onUpdate:yearLvl": ($event) => isRef(year) ? year.value = $event : null
                              }, null, 8, ["yearLvl", "onUpdate:yearLvl"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "height": "50px" } })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Block, { icon: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              fluid: "",
              "min-height": "500px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "height": "50px" })}"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, { class: "mb-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 class="mx-auto"${_scopeId3}>Be Part of the Community!</h3>`);
                      } else {
                        return [
                          createVNode("h3", { class: "mx-auto" }, "Be Part of the Community!")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              !_ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Bubbles, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Bubble, { fill: "/pop02.png" }),
                                      createVNode(_component_Bubble, { fill: "/pop02.png" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h5", { class: "mb-2 mx-auto" }, "Membership"),
                                  createVNode(_component_Form, {
                                    width: decideFormWidth(),
                                    onSubmit: formRegister,
                                    class: "mx-auto"
                                  }, null, 8, ["width"])
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
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "height": "70px" })}"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "height": "50px" } }),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "mb-8" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "mx-auto",
                              src: _imports_0,
                              width: decideFormWidth() / 2
                            }, null, 8, ["width"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "mb-8" }, {
                      default: withCtx(() => [
                        createVNode("h3", { class: "mx-auto" }, "Be Part of the Community!")
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            !_ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              class: "mx-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Bubbles, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Bubble, { fill: "/pop02.png" }),
                                    createVNode(_component_Bubble, { fill: "/pop02.png" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "mb-2 mx-auto" }, "Membership"),
                                createVNode(_component_Form, {
                                  width: decideFormWidth(),
                                  onSubmit: formRegister,
                                  class: "mx-auto"
                                }, null, 8, ["width"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { style: { "height": "70px" } })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                fluid: "",
                "min-height": "500px"
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "height": "50px" } }),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { class: "mb-8" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "mx-auto",
                            src: _imports_0,
                            width: decideFormWidth() / 2
                          }, null, 8, ["width"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "mb-8" }, {
                    default: withCtx(() => [
                      createVNode("h3", { class: "mx-auto" }, "Be Part of the Community!")
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          !_ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Bubbles, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Bubble, { fill: "/pop02.png" }),
                                  createVNode(_component_Bubble, { fill: "/pop02.png" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "mb-2 mx-auto" }, "Membership"),
                              createVNode(_component_Form, {
                                width: decideFormWidth(),
                                onSubmit: formRegister,
                                class: "mx-auto"
                              }, null, 8, ["width"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "height": "70px" } })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ci7qpc_V.js.map
