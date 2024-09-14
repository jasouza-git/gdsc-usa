import { l as propsFactory, A as getCurrentInstance } from "../server.mjs";
const makeComponentProps = propsFactory({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function useRender(render) {
  const vm = getCurrentInstance("useRender");
  vm.render = render;
}
export {
  makeComponentProps as m,
  useRender as u
};
//# sourceMappingURL=useRender-DTeZIzyd.js.map
