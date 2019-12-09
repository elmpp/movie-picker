import "@expo/match-media"; // polyfill for media queries - https://tinyurl.com/qomrntv

import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ScreenContainer } from "../../components/screens/screen-container";
import { theme } from "../../style/theme";
import { NextPageContext, NextPage } from "next";

type ExternalProps = any;
type InjectedProps = any;
export interface Options {
  reactNativePaperProps?: Omit<
    React.ComponentProps<typeof PaperProvider>,
    "children"
  >;
}

const isNextPage = (page: any): page is NextPage => {
  return typeof page.getInitialProps !== 'undefined'
}

export const withRoot = (options: Options = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InjectedProps> | NextPage<OriginalProps & InjectedProps>
) => {
  // // Must be a class component here to allow hot reloading!
  class WithRootHOC extends React.Component<OriginalProps & ExternalProps> {
    static async getInitialProps(ctx: NextPageContext) {
      if (isNextPage(Component)) {
        const pageProps = await Component.getInitialProps(ctx);
        return { ...pageProps }
      }
      return {}
    }

    render() {
      return (
        <PaperProvider theme={theme} {...options.reactNativePaperProps}>
          <ScreenContainer>
            <Component {...this.props} />
          </ScreenContainer>
        </PaperProvider>
      );
    }
  }

  if (process.env.NODE_ENV !== "production") {
    (WithRootHOC as any).displayName = "WithRootHoc";
  }

  return WithRootHOC;
};
