import { NavigationParams } from "react-navigation";
import { RouteName } from "../routes";

interface LinkableArgs {
  routeName: RouteName
  params?: NavigationParams
}
export interface Linker {
  navigate: (args: LinkableArgs) => void
}

export type LinkComponent<T = Dictionary<any>> = React.FC<LinkableArgs & T>