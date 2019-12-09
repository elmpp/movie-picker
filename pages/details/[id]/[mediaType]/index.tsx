/**
 *  - dynamic routing in nextjs - https://tinyurl.com/uaz3axf
 *  - Nextjs typescript - https://tinyurl.com/up4s2hc
 */

import React from 'react';
import {DetailsScreen, DetailsScreenProps} from '../../../../components/screens/details-screen'
import {withRoot} from '../../../../lib/hoc/with-root.web'
import { NextPage } from 'next';

const Details: NextPage<DetailsScreenProps, {}> = ({ screenRouteParams }) => (
  <DetailsScreen screenRouteParams={screenRouteParams} />
)
Details.getInitialProps = async ({query}) => {
  console.log('router.query :', query);
  return {
    screenRouteParams: query,
  }
}

export default withRoot()(Details)