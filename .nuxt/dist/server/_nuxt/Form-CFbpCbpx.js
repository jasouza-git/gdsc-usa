import { computed, createVNode, ref, shallowRef, watch, createTextVNode, watchEffect, mergeProps, toRef, Fragment, defineComponent, mergeModels, useModel, unref, withCtx, isRef, useSSRContext, toDisplayString, openBlock, createBlock, createCommentVNode, renderList, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as VTextField, b as VMenu, m as makeFormProps, c as createForm, f as forwardRefs, V as VSelect } from "./VSelect-B1Jq1ap5.js";
import { l as propsFactory, I as IconValue, g as genericComponent, K as EventProp, ag as useDate, G as useProxiedModel, F as wrapInArray, ah as getWeek, ai as createRange, m as convertToUnit, V as templateRef, w as makeThemeProps, x as provideTheme, N as omit, R as useLocale, _ as _export_sfc } from "../server.mjs";
import { V as VBtn, a as makeLocationProps, b as makePositionProps, c as useLocation, d as usePosition } from "./VBtn-DUYXxIVD.js";
import { e as createSimpleFunctional, y as useBackgroundColor, M as MaybeTransition, c as VDefaultsProvider, f as makeBorderProps, h as makeDimensionProps, i as makeElevationProps, j as makeRoundedProps, m as makeTagProps, o as useBorder, r as useDimension, s as useElevation, t as useRounded, B as VFadeTransition, a as VRow, b as VCol } from "./index-CFjtekCL.js";
import { u as useRender, m as makeComponentProps } from "./useRender-DTeZIzyd.js";
import { V as VCard, c as VCardTitle } from "./VCard-VswUOIBc.js";
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
function dateFormat(value = Date.now(), format = "YYYY-MM-DD HH:mm:ss") {
  try {
    let date;
    if (typeof value === "number" || typeof value === "string") {
      date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
    } else {
      date = value;
    }
    const padZero = (value2, len = 2) => {
      return String(value2).padStart(len, "0");
    };
    const replacement = (match) => {
      switch (match) {
        case "YYYY":
          return padZero(date.getFullYear());
        case "YY":
          return padZero(date.getFullYear()).slice(2, 4);
        case "MM":
          return padZero(date.getMonth() + 1);
        case "M":
          return String(date.getMonth() + 1);
        case "DD":
          return padZero(date.getDate());
        case "D":
          return String(date.getDate());
        case "HH":
          return padZero(date.getHours());
        case "H":
          return String(date.getHours());
        case "mm":
          return padZero(date.getMinutes());
        case "m":
          return String(date.getMinutes());
        case "ss":
          return padZero(date.getSeconds());
        case "s":
          return String(date.getSeconds());
        case "SSS":
          return padZero(date.getMilliseconds(), 3);
        default:
          return match;
      }
    };
    return format.replace(/YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s|SSS/g, replacement);
  } catch (error) {
    throw new Error("Failed to format date");
  }
}
const makeVDatePickerControlsProps = propsFactory({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: false
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  modeIcon: {
    type: IconValue,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls");
const VDatePickerControls = genericComponent()({
  name: "VDatePickerControls",
  props: makeVDatePickerControlsProps(),
  emits: {
    "click:year": () => true,
    "click:month": () => true,
    "click:prev": () => true,
    "click:next": () => true,
    "click:text": () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const disableMonth = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes("text") : !!props.disabled;
    });
    const disableYear = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes("mode") : !!props.disabled;
    });
    const disablePrev = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes("prev") : !!props.disabled;
    });
    const disableNext = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes("next") : !!props.disabled;
    });
    function onClickPrev() {
      emit("click:prev");
    }
    function onClickNext() {
      emit("click:next");
    }
    function onClickYear() {
      emit("click:year");
    }
    function onClickMonth() {
      emit("click:month");
    }
    useRender(() => {
      return createVNode("div", {
        "class": ["v-date-picker-controls"]
      }, [createVNode(VBtn, {
        "class": "v-date-picker-controls__month-btn",
        "disabled": disableMonth.value,
        "text": props.text,
        "variant": "text",
        "rounded": true,
        "onClick": onClickMonth
      }, null), createVNode(VBtn, {
        "key": "mode-btn",
        "class": "v-date-picker-controls__mode-btn",
        "disabled": disableYear.value,
        "density": "comfortable",
        "icon": props.modeIcon,
        "variant": "text",
        "onClick": onClickYear
      }, null), createVNode(VSpacer, {
        "key": "mode-spacer"
      }, null), createVNode("div", {
        "key": "month-buttons",
        "class": "v-date-picker-controls__month"
      }, [createVNode(VBtn, {
        "disabled": disablePrev.value,
        "icon": props.prevIcon,
        "variant": "text",
        "onClick": onClickPrev
      }, null), createVNode(VBtn, {
        "disabled": disableNext.value,
        "icon": props.nextIcon,
        "variant": "text",
        "onClick": onClickNext
      }, null)])]);
    });
    return {};
  }
});
const makeVDatePickerHeaderProps = propsFactory({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: EventProp()
}, "VDatePickerHeader");
const VDatePickerHeader = genericComponent()({
  name: "VDatePickerHeader",
  props: makeVDatePickerHeaderProps(),
  emits: {
    click: () => true,
    "click:append": () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    function onClick() {
      emit("click");
    }
    function onClickAppend() {
      emit("click:append");
    }
    useRender(() => {
      const hasContent = !!(slots.default || props.header);
      const hasAppend = !!(slots.append || props.appendIcon);
      return createVNode("div", {
        "class": ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!props.onClick
        }, backgroundColorClasses.value],
        "style": backgroundColorStyles.value,
        "onClick": onClick
      }, [slots.prepend && createVNode("div", {
        "key": "prepend",
        "class": "v-date-picker-header__prepend"
      }, [slots.prepend()]), hasContent && createVNode(MaybeTransition, {
        "key": "content",
        "name": props.transition
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "key": props.header,
            "class": "v-date-picker-header__content"
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.header])];
        }
      }), hasAppend && createVNode("div", {
        "class": "v-date-picker-header__append"
      }, [!slots.append ? createVNode(VBtn, {
        "key": "append-btn",
        "icon": props.appendIcon,
        "variant": "text",
        "onClick": onClickAppend
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !props.appendIcon,
        "defaults": {
          VBtn: {
            icon: props.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var _a;
          return [(_a = slots.append) == null ? void 0 : _a.call(slots)];
        }
      })])]);
    });
    return {};
  }
});
const makeCalendarProps = propsFactory({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function useCalendar(props) {
  const adapter = useDate();
  const model = useProxiedModel(props, "modelValue", [], (v) => wrapInArray(v));
  const displayValue = computed(() => {
    if (props.displayValue) return adapter.date(props.displayValue);
    if (model.value.length > 0) return adapter.date(model.value[0]);
    if (props.min) return adapter.date(props.min);
    if (Array.isArray(props.allowedDates)) return adapter.date(props.allowedDates[0]);
    return adapter.date();
  });
  const year = useProxiedModel(props, "year", void 0, (v) => {
    const value = v != null ? Number(v) : adapter.getYear(displayValue.value);
    return adapter.startOfYear(adapter.setYear(adapter.date(), value));
  }, (v) => adapter.getYear(v));
  const month = useProxiedModel(props, "month", void 0, (v) => {
    const value = v != null ? Number(v) : adapter.getMonth(displayValue.value);
    const date = adapter.setYear(adapter.startOfMonth(adapter.date()), adapter.getYear(year.value));
    return adapter.setMonth(date, value);
  }, (v) => adapter.getMonth(v));
  const weekDays = computed(() => {
    const firstDayOfWeek = Number(props.firstDayOfWeek ?? 0);
    return props.weekdays.map((day) => (day + firstDayOfWeek) % 7);
  });
  const weeksInMonth = computed(() => {
    const weeks = adapter.getWeekArray(month.value, props.firstDayOfWeek);
    const days = weeks.flat();
    const daysInMonth2 = 6 * 7;
    if (props.weeksInMonth === "static" && days.length < daysInMonth2) {
      const lastDay = days[days.length - 1];
      let week = [];
      for (let day = 1; day <= daysInMonth2 - days.length; day++) {
        week.push(adapter.addDays(lastDay, day));
        if (day % 7 === 0) {
          weeks.push(week);
          week = [];
        }
      }
    }
    return weeks;
  });
  function genDays(days, today) {
    return days.filter((date) => {
      return weekDays.value.includes(adapter.toJsDate(date).getDay());
    }).map((date, index) => {
      const isoDate = adapter.toISO(date);
      const isAdjacent = !adapter.isSameMonth(date, month.value);
      const isStart = adapter.isSameDay(date, adapter.startOfMonth(month.value));
      const isEnd = adapter.isSameDay(date, adapter.endOfMonth(month.value));
      const isSame = adapter.isSameDay(date, month.value);
      return {
        date,
        isoDate,
        formatted: adapter.format(date, "keyboardDate"),
        year: adapter.getYear(date),
        month: adapter.getMonth(date),
        isDisabled: isDisabled(date),
        isWeekStart: index % 7 === 0,
        isWeekEnd: index % 7 === 6,
        isToday: adapter.isSameDay(date, today),
        isAdjacent,
        isHidden: isAdjacent && !props.showAdjacentMonths,
        isStart,
        isSelected: model.value.some((value) => adapter.isSameDay(date, value)),
        isEnd,
        isSame,
        localized: adapter.format(date, "dayOfMonth")
      };
    });
  }
  const daysInWeek = computed(() => {
    const lastDay = adapter.startOfWeek(displayValue.value, props.firstDayOfWeek);
    const week = [];
    for (let day = 0; day <= 6; day++) {
      week.push(adapter.addDays(lastDay, day));
    }
    const today = adapter.date();
    return genDays(week, today);
  });
  const daysInMonth = computed(() => {
    const days = weeksInMonth.value.flat();
    const today = adapter.date();
    return genDays(days, today);
  });
  const weekNumbers = computed(() => {
    return weeksInMonth.value.map((week) => {
      return week.length ? getWeek(adapter, week[0]) : null;
    });
  });
  function isDisabled(value) {
    if (props.disabled) return true;
    const date = adapter.date(value);
    if (props.min && adapter.isAfter(adapter.date(props.min), date)) return true;
    if (props.max && adapter.isAfter(date, adapter.date(props.max))) return true;
    if (Array.isArray(props.allowedDates) && props.allowedDates.length > 0) {
      return !props.allowedDates.some((d) => adapter.isSameDay(adapter.date(d), date));
    }
    if (typeof props.allowedDates === "function") {
      return !props.allowedDates(date);
    }
    return false;
  }
  return {
    displayValue,
    daysInMonth,
    daysInWeek,
    genDays,
    model,
    weeksInMonth,
    weekDays,
    weekNumbers
  };
}
const makeVDatePickerMonthProps = propsFactory({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...makeCalendarProps()
}, "VDatePickerMonth");
const VDatePickerMonth = genericComponent()({
  name: "VDatePickerMonth",
  props: makeVDatePickerMonthProps(),
  emits: {
    "update:modelValue": (date) => true,
    "update:month": (date) => true,
    "update:year": (date) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const daysRef = ref();
    const {
      daysInMonth,
      model,
      weekNumbers
    } = useCalendar(props);
    const adapter = useDate();
    const rangeStart = shallowRef();
    const rangeStop = shallowRef();
    const isReverse = shallowRef(false);
    const transition = computed(() => {
      return !isReverse.value ? props.transition : props.reverseTransition;
    });
    if (props.multiple === "range" && model.value.length > 0) {
      rangeStart.value = model.value[0];
      if (model.value.length > 1) {
        rangeStop.value = model.value[model.value.length - 1];
      }
    }
    const atMax = computed(() => {
      const max = ["number", "string"].includes(typeof props.multiple) ? Number(props.multiple) : Infinity;
      return model.value.length >= max;
    });
    watch(daysInMonth, (val, oldVal) => {
      if (!oldVal) return;
      isReverse.value = adapter.isBefore(val[0].date, oldVal[0].date);
    });
    function onRangeClick(value) {
      const _value = adapter.startOfDay(value);
      if (model.value.length === 0) {
        rangeStart.value = void 0;
      } else if (model.value.length === 1) {
        rangeStart.value = model.value[0];
        rangeStop.value = void 0;
      }
      if (!rangeStart.value) {
        rangeStart.value = _value;
        model.value = [rangeStart.value];
      } else if (!rangeStop.value) {
        if (adapter.isSameDay(_value, rangeStart.value)) {
          rangeStart.value = void 0;
          model.value = [];
          return;
        } else if (adapter.isBefore(_value, rangeStart.value)) {
          rangeStop.value = adapter.endOfDay(rangeStart.value);
          rangeStart.value = _value;
        } else {
          rangeStop.value = adapter.endOfDay(_value);
        }
        const diff = adapter.getDiff(rangeStop.value, rangeStart.value, "days");
        const datesInRange = [rangeStart.value];
        for (let i = 1; i < diff; i++) {
          const nextDate = adapter.addDays(rangeStart.value, i);
          datesInRange.push(nextDate);
        }
        datesInRange.push(rangeStop.value);
        model.value = datesInRange;
      } else {
        rangeStart.value = value;
        rangeStop.value = void 0;
        model.value = [rangeStart.value];
      }
    }
    function onMultipleClick(value) {
      const index = model.value.findIndex((selection) => adapter.isSameDay(selection, value));
      if (index === -1) {
        model.value = [...model.value, value];
      } else {
        const value2 = [...model.value];
        value2.splice(index, 1);
        model.value = value2;
      }
    }
    function onClick(value) {
      if (props.multiple === "range") {
        onRangeClick(value);
      } else if (props.multiple) {
        onMultipleClick(value);
      } else {
        model.value = [value];
      }
    }
    return () => createVNode("div", {
      "class": "v-date-picker-month"
    }, [props.showWeek && createVNode("div", {
      "key": "weeks",
      "class": "v-date-picker-month__weeks"
    }, [!props.hideWeekdays && createVNode("div", {
      "key": "hide-week-days",
      "class": "v-date-picker-month__day"
    }, [createTextVNode(" ")]), weekNumbers.value.map((week) => createVNode("div", {
      "class": ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [week]))]), createVNode(MaybeTransition, {
      "name": transition.value
    }, {
      default: () => {
        var _a;
        return [createVNode("div", {
          "ref": daysRef,
          "key": (_a = daysInMonth.value[0].date) == null ? void 0 : _a.toString(),
          "class": "v-date-picker-month__days"
        }, [!props.hideWeekdays && adapter.getWeekdays(props.firstDayOfWeek).map((weekDay) => createVNode("div", {
          "class": ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [weekDay])), daysInMonth.value.map((item, i) => {
          const slotProps = {
            props: {
              onClick: () => onClick(item.date)
            },
            item,
            i
          };
          if (atMax.value && !item.isSelected) {
            item.isDisabled = true;
          }
          return createVNode("div", {
            "class": ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": item.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": item.isHidden,
              "v-date-picker-month__day--selected": item.isSelected,
              "v-date-picker-month__day--week-end": item.isWeekEnd,
              "v-date-picker-month__day--week-start": item.isWeekStart
            }],
            "data-v-date": !item.isDisabled ? item.isoDate : void 0
          }, [(props.showAdjacentMonths || !item.isAdjacent) && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (item.isSelected || item.isToday) && !item.isDisabled ? props.color : void 0,
                disabled: item.isDisabled,
                icon: true,
                ripple: false,
                text: item.localized,
                variant: item.isDisabled ? item.isToday ? "outlined" : "text" : item.isToday && !item.isSelected ? "outlined" : "flat",
                onClick: () => onClick(item.date)
              }
            }
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.day) == null ? void 0 : _a2.call(slots, slotProps)) ?? createVNode(VBtn, slotProps.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
});
const makeVDatePickerMonthsProps = propsFactory({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths");
const VDatePickerMonths = genericComponent()({
  name: "VDatePickerMonths",
  props: makeVDatePickerMonthsProps(),
  emits: {
    "update:modelValue": (date) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const model = useProxiedModel(props, "modelValue");
    const months = computed(() => {
      let date = adapter.startOfYear(adapter.date());
      if (props.year) {
        date = adapter.setYear(date, props.year);
      }
      return createRange(12).map((i) => {
        const text = adapter.format(date, "monthShort");
        const isDisabled = !!(props.min && adapter.isAfter(adapter.startOfMonth(adapter.date(props.min)), date) || props.max && adapter.isAfter(date, adapter.startOfMonth(adapter.date(props.max))));
        date = adapter.getNextMonth(date);
        return {
          isDisabled,
          text,
          value: i
        };
      });
    });
    watchEffect(() => {
      model.value = model.value ?? adapter.getMonth(adapter.date());
    });
    useRender(() => createVNode("div", {
      "class": "v-date-picker-months",
      "style": {
        height: convertToUnit(props.height)
      }
    }, [createVNode("div", {
      "class": "v-date-picker-months__content"
    }, [months.value.map((month, i) => {
      var _a;
      const btnProps = {
        active: model.value === i,
        color: model.value === i ? props.color : void 0,
        disabled: month.isDisabled,
        rounded: true,
        text: month.text,
        variant: model.value === month.value ? "flat" : "text",
        onClick: () => onClick(i)
      };
      function onClick(i2) {
        if (model.value === i2) {
          emit("update:modelValue", model.value);
          return;
        }
        model.value = i2;
      }
      return ((_a = slots.month) == null ? void 0 : _a.call(slots, {
        month,
        i,
        props: btnProps
      })) ?? createVNode(VBtn, mergeProps({
        "key": "month"
      }, btnProps), null);
    })])]));
    return {};
  }
});
const makeVDatePickerYearsProps = propsFactory({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears");
const VDatePickerYears = genericComponent()({
  name: "VDatePickerYears",
  props: makeVDatePickerYearsProps(),
  emits: {
    "update:modelValue": (year) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const model = useProxiedModel(props, "modelValue");
    const years = computed(() => {
      const year = adapter.getYear(adapter.date());
      let min = year - 100;
      let max = year + 52;
      if (props.min) {
        min = adapter.getYear(adapter.date(props.min));
      }
      if (props.max) {
        max = adapter.getYear(adapter.date(props.max));
      }
      let date = adapter.startOfYear(adapter.date());
      date = adapter.setYear(date, min);
      return createRange(max - min + 1, min).map((i) => {
        const text = adapter.format(date, "year");
        date = adapter.setYear(date, adapter.getYear(date) + 1);
        return {
          text,
          value: i
        };
      });
    });
    watchEffect(() => {
      model.value = model.value ?? adapter.getYear(adapter.date());
    });
    const yearRef = templateRef();
    useRender(() => createVNode("div", {
      "class": "v-date-picker-years",
      "style": {
        height: convertToUnit(props.height)
      }
    }, [createVNode("div", {
      "class": "v-date-picker-years__content"
    }, [years.value.map((year, i) => {
      var _a;
      const btnProps = {
        ref: model.value === year.value ? yearRef : void 0,
        active: model.value === year.value,
        color: model.value === year.value ? props.color : void 0,
        rounded: true,
        text: year.text,
        variant: model.value === year.value ? "flat" : "text",
        onClick: () => {
          if (model.value === year.value) {
            emit("update:modelValue", model.value);
            return;
          }
          model.value = year.value;
        }
      };
      return ((_a = slots.year) == null ? void 0 : _a.call(slots, {
        year,
        i,
        props: btnProps
      })) ?? createVNode(VBtn, mergeProps({
        "key": "month"
      }, btnProps), null);
    })])]));
    return {};
  }
});
const VPickerTitle = createSimpleFunctional("v-picker-title");
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
const makeVPickerProps = propsFactory({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...makeVSheetProps()
}, "VPicker");
const VPicker = genericComponent()({
  name: "VPicker",
  props: makeVPickerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    useRender(() => {
      const sheetProps = VSheet.filterProps(props);
      const hasTitle = !!(props.title || slots.title);
      return createVNode(VSheet, mergeProps(sheetProps, {
        "color": props.bgColor,
        "class": ["v-picker", {
          "v-picker--landscape": props.landscape,
          "v-picker--with-actions": !!slots.actions
        }, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [!props.hideHeader && createVNode("div", {
            "key": "header",
            "class": [backgroundColorClasses.value],
            "style": [backgroundColorStyles.value]
          }, [hasTitle && createVNode(VPickerTitle, {
            "key": "picker-title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
            }
          }), slots.header && createVNode("div", {
            "class": "v-picker__header"
          }, [slots.header()])]), createVNode("div", {
            "class": "v-picker__body"
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), slots.actions && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                slim: true,
                variant: "text"
              }
            }
          }, {
            default: () => [createVNode("div", {
              "class": "v-picker__actions"
            }, [slots.actions()])]
          })];
        }
      });
    });
    return {};
  }
});
const makeVDatePickerProps = propsFactory({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...makeVDatePickerControlsProps(),
  ...makeVDatePickerMonthProps({
    weeksInMonth: "static"
  }),
  ...omit(makeVDatePickerMonthsProps(), ["modelValue"]),
  ...omit(makeVDatePickerYearsProps(), ["modelValue"]),
  ...makeVPickerProps({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker");
const VDatePicker = genericComponent()({
  name: "VDatePicker",
  props: makeVDatePickerProps(),
  emits: {
    "update:modelValue": (date) => true,
    "update:month": (date) => true,
    "update:year": (date) => true,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (date) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      t
    } = useLocale();
    const model = useProxiedModel(props, "modelValue", void 0, (v) => wrapInArray(v), (v) => props.multiple ? v : v[0]);
    const viewMode = useProxiedModel(props, "viewMode");
    const internal = computed(() => {
      var _a;
      const value = adapter.date((_a = model.value) == null ? void 0 : _a[0]);
      return value && adapter.isValid(value) ? value : adapter.date();
    });
    const month = ref(Number(props.month ?? adapter.getMonth(adapter.startOfMonth(internal.value))));
    const year = ref(Number(props.year ?? adapter.getYear(adapter.startOfYear(adapter.setMonth(internal.value, month.value)))));
    const isReversing = shallowRef(false);
    const header = computed(() => {
      if (props.multiple && model.value.length > 1) {
        return t("$vuetify.datePicker.itemsSelected", model.value.length);
      }
      return model.value[0] && adapter.isValid(model.value[0]) ? adapter.format(adapter.date(model.value[0]), "normalDateWithWeekday") : t(props.header);
    });
    const text = computed(() => {
      let date = adapter.date();
      date = adapter.setDate(date, 1);
      date = adapter.setMonth(date, month.value);
      date = adapter.setYear(date, year.value);
      return adapter.format(date, "monthAndYear");
    });
    const headerTransition = computed(() => `date-picker-header${isReversing.value ? "-reverse" : ""}-transition`);
    const minDate = computed(() => {
      const date = adapter.date(props.min);
      return props.min && adapter.isValid(date) ? date : null;
    });
    const maxDate = computed(() => {
      const date = adapter.date(props.max);
      return props.max && adapter.isValid(date) ? date : null;
    });
    const disabled = computed(() => {
      if (props.disabled) return true;
      const targets = [];
      if (viewMode.value !== "month") {
        targets.push(...["prev", "next"]);
      } else {
        let _date = adapter.date();
        _date = adapter.setYear(_date, year.value);
        _date = adapter.setMonth(_date, month.value);
        if (minDate.value) {
          const date = adapter.addDays(adapter.startOfMonth(_date), -1);
          adapter.isAfter(minDate.value, date) && targets.push("prev");
        }
        if (maxDate.value) {
          const date = adapter.addDays(adapter.endOfMonth(_date), 1);
          adapter.isAfter(date, maxDate.value) && targets.push("next");
        }
      }
      return targets;
    });
    function onClickNext() {
      if (month.value < 11) {
        month.value++;
      } else {
        year.value++;
        month.value = 0;
        onUpdateYear(year.value);
      }
      onUpdateMonth(month.value);
    }
    function onClickPrev() {
      if (month.value > 0) {
        month.value--;
      } else {
        year.value--;
        month.value = 11;
        onUpdateYear(year.value);
      }
      onUpdateMonth(month.value);
    }
    function onClickDate() {
      viewMode.value = "month";
    }
    function onClickMonth() {
      viewMode.value = viewMode.value === "months" ? "month" : "months";
    }
    function onClickYear() {
      viewMode.value = viewMode.value === "year" ? "month" : "year";
    }
    function onUpdateMonth(value) {
      if (viewMode.value === "months") onClickMonth();
      emit("update:month", value);
    }
    function onUpdateYear(value) {
      if (viewMode.value === "year") onClickYear();
      emit("update:year", value);
    }
    watch(model, (val, oldVal) => {
      const arrBefore = wrapInArray(oldVal);
      const arrAfter = wrapInArray(val);
      if (!arrAfter.length) return;
      const before = adapter.date(arrBefore[arrBefore.length - 1]);
      const after = adapter.date(arrAfter[arrAfter.length - 1]);
      const newMonth = adapter.getMonth(after);
      const newYear = adapter.getYear(after);
      if (newMonth !== month.value) {
        month.value = newMonth;
        onUpdateMonth(month.value);
      }
      if (newYear !== year.value) {
        year.value = newYear;
        onUpdateYear(year.value);
      }
      isReversing.value = adapter.isBefore(before, after);
    });
    useRender(() => {
      const pickerProps = VPicker.filterProps(props);
      const datePickerControlsProps = VDatePickerControls.filterProps(props);
      const datePickerHeaderProps = VDatePickerHeader.filterProps(props);
      const datePickerMonthProps = VDatePickerMonth.filterProps(props);
      const datePickerMonthsProps = omit(VDatePickerMonths.filterProps(props), ["modelValue"]);
      const datePickerYearsProps = omit(VDatePickerYears.filterProps(props), ["modelValue"]);
      const headerProps = {
        header: header.value,
        transition: headerTransition.value
      };
      return createVNode(VPicker, mergeProps(pickerProps, {
        "class": ["v-date-picker", `v-date-picker--${viewMode.value}`, {
          "v-date-picker--show-week": props.showWeek
        }, props.class],
        "style": props.style
      }), {
        title: () => {
          var _a;
          return ((_a = slots.title) == null ? void 0 : _a.call(slots)) ?? createVNode("div", {
            "class": "v-date-picker__title"
          }, [t(props.title)]);
        },
        header: () => slots.header ? createVNode(VDefaultsProvider, {
          "defaults": {
            VDatePickerHeader: {
              ...headerProps
            }
          }
        }, {
          default: () => {
            var _a;
            return [(_a = slots.header) == null ? void 0 : _a.call(slots, headerProps)];
          }
        }) : createVNode(VDatePickerHeader, mergeProps({
          "key": "header"
        }, datePickerHeaderProps, headerProps, {
          "onClick": viewMode.value !== "month" ? onClickDate : void 0
        }), {
          ...slots,
          default: void 0
        }),
        default: () => createVNode(Fragment, null, [createVNode(VDatePickerControls, mergeProps(datePickerControlsProps, {
          "disabled": disabled.value,
          "text": text.value,
          "onClick:next": onClickNext,
          "onClick:prev": onClickPrev,
          "onClick:month": onClickMonth,
          "onClick:year": onClickYear
        }), null), createVNode(VFadeTransition, {
          "hideOnLeave": true
        }, {
          default: () => [viewMode.value === "months" ? createVNode(VDatePickerMonths, mergeProps({
            "key": "date-picker-months"
          }, datePickerMonthsProps, {
            "modelValue": month.value,
            "onUpdate:modelValue": [($event) => month.value = $event, onUpdateMonth],
            "min": minDate.value,
            "max": maxDate.value,
            "year": year.value
          }), null) : viewMode.value === "year" ? createVNode(VDatePickerYears, mergeProps({
            "key": "date-picker-years"
          }, datePickerYearsProps, {
            "modelValue": year.value,
            "onUpdate:modelValue": [($event) => year.value = $event, onUpdateYear],
            "min": minDate.value,
            "max": maxDate.value
          }), null) : createVNode(VDatePickerMonth, mergeProps({
            "key": "date-picker-month"
          }, datePickerMonthProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "month": month.value,
            "onUpdate:month": [($event) => month.value = $event, onUpdateMonth],
            "year": year.value,
            "onUpdate:year": [($event) => year.value = $event, onUpdateYear],
            "min": minDate.value,
            "max": maxDate.value
          }), null)]
        })]),
        actions: slots.actions
      });
    });
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DateField",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    rounded: { type: Boolean, default: false },
    density: {},
    label: { default: "" },
    min: {},
    max: {},
    variant: { default: "underlined" },
    rules: {}
  }, {
    "date": {},
    "dateModifiers": {},
    "dateStr": {},
    "dateStrModifiers": {}
  }),
  emits: ["update:date", "update:dateStr"],
  setup(__props) {
    const date = useModel(__props, "date");
    const dateStr = useModel(__props, "dateStr");
    const props = __props;
    const rs = ref([
      (v) => {
        if (!props.rules) return true;
        else {
          for (let r of props.rules) {
            const res = r(date.value);
            if (res !== true) return res;
          }
          return true;
        }
      }
    ]);
    const menu = ref(false);
    const selectedDate = ref(null);
    watch(selectedDate, (newDate) => {
      if (newDate) {
        date.value = newDate;
        dateStr.value = dateFormat(newDate, "YYYY-MM-DD");
        menu.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextField, mergeProps({
        readonly: "",
        id: "dateField",
        modelValue: dateStr.value,
        "onUpdate:modelValue": ($event) => dateStr.value = $event,
        label: _ctx.label,
        variant: _ctx.variant,
        density: _ctx.density,
        rules: unref(rs),
        rounded: _ctx.rounded,
        onClick: ($event) => menu.value = true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMenu, {
              activator: "#dateField",
              modelValue: unref(menu),
              "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
              location: "bottom",
              "close-on-content-click": false,
              transition: "scale-transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDatePicker, {
                    class: "rounded-xl",
                    min: _ctx.min,
                    max: _ctx.max,
                    color: "primary",
                    modelValue: unref(selectedDate),
                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                    onInput: ($event) => menu.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDatePicker, {
                      class: "rounded-xl",
                      min: _ctx.min,
                      max: _ctx.max,
                      color: "primary",
                      modelValue: unref(selectedDate),
                      "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                      onInput: ($event) => menu.value = false
                    }, null, 8, ["min", "max", "modelValue", "onUpdate:modelValue", "onInput"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMenu, {
                activator: "#dateField",
                modelValue: unref(menu),
                "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                location: "bottom",
                "close-on-content-click": false,
                transition: "scale-transition"
              }, {
                default: withCtx(() => [
                  createVNode(VDatePicker, {
                    class: "rounded-xl",
                    min: _ctx.min,
                    max: _ctx.max,
                    color: "primary",
                    modelValue: unref(selectedDate),
                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                    onInput: ($event) => menu.value = false
                  }, null, 8, ["min", "max", "modelValue", "onUpdate:modelValue", "onInput"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DateField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  emits: ["update:infos", "submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const values = ref({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "Male",
      contactNum: "",
      birthday: "",
      bdayDate: /* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear() - 16}-01-01`),
      address: "",
      universityEmail: "",
      personalEmail: "",
      yearLvl: "1st",
      membershipStatus: "",
      membershipDescription: "",
      gdscDepartment: "N/A"
    });
    const form = ref(null);
    const submit = async () => {
      var _a;
      if (form.value == void 0) return;
      const { valid } = await ((_a = form.value) == null ? void 0 : _a.validate());
      if (valid) {
        emit("submit", values.value);
      }
    };
    const requireValidate = (t, label) => {
      {
        return (v) => !!v || `${label} is required`;
      }
    };
    const strLenValidate = (len, label, less = true) => {
      return (v) => (less ? (v == null ? void 0 : v.length) <= len : (v == null ? void 0 : v.length) >= len) || `${label} needs to be ${less ? "short than" : "at least"} ${len} characters.`;
    };
    const digitLenValidate = (digitLen, label) => {
      return (v) => new RegExp(`^[0-9-]{${digitLen},}$`).test(v) || `${label} needs to be at least ${digitLen} digits.`;
    };
    const emailValidate = (label = "Email", allowEmpty = false) => {
      return (v) => !v && allowEmpty ? true : /.+@.+\..+/.test(v) || `${label} must be valid`;
    };
    const titles = ["Personal Information", "School Information", "Membership Information"];
    const hintGroups = [
      [
        ["First Name", true, "firstName", "4", "text", [strLenValidate(3, "First Name", false)]],
        ["Middle Name", false, "middleName", "4", "text", []],
        ["Last Name", true, "lastName", "4", "text", [strLenValidate(3, "Last Name", false)]]
      ],
      [
        ["Gender", true, "gender", "4", "selector", [], [
          "Male",
          "Female",
          "Other"
          /* other */
        ]],
        ["Contact Number", true, "contactNum", "8", "text", [digitLenValidate(7, "Contact Number")]]
      ],
      [
        ["Birthday", true, "birthday", "4", "date", [], "bdayDate", [-2524608e3, 0]],
        ["Address", true, "address", "8", "text", [strLenValidate(3, "Address", false)]]
      ],
      [
        ["University Email", false, "universityEmail", "12", "text", [emailValidate("University Email", true)]]
      ],
      [
        ["Personal Email", true, "personalEmail", "12", "text", [emailValidate("Personal Email")]]
      ],
      [
        ["Year Level", true, "yearLvl", "4", "selector", [], ["1st", "2nd", "3rd", "4th"]]
      ],
      [
        ["Status", true, "membershipStatus", "6", "text", []],
        ["Description", true, "membershipDescription", "6", "text", []]
      ],
      [
        ["GDSC Department", true, "gdscDepartment", "6", "selector", [strLenValidate(3, "GDSC Department", false)], ["Developer Lead", "...", "N/A"]]
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DateField = _sfc_main$1;
      _push(ssrRenderComponent(VCard, mergeProps({
        border: "opacity-100 sm",
        class: "px-2 pb-8 pt-3 text-start",
        style: { "border-radius": "40px" },
        width: "340",
        elevation: "12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VForm, {
              onSubmit: submit,
              ref_key: "form",
              ref: form
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList([[0, 3], [3, 6], [6, 8]], (indexes, j) => {
                    _push3(`<div class="my-0" data-v-c74af75e${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCardTitle, {
                      class: "py-0 mt-0 mb-2",
                      style: { "font-size": "13px", "font-weight": "900", "color": "black" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(titles[j])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(titles[j]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<!--[-->`);
                    ssrRenderList(hintGroups.slice(indexes[0], indexes[1]), (hints, i) => {
                      _push3(ssrRenderComponent(VRow, {
                        class: "my-0 mx-1",
                        key: i
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(hints, (hint, index) => {
                              _push4(ssrRenderComponent(VCol, {
                                class: "my-0 pt-0 pb-0 px-2",
                                key: index,
                                cols: hint[3]
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    if (hint[4] === "text") {
                                      _push5(ssrRenderComponent(VTextField, {
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        modelValue: unref(values)[hint[2]],
                                        "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                        variant: "solo",
                                        rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                      }, null, _parent5, _scopeId4));
                                    } else if (hint[4] === "selector") {
                                      _push5(ssrRenderComponent(VSelect, {
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        modelValue: unref(values)[hint[2]],
                                        "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                        variant: "solo",
                                        items: hint[6],
                                        rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                      }, null, _parent5, _scopeId4));
                                    } else if (hint[4] === "date") {
                                      _push5(ssrRenderComponent(_component_DateField, {
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        dateStr: unref(values)[hint[2]],
                                        "onUpdate:dateStr": ($event) => unref(values)[hint[2]] = $event,
                                        date: unref(values)[hint[6]],
                                        "onUpdate:date": ($event) => unref(values)[hint[6]] = $event,
                                        min: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][0] * 1e3),
                                        max: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][1] * 1e3),
                                        variant: "solo",
                                        rules: (
                                          /* @ts-ignore */
                                          hint[5]
                                        )
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      hint[4] === "text" ? (openBlock(), createBlock(VTextField, {
                                        key: 0,
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        modelValue: unref(values)[hint[2]],
                                        "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                        variant: "solo",
                                        rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rules"])) : hint[4] === "selector" ? (openBlock(), createBlock(VSelect, {
                                        key: 1,
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        modelValue: unref(values)[hint[2]],
                                        "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                        variant: "solo",
                                        items: hint[6],
                                        rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items", "rules"])) : hint[4] === "date" ? (openBlock(), createBlock(_component_DateField, {
                                        key: 2,
                                        rounded: "",
                                        density: "compact",
                                        label: hint[0] + (hint[1] ? " *" : ""),
                                        dateStr: unref(values)[hint[2]],
                                        "onUpdate:dateStr": ($event) => unref(values)[hint[2]] = $event,
                                        date: unref(values)[hint[6]],
                                        "onUpdate:date": ($event) => unref(values)[hint[6]] = $event,
                                        min: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][0] * 1e3),
                                        max: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][1] * 1e3),
                                        variant: "solo",
                                        rules: (
                                          /* @ts-ignore */
                                          hint[5]
                                        )
                                      }, null, 8, ["label", "dateStr", "onUpdate:dateStr", "date", "onUpdate:date", "min", "max", "rules"])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(hints, (hint, index) => {
                                return openBlock(), createBlock(VCol, {
                                  class: "my-0 pt-0 pb-0 px-2",
                                  key: index,
                                  cols: hint[3]
                                }, {
                                  default: withCtx(() => [
                                    hint[4] === "text" ? (openBlock(), createBlock(VTextField, {
                                      key: 0,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      modelValue: unref(values)[hint[2]],
                                      "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                      variant: "solo",
                                      rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rules"])) : hint[4] === "selector" ? (openBlock(), createBlock(VSelect, {
                                      key: 1,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      modelValue: unref(values)[hint[2]],
                                      "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                      variant: "solo",
                                      items: hint[6],
                                      rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items", "rules"])) : hint[4] === "date" ? (openBlock(), createBlock(_component_DateField, {
                                      key: 2,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      dateStr: unref(values)[hint[2]],
                                      "onUpdate:dateStr": ($event) => unref(values)[hint[2]] = $event,
                                      date: unref(values)[hint[6]],
                                      "onUpdate:date": ($event) => unref(values)[hint[6]] = $event,
                                      min: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][0] * 1e3),
                                      max: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][1] * 1e3),
                                      variant: "solo",
                                      rules: (
                                        /* @ts-ignore */
                                        hint[5]
                                      )
                                    }, null, 8, ["label", "dateStr", "onUpdate:dateStr", "date", "onUpdate:date", "min", "max", "rules"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["cols"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(VRow, { class: "mt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "text-none mx-auto bg-red",
                          size: "small",
                          color: "white",
                          "min-width": "130",
                          onClick: submit,
                          rounded: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Apply`);
                            } else {
                              return [
                                createTextVNode("Apply")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "text-none mx-auto bg-red",
                            size: "small",
                            color: "white",
                            "min-width": "130",
                            onClick: submit,
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Apply")
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
                    (openBlock(), createBlock(Fragment, null, renderList([[0, 3], [3, 6], [6, 8]], (indexes, j) => {
                      return createVNode("div", {
                        class: "my-0",
                        key: j
                      }, [
                        createVNode(VCardTitle, {
                          class: "py-0 mt-0 mb-2",
                          style: { "font-size": "13px", "font-weight": "900", "color": "black" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(titles[j]), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(hintGroups.slice(indexes[0], indexes[1]), (hints, i) => {
                          return openBlock(), createBlock(VRow, {
                            class: "my-0 mx-1",
                            key: i
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(hints, (hint, index) => {
                                return openBlock(), createBlock(VCol, {
                                  class: "my-0 pt-0 pb-0 px-2",
                                  key: index,
                                  cols: hint[3]
                                }, {
                                  default: withCtx(() => [
                                    hint[4] === "text" ? (openBlock(), createBlock(VTextField, {
                                      key: 0,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      modelValue: unref(values)[hint[2]],
                                      "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                      variant: "solo",
                                      rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rules"])) : hint[4] === "selector" ? (openBlock(), createBlock(VSelect, {
                                      key: 1,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      modelValue: unref(values)[hint[2]],
                                      "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                      variant: "solo",
                                      items: hint[6],
                                      rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items", "rules"])) : hint[4] === "date" ? (openBlock(), createBlock(_component_DateField, {
                                      key: 2,
                                      rounded: "",
                                      density: "compact",
                                      label: hint[0] + (hint[1] ? " *" : ""),
                                      dateStr: unref(values)[hint[2]],
                                      "onUpdate:dateStr": ($event) => unref(values)[hint[2]] = $event,
                                      date: unref(values)[hint[6]],
                                      "onUpdate:date": ($event) => unref(values)[hint[6]] = $event,
                                      min: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][0] * 1e3),
                                      max: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][1] * 1e3),
                                      variant: "solo",
                                      rules: (
                                        /* @ts-ignore */
                                        hint[5]
                                      )
                                    }, null, 8, ["label", "dateStr", "onUpdate:dateStr", "date", "onUpdate:date", "min", "max", "rules"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["cols"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]);
                    }), 64)),
                    createVNode(VRow, { class: "mt-0" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "text-none mx-auto bg-red",
                          size: "small",
                          color: "white",
                          "min-width": "130",
                          onClick: submit,
                          rounded: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Apply")
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
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"]),
                ref_key: "form",
                ref: form
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList([[0, 3], [3, 6], [6, 8]], (indexes, j) => {
                    return createVNode("div", {
                      class: "my-0",
                      key: j
                    }, [
                      createVNode(VCardTitle, {
                        class: "py-0 mt-0 mb-2",
                        style: { "font-size": "13px", "font-weight": "900", "color": "black" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(titles[j]), 1)
                        ]),
                        _: 2
                      }, 1024),
                      (openBlock(true), createBlock(Fragment, null, renderList(hintGroups.slice(indexes[0], indexes[1]), (hints, i) => {
                        return openBlock(), createBlock(VRow, {
                          class: "my-0 mx-1",
                          key: i
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(hints, (hint, index) => {
                              return openBlock(), createBlock(VCol, {
                                class: "my-0 pt-0 pb-0 px-2",
                                key: index,
                                cols: hint[3]
                              }, {
                                default: withCtx(() => [
                                  hint[4] === "text" ? (openBlock(), createBlock(VTextField, {
                                    key: 0,
                                    rounded: "",
                                    density: "compact",
                                    label: hint[0] + (hint[1] ? " *" : ""),
                                    modelValue: unref(values)[hint[2]],
                                    "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                    variant: "solo",
                                    rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rules"])) : hint[4] === "selector" ? (openBlock(), createBlock(VSelect, {
                                    key: 1,
                                    rounded: "",
                                    density: "compact",
                                    label: hint[0] + (hint[1] ? " *" : ""),
                                    modelValue: unref(values)[hint[2]],
                                    "onUpdate:modelValue": ($event) => unref(values)[hint[2]] = $event,
                                    variant: "solo",
                                    items: hint[6],
                                    rules: (hint[1] ? [requireValidate("string", hint[0])] : []).concat(hint[5])
                                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items", "rules"])) : hint[4] === "date" ? (openBlock(), createBlock(_component_DateField, {
                                    key: 2,
                                    rounded: "",
                                    density: "compact",
                                    label: hint[0] + (hint[1] ? " *" : ""),
                                    dateStr: unref(values)[hint[2]],
                                    "onUpdate:dateStr": ($event) => unref(values)[hint[2]] = $event,
                                    date: unref(values)[hint[6]],
                                    "onUpdate:date": ($event) => unref(values)[hint[6]] = $event,
                                    min: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][0] * 1e3),
                                    max: new Date(Date.parse((/* @__PURE__ */ new Date()).toString()) + hint[7][1] * 1e3),
                                    variant: "solo",
                                    rules: (
                                      /* @ts-ignore */
                                      hint[5]
                                    )
                                  }, null, 8, ["label", "dateStr", "onUpdate:dateStr", "date", "onUpdate:date", "min", "max", "rules"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["cols"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]);
                  }), 64)),
                  createVNode(VRow, { class: "mt-0" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "text-none mx-auto bg-red",
                        size: "small",
                        color: "white",
                        "min-width": "130",
                        onClick: submit,
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Apply")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1536)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c74af75e"]]);
export {
  __nuxt_component_6 as _
};
//# sourceMappingURL=Form-CFbpCbpx.js.map
