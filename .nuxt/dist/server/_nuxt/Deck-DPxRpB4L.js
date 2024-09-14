import { _ as __nuxt_component_2 } from "./client-only-BGVDPhwJ.js";
import { a as alterColors, C as ColorAdjustParas, V as VDataIterator, b as VSkeletonLoader, r as randomColor, _ as __nuxt_component_1 } from "./VSkeletonLoader-DHOnnq9S.js";
import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, defineComponent, useModel, withAsyncContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { b as useNuxtApp, W as asyncDataDefaults, X as createError, e as useDisplay, _ as _export_sfc } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VContainer, a as VRow, b as VCol } from "./index-CFjtekCL.js";
import { V as VSelect } from "./VSelect-B1Jq1ap5.js";
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const colorLightenLvl = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Deck",
  __ssrInlineRender: true,
  props: {
    "yearLvl": {},
    "yearLvlModifiers": {}
  },
  emits: ["update:yearLvl"],
  async setup(__props) {
    let __temp, __restore;
    var cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl);
    const yearLvl = useModel(__props, "yearLvl");
    const fetchDatas = async (year) => {
      loading.value = true;
      loadingColors.value = randomLoadingColor();
      await sleep(2e3);
      loading.value = false;
      return [
        {
          position: "Lead",
          member: [
            {
              name: year,
              position: "Lead",
              avatar: null,
              color: "bg-blue",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/",
              itLink: "https://www.facebook.com/chenlin.wang.16100/"
            }
          ]
        },
        {
          position: "Co-Lead",
          member: [
            {
              name: year,
              position: "Co-Lead",
              avatar: null,
              color: "bg-blue",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/",
              itLink: "https://www.facebook.com/chenlin.wang.16100/"
            }
          ]
        },
        {
          position: "Asst. Executive Secretary",
          member: [
            {
              name: year,
              position: "Asst. Executive Secretary",
              avatar: null,
              color: "bg-blue",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/",
              itLink: "https://www.facebook.com/chenlin.wang.16100/"
            },
            {
              name: "Member Name",
              position: "Asst. Executive Secretary",
              avatar: null,
              color: "bg-red",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/"
            },
            {
              name: year,
              position: "Asst. Executive Secretary",
              avatar: null,
              color: "bg-blue",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/",
              itLink: "https://www.facebook.com/chenlin.wang.16100/"
            },
            {
              name: "Member Name",
              position: "Asst. Executive Secretary",
              avatar: null,
              color: "bg-red",
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              fbLink: "https://www.facebook.com/chenlin.wang.16100/",
              lnLink: "https://www.facebook.com/chenlin.wang.16100/"
            }
          ]
        }
      ];
    };
    const randomLoadingColor = () => {
      return [0, 1, 2, 3, 4, 5].map((i) => {
        const res = randomColor(cardColors);
        if (res.remainingColors.length === 0) {
          cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl);
        } else {
          cardColors = res.remainingColors;
        }
        return res.color;
      });
    };
    const datas = ref([]);
    const loading = ref(true);
    const { data: loadingColors } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("makeLoadingColors", async () => randomLoadingColor())), __temp = await __temp, __restore(), __temp);
    const { data: years } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("fetchYearLabels", async () => ["2019 - 2020", "2020 - 2021", "2021 - 2022", "2022 - 2023", "2023 - 2024"])), __temp = await __temp, __restore(), __temp);
    const yearLvlChanged = (yearL) => {
      if (yearL) fetchDatas(yearL).then((res) => {
        datas.value = res;
      });
    };
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const isSmallScreen = () => useDisplay().width.value < 400;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_Card = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              style: { "width": "160px" },
              class: "mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    "single-line": "",
                    density: "compact",
                    variant: "solo",
                    rounded: "",
                    items: unref(years),
                    disabled: unref(loading),
                    "onUpdate:modelValue": [($event) => yearLvlChanged($event), ($event) => yearLvl.value = $event],
                    modelValue: yearLvl.value,
                    style: { "text-align": "center" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      "single-line": "",
                      density: "compact",
                      variant: "solo",
                      rounded: "",
                      items: unref(years),
                      disabled: unref(loading),
                      "onUpdate:modelValue": [($event) => yearLvlChanged($event), ($event) => yearLvl.value = $event],
                      modelValue: yearLvl.value,
                      style: { "text-align": "center" }
                    }, null, 8, ["items", "disabled", "onUpdate:modelValue", "modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                style: { "width": "160px" },
                class: "mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    "single-line": "",
                    density: "compact",
                    variant: "solo",
                    rounded: "",
                    items: unref(years),
                    disabled: unref(loading),
                    "onUpdate:modelValue": [($event) => yearLvlChanged($event), ($event) => yearLvl.value = $event],
                    modelValue: yearLvl.value,
                    style: { "text-align": "center" }
                  }, null, 8, ["items", "disabled", "onUpdate:modelValue", "modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  !unref(loading) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(datas), (p, i) => {
                    return openBlock(), createBlock(VRow, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        p.member.length === 1 ? (openBlock(), createBlock(VRow, {
                          key: 0,
                          "no-gutters": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              class: "pa-0 " + (isSmallScreen() ? "ma-2" : "ma-5")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Card, {
                                  class: "mx-auto",
                                  member: (
                                    /* @ts-ignore */
                                    p.member[0]
                                  )
                                }, null, 8, ["member"])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        p.member.length > 1 ? (openBlock(), createBlock(VDataIterator, {
                          key: 1,
                          class: "mx-auto",
                          items: p.member
                        }, {
                          default: withCtx(({ items }) => [
                            createVNode(VRow, { "no-gutters": "" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (member, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    class: "pa-0 " + (isSmallScreen() ? "ma-2" : "ma-5"),
                                    key: index
                                  }, {
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
                                  }, 1032, ["class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["items"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256)) : (openBlock(), createBlock(VRow, {
                    key: 1,
                    "no-gutters": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(loadingColors), (color, k) => {
                        return openBlock(), createBlock(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, {
                              color,
                              style: { "border-radius": "10px" },
                              elevation: 12,
                              class: "border mx-auto pa-0 " + (isSmallScreen() ? "my-2" : "my-5"),
                              width: "320",
                              height: "190",
                              type: "list-item-avatar-three-line, paragraph"
                            }, null, 8, ["color", "class"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Deck.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1295923a"]]);
export {
  __nuxt_component_5 as _,
  useAsyncData as u
};
//# sourceMappingURL=Deck-DPxRpB4L.js.map
