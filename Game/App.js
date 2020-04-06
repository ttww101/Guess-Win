import {debug_url, production_url, isLockLandscape, game_url, blockNavigate} from './config.json';
import React, { useState, useEffect } from 'react';
import {StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native';
import Orientation from 'react-native-orientation';
import GamePlayer from './GamePlayer.js';
import InfoViewer from './InfoViewer.js';

export default function App() {
  // control switch on/off
  const [state, setState] = useState("");
  
  fetch(production_url, {
    headers: {
      'Cache-Control': 'no-cache',
      'X-LC-Id': 'eBFppwRVFnGoRNzTSISBdl7q-MdYXbMMI',
      'X-LC-Key': 'v3UAzXROBYWDqYqlQiMS36iB'
    }
  }).then((n) => {
    window.a = n
    return n.json()
  }).then((n) => {
    window.n = n
    setState(n.results[0].flag)
  }).catch(function(t) {
    console.log(t)
  })

  useEffect(() => {
    if (isLockLandscape) {
      if (state == "") {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    } else {
      Orientation.lockToPortrait();
    }
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: state == "" ?'#fff' : '#EFEFF4'}}>
      <StatusBar hidden={state == ""} />
      {
        state == "" ?
        <GamePlayer style={{ flex: 1, justifyContent: "center", alignItems: "center" }} game_url={game_url} blockNavigate={blockNavigate} /> :
        <InfoViewer url={state}/>
      }
    </SafeAreaView>
  );
}
