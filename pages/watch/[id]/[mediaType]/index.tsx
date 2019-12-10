/**
 *  - dynamic routing in nextjs - https://tinyurl.com/uaz3axf
 *  - Nextjs typescript - https://tinyurl.com/up4s2hc
 */

import React from 'react';
import {WatchScreen, WatchScreenProps} from '../../../../components/screens/watch-screen'
import {withRoot} from '../../../../lib/hoc/with-root.web'
import { NextPage } from 'next';

const Watch: NextPage<WatchScreenProps, {}> = ({ screenRouteParams }) => (
  <WatchScreen screenRouteParams={screenRouteParams} />
)
Watch.getInitialProps = async ({query}) => {
  return {
    screenRouteParams: query,
  }
}

export default withRoot()(Watch)