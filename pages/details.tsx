import React from 'react';
import {DetailsScreen} from '../components/screens/details-screen'
import {withRoot} from '../lib/hoc/with-root'

const Details: React.FC = ({  }) => (
  <DetailsScreen />
)

export default withRoot()(Details)
