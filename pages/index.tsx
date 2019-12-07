import React from 'react';
import {HomeScreen} from '../components/screens/home-screen'
import {withRoot} from '../hoc/with-root'

const Home: React.FC = ({  }) => (
  <HomeScreen />
)

export default withRoot()(Home)
