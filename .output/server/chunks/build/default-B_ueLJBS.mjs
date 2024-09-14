import { _ as __nuxt_component_2 } from './client-only-BGVDPhwJ.mjs';
import { useSSRContext, toRef, shallowRef, computed, ref, watchEffect, defineComponent, createVNode, watch, mergeProps, provide, withCtx, renderSlot, unref, isRef, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useSeoMeta } from './index-C09g88d3.mjs';
import { m as makeComponentProps, u as useRender } from './useRender-DTeZIzyd.mjs';
import { m as makeTagProps, o as makeBorderProps, f as makeElevationProps, p as makeRoundedProps, u as useBackgroundColor, q as useBorder, h as useElevation, r as useRounded, e as makeDimensionProps, g as useDimension, j as VImg, n as VDefaultsProvider, G as VExpandTransition, k as VIcon, V as VContainer, a as VRow, b as VCol } from './index-CFjtekCL.mjs';
import { a as makeLayoutItemProps, u as useLayoutItem, m as makeLayoutProps, c as createLayout, b as useLayout } from './layout-D3C100mh.mjs';
import { l as propsFactory, g as genericComponent, w as makeThemeProps, x as provideTheme, o as useRtl, s as provideDefaults, G as useProxiedModel, a1 as useToggleScope, _ as _export_sfc, m as convertToUnit, Q as clamp, aj as __nuxt_component_1$1 } from './server.mjs';
import { b as useSsrBoot } from './VList-DHJjDQbL.mjs';
import { n as VBtnToggle, V as VBtn } from './VBtn-DUYXxIVD.mjs';
import { _ as __nuxt_component_0 } from './Block-o2RbuNOS.mjs';
import { _ as __nuxt_component_1 } from './BotNav-zM0r_WA8.mjs';
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
import './resizeObserver-BobTccIq.mjs';
import 'vue-router';

