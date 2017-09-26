/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View,
    ScrollView,
    Navigator,
    Alert
} from 'react-native';

import {StackNavigator,TabNavigator} from 'react-navigation';

import ButtonScreen from './app/screens/ButtonScreen'
import ImageScreen from './app/screens/ImageScreen'
import FetchScreen from './app/screens/FetchScreen'
import TabOneScreen from './app/screens/tab/TabOneScreen'
import TabTwoScreen from './app/screens/tab/TabTwoScreen'
import TabThreeScreen from './app/screens/tab/TabThreeScreen'
import TabFourScreen from './app/screens/tab/TabFourScreen'


export default class AwesomeProject extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };


    _showAlert=()=>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

  render(){
      const { navigate } = this.props.navigation;

    return (
        <ScrollView>
      <View style={styles.container}>

          <View style={styles.btn}>
          <Button onPress={()=>navigate('Button')} title="跳转到按钮" />
          </View>
          <View style={styles.btn}>
          <Button onPress={()=>navigate('Image')} title="跳转到图片" />
          </View>
          <View style={styles.btn}>
          <Button onPress={()=>navigate('Fetch')} title="跳转到网络" />
          </View>

          <View style={styles.btn}>
              <Button onPress={this._showAlert} title="弹窗" />
          </View>

          <View style={styles.btn}>
              <Button onPress={()=>navigate('Tab',{headerMode:'none'})} title="tab栏" />
          </View>

          <View style={styles.btn}>
              <Button onPress={()=>navigate('CustomTab')} title="自定义Tab" />
          </View>

          <View style={styles.btn}>
              <Button onPress={()=>navigate('Tab')} title="自定义标题" />
          </View>

      </View>
        </ScrollView>
    );
  }
}


const TabScreenNavigator = TabNavigator({
    Recent: { screen: ImageScreen },
    All: { screen: ButtonScreen },
});

const CustomerTabNavigator=TabNavigator({
   One:{screen:TabOneScreen},
   Two:{screen:TabTwoScreen},
   Three:{screen:TabThreeScreen},
   Four:{screen:TabFourScreen},
},{
    tabBarPosition:'bottom',//设置tabbar显示位置 'top' or 'bottom'
    tabBarOptions:{
        showIcon:true, //是否显示图标
        indicatorStyle:{//android中indicator的样式
            height:0
        },
        style:{
            backgroundColor:'#fff',
            height:50,
        },

        tabStyle:{
            // backgroundColor:'red'
            paddingTop:4,
            paddingBottom:4,
        },
        labelStyle:{
            fontSize:14,
            marginTop:0,
        },
        activeTintColor:'red',
        inactiveTintColor:'#3e3e3e',
        pressOpacity:1,

    }
});


const App=StackNavigator({
    Main:{screen:AwesomeProject},
    Button:{screen:ButtonScreen},
    Image:{screen:ImageScreen},
    Fetch:{screen:FetchScreen},
    Tab:{screen:TabScreenNavigator,
        navigationOptions:{
            header:null,//隐藏标题栏
        },
    },
    CustomTab:{screen:CustomerTabNavigator}
},{
    initialRouteName: 'Main', // 默认显示界面
    mode: 'card',  // 页面切换模式, (默认)左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    navigationOptions:{
        gesturesEnabled:true, //是否开启滑动退出界面 ios默认开启,android默认关闭
        headerTitleStyle:{ //设置标题文字的样式
            backgroundColor:'blue',
            color:'red',
            fontSize:12

        },
        headerStyle:{ //设置整个标题栏的样式
            backgroundColor:'skyblue',
        }
    },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    btn:{
      marginTop:10
    }

});

AppRegistry.registerComponent('AwesomeProject', () => App);
