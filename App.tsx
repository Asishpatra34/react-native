import React from 'react';
import Form from './components/Form';
import MyList from './components/MyList';
import {
  SafeAreaView,
  SectionList,
  SectionListComponent,
  Text,
} from 'react-native';
import Grid from './components/Grid';
import ComponentFlatList from './components/ComponentFlatList';
import UseEffectHook from './components/UseEffectHook';
import SectionMyList from './components/SectionMyList';
import ShowHideComponent from './components/ShowHideComponent';
import UseeffectForUnmountLifeCycle from './components/UseeffectForUnmountLifeCycle';
import SetIntervalComponent from './components/SetIntervalComponent';
import ResponsiveUiWIthFlex from './components/ResponsiveUiWIthFlex';
import MyTouchableHighlight from './components/MyTouchableHighlight';
import MyTouchableOpacity from './components/MyTouchableOpacity';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ResponsiveUiWIthFlex />
    </SafeAreaView>
  );
};

export default App;