publicAssetsURL("/favicon.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Titlecard",
  __ssrInlineRender: true,
  props: {
    white: { type: Boolean, default: false },
    screenFit: { type: Boolean, default: true },
    shadow: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Titlecard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value)
      return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a2;
      var _a;
      const behavior = new Set((_a2 = (_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) != null ? _a2 : []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = computed(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a2, _b2;
      var _a, _b;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted)
        return 0;
      const height2 = (_a2 = (_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) != null ? _a2 : 0;
      const extensionHeight = (_b2 = (_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) != null ? _b2 : 0;
      if (!canHide.value)
        return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(computed(() => !!props.scrollBehavior), () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": [layoutClasses.value, props.class],
        "style": [dimensionStyles.value, layoutStyles.value, props.style]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GDSC",
  __ssrInlineRender: true,
  props: {
    title: { default: "Google Developer Student Clubs" },
    transparent: { type: Boolean, default: false }
  },
  setup(__props) {
    const info = __props;
    const pages = ["Home", "Events", "About Us", "Membership"];
    const active_page = ref(pages[0]);
    useSeoMeta({
      title: info.title,
      ogTitle: "Community group",
      ogImage: "@/assets/logo.png"
    });
    let mouse = ref([-1, -1, -1, -1]);
    provide("mouse", mouse);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_Titlecard = _sfc_main$3;
      _push(ssrRenderComponent(VLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { style: { "padding-top": "0" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(VAppBar, {
                    color: _ctx.transparent ? "transparent" : "primary",
                    elevation: _ctx.transparent ? 0 : 4,
                    flat: _ctx.transparent,
                    class: "head"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Titlecard, {
                        shadow: "",
                        white: _ctx.transparent
                      }, null, 8, ["white"]),
                      createVNode(VBtnToggle, {
                        class: "mx-auto",
                        density: "default",
                        color: "primary",
                        manditory: "",
                        dark: "",
                        modelValue: unref(active_page),
                        "onUpdate:modelValue": ($event) => isRef(active_page) ? active_page.value = $event : null
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(pages, (page) => {
                            return createVNode(VBtn, {
                              style: "",
                              key: page,
                              value: page,
                              depressed: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(page), 1)
                              ]),
                              _: 2
                            }, 1032, ["style", "value"]);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["density", "modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, { icon: "" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-magnify")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["color", "elevation", "flat"])
                ]),
                _: 1
              }),
              createVNode(VMain, { style: { "padding-top": "0" } }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GDSC.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const titles = ["GDSC USA - Iloilo", "Projects", "Contact Us"];
    const usaLinks = [
      { icon: "mdi-facebook", link: "" },
      { icon: "mdi-linkedin", link: "" },
      { icon: "mdi-instagram", link: "" },
      { icon: "mdi-twitter", link: "" }
    ];
    const links = [
      [
        { title: "Home" },
        { title: "About Us" }
      ],
      [
        { title: "Events" }
      ],
      [
        { title: "gdsc-rso@usa.edu.ph" }
      ]
    ];
    const goToLink = (url) => {
      (void 0).open(url, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Block = __nuxt_component_0;
      const _component_BotNav = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_Titlecard = _sfc_main$3;
      _push(ssrRenderComponent(_component_Block, mergeProps({
        icon: "",
        grey: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { fluid: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "fill-height px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "height": "70px", "width": "100%" })}"${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(VRow, {
                          align: "start",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { class: "mb-6 mx-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { class: "mx-auto" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_BotNav, {
                                            "min-width": "300",
                                            titles,
                                            links
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_BotNav, {
                                              "min-width": "300",
                                              titles,
                                              links
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, { class: "mx-auto" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BotNav, {
                                            "min-width": "300",
                                            titles,
                                            links
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { class: "mb-6 mx-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "mx-auto" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BotNav, {
                                          "min-width": "300",
                                          titles,
                                          links
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, {
                                          class: "mx-auto",
                                          style: _ctx.$vuetify.display.mdAndUp ? "width: 360px" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pl-6 mx-auto" }, [
                                                      createVNode(_component_Titlecard, { screenFit: false })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode("p", {
                                                      class: "mt-4 mx-auto",
                                                      style: { "font-size": "11px" }
                                                    }, "General Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRow, { class: "px-6 mt-6" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(usaLinks, (t, i) => {
                                                      return createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            icon: "",
                                                            density: "comfortable",
                                                            onClick: ($event) => goToLink(t.link)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                class: "text-black",
                                                                size: "small"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(t.icon), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 64))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["style"])
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
                        }, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle({ "height": "70px", "width": "100%" })}"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "height": "70px", "width": "100%" } }),
                          createVNode(VRow, {
                            align: "start",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { class: "mb-6 mx-5" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "mx-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BotNav, {
                                        "min-width": "300",
                                        titles,
                                        links
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, {
                                        class: "mx-auto",
                                        style: _ctx.$vuetify.display.mdAndUp ? "width: 360px" : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pl-6 mx-auto" }, [
                                                    createVNode(_component_Titlecard, { screenFit: false })
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode("p", {
                                                    class: "mt-4 mx-auto",
                                                    style: { "font-size": "11px" }
                                                  }, "General Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VRow, { class: "px-6 mt-6" }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(usaLinks, (t, i) => {
                                                    return createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          icon: "",
                                                          density: "comfortable",
                                                          onClick: ($event) => goToLink(t.link)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "text-black",
                                                              size: "small"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(t.icon), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["style"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { style: { "height": "70px", "width": "100%" } })
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
                        createVNode("div", { style: { "height": "70px", "width": "100%" } }),
                        createVNode(VRow, {
                          align: "start",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { class: "mb-6 mx-5" }, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "mx-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BotNav, {
                                      "min-width": "300",
                                      titles,
                                      links
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, {
                                      class: "mx-auto",
                                      style: _ctx.$vuetify.display.mdAndUp ? "width: 360px" : ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pl-6 mx-auto" }, [
                                                  createVNode(_component_Titlecard, { screenFit: false })
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode("p", {
                                                  class: "mt-4 mx-auto",
                                                  style: { "font-size": "11px" }
                                                }, "General Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, { class: "px-6 mt-6" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(usaLinks, (t, i) => {
                                                  return createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        icon: "",
                                                        density: "comfortable",
                                                        onClick: ($event) => goToLink(t.link)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            class: "text-black",
                                                            size: "small"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(t.icon), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["style"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { style: { "height": "70px", "width": "100%" } })
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
              createVNode(VContainer, { fluid: "" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    class: "fill-height px-8",
                    align: "center",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "height": "70px", "width": "100%" } }),
                      createVNode(VRow, {
                        align: "start",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "mb-6 mx-5" }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "mx-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BotNav, {
                                    "min-width": "300",
                                    titles,
                                    links
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, {
                                    class: "mx-auto",
                                    style: _ctx.$vuetify.display.mdAndUp ? "width: 360px" : ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pl-6 mx-auto" }, [
                                                createVNode(_component_Titlecard, { screenFit: false })
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                class: "mt-4 mx-auto",
                                                style: { "font-size": "11px" }
                                              }, "General Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRow, { class: "px-6 mt-6" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(usaLinks, (t, i) => {
                                                return createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      density: "comfortable",
                                                      onClick: ($event) => goToLink(t.link)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          class: "text-black",
                                                          size: "small"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(t.icon), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["style"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "height": "70px", "width": "100%" } })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_GDSC = _sfc_main$2;
  const _component_NuxtPage = __nuxt_component_1$1;
  const _component_Footer = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_GDSC, { transparent: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-B_ueLJBS.mjs.map
