
import React, { Component } from 'react';
import {
    Text,ScrollView,View,StyleSheet,Image
} from "react-native"


export default  class TabOneScreen extends Component{

    static navigationOptions={
        header:null,
        tabBarLabel: '项目一',//tab
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/account_pre.png')}
                style={[styles.icon]}
            />
        ),
    };

    constructor(){
        super();
        this.state={
            disable:false
        }
    }

    _updateBtnState=()=>{
        this.setState({
            disable:!this.state.disable
        })
    }

    render(){
        return (
            <ScrollView>
              <Text>TabOne</Text>
            </ScrollView>
        );
    }
}


const styles=StyleSheet.create({
   margins:{
       margin:8,
   },
    icon: {
        width: 20,
        height: 20,
    },
});