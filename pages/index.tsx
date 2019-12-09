import React from 'react';
import {HomeScreen} from '../components/screens/home-screen'
import {withRoot} from '../lib/hoc/with-root.web'
import { NextPage } from 'next'

const Home: NextPage = ({}) => (
  <HomeScreen />
)

export default withRoot()(Home)
