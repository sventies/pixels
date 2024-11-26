import { co, CoList } from "jazz-tools";

class ColorList extends CoList.Of(co.string) {}

class ColorGrid extends CoList.Of(co.ref(ColorList)) {}

export { ColorList, ColorGrid };
