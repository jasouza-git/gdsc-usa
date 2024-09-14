import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, toRef, provide, ref, computed, watch, watchEffect } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VCard, a as VCardText, b as VCardActions } from "./VCard-VswUOIBc.js";
import { a as VRow, b as VCol, w as VAvatar, z as VImg, x as VIcon, m as makeTagProps, A as makeTransitionProps, B as VFadeTransition, M as MaybeTransition, h as makeDimensionProps, i as makeElevationProps, y as useBackgroundColor, r as useDimension, s as useElevation } from "./index-CFjtekCL.js";
import { V as VBtn, L as LoaderSlot } from "./VBtn-DUYXxIVD.js";
import { _ as _export_sfc, l as propsFactory, G as useProxiedModel, P as getObjectValueByPath, A as getCurrentInstance, C as deepEqual, Q as clamp, F as wrapInArray, R as useLocale, S as isEmpty, M as getPropertyFromItem, g as genericComponent, w as makeThemeProps, x as provideTheme } from "../server.mjs";
import { m as makeComponentProps, u as useRender } from "./useRender-DTeZIzyd.js";
const _imports_0 = "" + __buildAssetsURL("logo.xct4cwc2.png");
const defaultAvatar = "" + __buildAssetsURL("avatar.iufTeu2K.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    member: {}
  },
  setup(__props) {
    const goToLink = (url) => {
      (void 0).open(url, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "text-start",
        width: "320",
        elevation: "12",
        style: { "border-radius": "10px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              "no-gutters": "",
              class: "py-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "auto",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAvatar, {
                          class: "ma-2 ml-3 mr-0",
                          image: _ctx.member.avatar || unref(defaultAvatar),
                          size: "125"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAvatar, {
                            class: "ma-2 ml-3 mr-0",
                            image: _ctx.member.avatar || unref(defaultAvatar),
                            size: "125"
                          }, null, 8, ["image"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          "no-gutters": "",
                          class: "d-flex align-center mt-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, {
                                      class: "my-0 py-0",
                                      style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.member.name)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.member.name), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, {
                                        class: "my-0 py-0",
                                        style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.member.name), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "auto mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: _imports_0,
                                      width: "25"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: _imports_0,
                                        width: "25"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, {
                                      class: "my-0 py-0",
                                      style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.member.name), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "auto mr-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: _imports_0,
                                      width: "25"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, {
                                class: "my-0 pt-0 pb-1",
                                style: { "font-size": "15px", "font-weight": "900", "color": "black" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.member.position)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.member.position), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, {
                                  class: "my-0 pt-0 pb-1",
                                  style: { "font-size": "15px", "font-weight": "900", "color": "black" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.member.position), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, {
                                class: "pt-0",
                                style: { "font-size": "10px", "font-weight": "400", "color": "black" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, {
                                  class: "pt-0",
                                  style: { "font-size": "10px", "font-weight": "400", "color": "black" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?"), 1)
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
                          createVNode(VRow, {
                            "no-gutters": "",
                            class: "d-flex align-center mt-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, {
                                    class: "my-0 py-0",
                                    style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.member.name), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "auto mr-2" }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: _imports_0,
                                    width: "25"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, {
                                class: "my-0 pt-0 pb-1",
                                style: { "font-size": "15px", "font-weight": "900", "color": "black" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.member.position), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, {
                                class: "pt-0",
                                style: { "font-size": "10px", "font-weight": "400", "color": "black" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?"), 1)
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
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "auto",
                      class: "d-flex justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VAvatar, {
                          class: "ma-2 ml-3 mr-0",
                          image: _ctx.member.avatar || unref(defaultAvatar),
                          size: "125"
                        }, null, 8, ["image"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          "no-gutters": "",
                          class: "d-flex align-center mt-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, {
                                  class: "my-0 py-0",
                                  style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.member.name), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "auto mr-2" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: _imports_0,
                                  width: "25"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: "my-0 pt-0 pb-1",
                              style: { "font-size": "15px", "font-weight": "900", "color": "black" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.member.position), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: "pt-0",
                              style: { "font-size": "10px", "font-weight": "400", "color": "black" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?"), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardActions, {
              class: `${_ctx.member.color || "bg-red"} small-card-actions d-flex justify-end pa-0 ma-0`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.member.fbLink) {
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.fbLink ?? "")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { size: "small" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-facebook`);
                              } else {
                                return [
                                  createTextVNode("mdi-facebook")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-facebook")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.member.lnLink) {
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.lnLink ?? "")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { size: "small" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-linkedin`);
                              } else {
                                return [
                                  createTextVNode("mdi-linkedin")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-linkedin")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.member.itLink) {
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.itLink ?? "")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { size: "small" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-instagram`);
                              } else {
                                return [
                                  createTextVNode("mdi-instagram")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-instagram")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.member.fbLink ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.fbLink ?? "")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-facebook")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    _ctx.member.lnLink ? (openBlock(), createBlock(VBtn, {
                      key: 1,
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.lnLink ?? "")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-linkedin")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    _ctx.member.itLink ? (openBlock(), createBlock(VBtn, {
                      key: 2,
                      icon: "",
                      onClick: ($event) => goToLink(_ctx.member.itLink ?? "")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-instagram")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                "no-gutters": "",
                class: "py-1"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "auto",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VAvatar, {
                        class: "ma-2 ml-3 mr-0",
                        image: _ctx.member.avatar || unref(defaultAvatar),
                        size: "125"
                      }, null, 8, ["image"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        "no-gutters": "",
                        class: "d-flex align-center mt-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, {
                                class: "my-0 py-0",
                                style: { "font-size": "15px", "font-weight": "400", "color": "black" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.member.name), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto mr-2" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: _imports_0,
                                width: "25"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, {
                            class: "my-0 pt-0 pb-1",
                            style: { "font-size": "15px", "font-weight": "900", "color": "black" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.member.position), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, {
                            class: "pt-0",
                            style: { "font-size": "10px", "font-weight": "400", "color": "black" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.member.summary ?? "Biography not found. Maybe they’re a secret agent?"), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardActions, {
                class: `${_ctx.member.color || "bg-red"} small-card-actions d-flex justify-end pa-0 ma-0`
              }, {
                default: withCtx(() => [
                  _ctx.member.fbLink ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    icon: "",
                    onClick: ($event) => goToLink(_ctx.member.fbLink ?? "")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-facebook")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  _ctx.member.lnLink ? (openBlock(), createBlock(VBtn, {
                    key: 1,
                    icon: "",
                    onClick: ($event) => goToLink(_ctx.member.lnLink ?? "")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-linkedin")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  _ctx.member.itLink ? (openBlock(), createBlock(VBtn, {
                    key: 2,
                    icon: "",
                    onClick: ($event) => goToLink(_ctx.member.itLink ?? "")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-instagram")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03e057db"]]);
var ColorAdjustParas = /* @__PURE__ */ ((ColorAdjustParas2) => {
  ColorAdjustParas2["lighten"] = "lighten";
  ColorAdjustParas2["darken"] = "darken";
  ColorAdjustParas2["accent"] = "accent";
  return ColorAdjustParas2;
})(ColorAdjustParas || {});
const I_CardColors = [
  "red",
  "pink",
  "purple",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "yellow",
  "orange",
  "brown"
];
function alterColors(para = "lighten", lvl = 5) {
  return I_CardColors.map((color) => color + "-" + para + "-" + lvl);
}
function randomColor(colors) {
  if (colors.length === 0) return { color: "Not a color!", remainingColors: [] };
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  const remainingColors = colors.filter((color, index) => index !== randomIndex);
  return {
    color: selectedColor,
    remainingColors
  };
}
const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(props, "expandOnClick");
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
const makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function provideGroupBy(options) {
  const {
    disableSort,
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => ({
      ...val,
      order: val.order ?? false
    })).concat((disableSort == null ? void 0 : disableSort.value) ? [] : sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group)) newOpened.add(group.id);
    else newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return arr;
    }
    return dive({
      type: "group",
      items,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length) return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length) return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length) return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}
function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = computed(() => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  }));
  let oldOptions = null;
  watch(options, () => {
    if (deepEqual(oldOptions, options.value)) return;
    if (oldOptions && oldOptions.search !== options.value.search) {
      page.value = 1;
    }
    vm.emit("update:options", options.value);
    oldOptions = options.value;
  }, {
    deep: true,
    immediate: true
  });
}
const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => +(value ?? 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => +(value ?? 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1) return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1) return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watchEffect(() => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePaginatedItems(options) {
  const vm = getCurrentInstance("usePaginatedItems");
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0) return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  watch(paginatedItems, (val) => {
    vm.emit("update:currentItems", val);
  });
  return {
    paginatedItems
  };
}
const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    var _a;
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(wrapInArray(v).map((v2) => {
      var _a;
      return ((_a = allItems.value.find((item) => props.valueComparator(v2, item.value))) == null ? void 0 : _a.value) ?? v2;
    }));
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item) {
    select([item], !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return !!items.length && isSelected(items);
  });
  const showSelectAll = computed(() => selectStrategy.value.showSelectAll);
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
const makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(props, "mustSort");
  const multiSort = toRef(props, "multiSort");
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    if (column.key == null) return;
    let newSortBy = sortBy.value.map((x) => ({
      ...x
    })) ?? [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value) newSortBy = [...newSortBy, {
        key: column.key,
        order: "asc"
      }];
      else newSortBy = [{
        key: column.key,
        order: "asc"
      }];
    } else if (item.order === "desc") {
      if (mustSort.value) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page) page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSortedItems(props, items, sortBy, options) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    var _a, _b;
    if (!sortBy.value.length) return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, {
      transform: options == null ? void 0 : options.transform,
      sortFunctions: {
        ...props.customKeySort,
        ...(_a = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _a.value
      },
      sortRawFunctions: (_b = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _b.value
    });
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, options) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  const transformedItems = items.map((item) => [item, (options == null ? void 0 : options.transform) ? options.transform(item) : item]);
  return transformedItems.sort((a, b) => {
    var _a, _b;
    for (let i = 0; i < sortByItems.length; i++) {
      let hasCustomResult = false;
      const sortKey = sortByItems[i].key;
      const sortOrder = sortByItems[i].order ?? "asc";
      if (sortOrder === false) continue;
      let sortA = getObjectValueByPath(a[1], sortKey);
      let sortB = getObjectValueByPath(b[1], sortKey);
      let sortARaw = a[0].raw;
      let sortBRaw = b[0].raw;
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
        [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
      }
      if ((_a = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _a[sortKey]) {
        const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if ((_b = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _b[sortKey]) {
        const customResult = options.sortFunctions[sortKey](sortA, sortB);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (hasCustomResult) continue;
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB)) return 0;
        if (isEmpty(sortA)) return -1;
        if (isEmpty(sortB)) return 1;
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  }).map((_ref) => {
    let [item] = _ref;
    return item;
  });
}
const makeDataIteratorItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function transformItem(props, item) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  return {
    type: "item",
    value,
    selectable,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useDataIteratorItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}
const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  return value.toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase());
};
const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  var _a;
  const array = [];
  const filter = (options == null ? void 0 : options.default) ?? defaultFilter;
  const keys = (options == null ? void 0 : options.filterKeys) ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys((options == null ? void 0 : options.customKeyFilter) ?? {}).length;
  if (!(items == null ? void 0 : items.length)) return array;
  loop: for (let i = 0; i < items.length; i++) {
    const [item, transformed = item] = wrapInArray(items[i]);
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if ((query || customFiltersLength > 0) && !(options == null ? void 0 : options.noFilter)) {
      if (typeof item === "object") {
        const filterKeys = keys || Object.keys(transformed);
        for (const key of filterKeys) {
          const value = getPropertyFromItem(transformed, key);
          const keyFilter = (_a = options == null ? void 0 : options.customKeyFilter) == null ? void 0 : _a[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = match;
            else defaultMatches[key] = match;
          } else if ((options == null ? void 0 : options.filterMode) === "every") {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = match;
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength)) continue;
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = ref([]);
  const filteredMatches = ref(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => (options == null ? void 0 : options.transform) ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: {
        ...props.customKeyFilter,
        ...unref(options == null ? void 0 : options.customKeyFilter)
      },
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach((_ref) => {
      let {
        index,
        matches
      } = _ref;
      const item = originalItems[index];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}
const makeVDataIteratorProps = propsFactory({
  search: String,
  loading: Boolean,
  ...makeComponentProps(),
  ...makeDataIteratorItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeDataTablePaginateProps({
    itemsPerPage: 5
  }),
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeFilterProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: {
      component: VFadeTransition,
      hideOnLeave: true
    }
  })
}, "VDataIterator");
const VDataIterator = genericComponent()({
  name: "VDataIterator",
  props: makeVDataIteratorProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:groupBy": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:expanded": (value) => true,
    "update:currentItems": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupBy = useProxiedModel(props, "groupBy");
    const search = toRef(props, "search");
    const {
      items
    } = useDataIteratorItems(props);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.raw
    });
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => item.raw
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      prevPage,
      nextPage,
      setItemsPerPage,
      setPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      prevPage,
      nextPage,
      setPage,
      setItemsPerPage,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value
    }));
    useRender(() => createVNode(props.tag, {
      "class": ["v-data-iterator", {
        "v-data-iterator--loading": props.loading
      }, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [(_a = slots.header) == null ? void 0 : _a.call(slots, slotProps.value), createVNode(MaybeTransition, {
          "transition": props.transition
        }, {
          default: () => {
            var _a2, _b2;
            return [props.loading ? createVNode(LoaderSlot, {
              "key": "loader",
              "name": "v-data-iterator",
              "active": true
            }, {
              default: (slotProps2) => {
                var _a3;
                return (_a3 = slots.loader) == null ? void 0 : _a3.call(slots, slotProps2);
              }
            }) : createVNode("div", {
              "key": "items"
            }, [!paginatedItems.value.length ? (_a2 = slots["no-data"]) == null ? void 0 : _a2.call(slots) : (_b2 = slots.default) == null ? void 0 : _b2.call(slots, slotProps.value)])];
          }
        }), (_b = slots.footer) == null ? void 0 : _b.call(slots, slotProps.value)];
      }
    }));
    return {};
  }
});
const rootTypes = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function genBone(type) {
  let children = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return createVNode("div", {
    "class": ["v-skeleton-loader__bone", `v-skeleton-loader__${type}`]
  }, [children]);
}
function genBones(bone) {
  const [type, length] = bone.split("@");
  return Array.from({
    length
  }).map(() => genStructure(type));
}
function genStructure(type) {
  let children = [];
  if (!type) return children;
  const bone = rootTypes[type];
  if (type === bone) ;
  else if (type.includes(",")) return mapBones(type);
  else if (type.includes("@")) return genBones(type);
  else if (bone.includes(",")) children = mapBones(bone);
  else if (bone.includes("@")) children = genBones(bone);
  else if (bone) children.push(genStructure(bone));
  return [genBone(type, children)];
}
function mapBones(bones) {
  return bones.replace(/\s/g, "").split(",").map(genStructure);
}
const makeVSkeletonLoaderProps = propsFactory({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeThemeProps()
}, "VSkeletonLoader");
const VSkeletonLoader = genericComponent()({
  name: "VSkeletonLoader",
  props: makeVSkeletonLoaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      t
    } = useLocale();
    const items = computed(() => genStructure(wrapInArray(props.type).join(",")));
    useRender(() => {
      var _a;
      const isLoading = !slots.default || props.loading;
      const loadingProps = props.boilerplate || !isLoading ? {} : {
        ariaLive: "polite",
        ariaLabel: t(props.loadingText),
        role: "alert"
      };
      return createVNode("div", mergeProps({
        "class": ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": props.boilerplate
        }, themeClasses.value, backgroundColorClasses.value, elevationClasses.value],
        "style": [backgroundColorStyles.value, isLoading ? dimensionStyles.value : {}]
      }, loadingProps), [isLoading ? items.value : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
export {
  ColorAdjustParas as C,
  VDataIterator as V,
  __nuxt_component_1 as _,
  alterColors as a,
  VSkeletonLoader as b,
  randomColor as r
};
//# sourceMappingURL=VSkeletonLoader-DHOnnq9S.js.map
