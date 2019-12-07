import { NavigationParams } from "react-navigation";

interface LinkableArgs {
  routeName: string
  params?: NavigationParams
}
export interface Linker {
  navigate: (args: LinkableArgs) => void
}

export type LinkComponent<T = Dictionary<any>> = React.FC<LinkableArgs & T>