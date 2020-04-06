import { TouchableOpacity, Image, View, Alert, NativeModules } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';

function BarButton(prop) {
  return <TouchableOpacity onPress={prop.onPress}>
    <Image source={prop.source} style={{ width: 40, height: 40 }} />
  </TouchableOpacity>
}

function ToolBar(prop) {
  return <View style={{ height: 50, justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
    <BarButton onPress= {
        () => {
          infoWebview.injectJavaScript("location.href='" + infoWebview.props.source.uri + "'")
        }
      }
      source={{ uri: 'icon_home' }}
    />
    <BarButton
      onPress={
        () => {
          this.infoWebview.goBack()
        }
      }
      source={{ uri: 'icon_back' }}
    />
    <BarButton onPress={
      () => {
          this.infoWebview.goForward()
        }
      }
      source={{ uri: 'icon_forward' }}
    />
    <BarButton onPress={
      () => {
          this.infoWebview.reload()
        }
      }
      source={{ uri: 'icon_refresh' }}
    />
    <BarButton onPress={
        () => {
          Alert.alert(
            '提示',
            '是否退出 App',
            [
              { text: '不要', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: '好', onPress: () => NativeModules.Helper.addEvent('Birthday Party', '4 Privet Drive, Surrey') },
            ],
            { cancelable: false }
          )
        }
      }
      source={{ uri: 'icon_exit' }}
    />
  </View>
}

export default function InfoViewer(prop) {
  return <View style={{
    flex: 1,
    marginTop: 0,
    backgroundColor: "#EFEFF4"
  }}>
    <WebView
      ref={ref => (infoWebview = ref)}
      useWebKit={true}
      scrollEnabled={true}
      mediaPlaybackRequiresUserAction = {false}
      originWhitelist={["*"]}
      source={{ uri: prop.url }}
      onNavigationStateChange={navState => {
        if (!navState.url.startsWith("http")) {
          NativeModules.Helper.show(navState.url)
        }
      }}
    />
    <ToolBar url={prop.url}/>
  </View>
  
}