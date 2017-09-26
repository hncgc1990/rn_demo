
import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet, ScrollView
} from "react-native"


export default  class ImageScreen extends Component{

    static navigationOptions={
      title:"图片"
    };



    render(){
        return (
            <ScrollView rr>
                <Text>本地图片</Text>
                <Image source={require('../img/dd.jpg')} style={styles.img}/>
                <Text>直接读取安卓drawable内的图片</Text>
                <Image source={{uri:'ic_launcher'}} style={{width:50,height:50}}/>
                <Text>从网络里获取图片</Text>
                <Image source={{uri:"http://img.gank.io/cc9e461f-3e8d-456f-bba5-e15b80509dfb"}}
                        style={styles.img}/>

            </ScrollView>

        );
    }
}

const styles=StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
   img:{
       width:100,
       height:100,
   }
});