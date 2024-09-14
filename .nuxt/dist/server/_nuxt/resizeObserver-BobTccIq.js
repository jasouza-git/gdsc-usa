import { ref, readonly } from "vue";
import { V as templateRef } from "../server.mjs";
function useResizeObserver(callback) {
  const resizeRef = templateRef();
  const contentRect = ref();
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
export {
  useResizeObserver as u
};
//# sourceMappingURL=resizeObserver-BobTccIq.js.map
