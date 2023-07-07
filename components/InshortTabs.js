import React, { useState } from 'react';
import NewsScreen from '../Screens/NewsScreen';
import DiscoverScreen from '../Screens/DiscoverScreen';
import {View, Text, useWindowDimensions} from "react-native"
import { SceneMap, TabView } from 'react-native-tab-view';
import TopNavigation from './TopNavigation';

const InshortTabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(1);

    const [routes] = useState([
        {key: "first", title: "Discover"},
        {key: "second", title: "News"},
    ]); 

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second:NewsScreen
    })
     
  return (
    <TabView navigationState = {{index, routes}}
    renderScene = {renderScene}
    onIndexChange= {setIndex}
    initialLayout = {{width: layout.width}}
    renderTabBar={() => <TopNavigation 
        index = {index}
        setIndex={setIndex}
    />}
    />
   

  )
}

export default InshortTabs;
