
import React, { Component } from 'react';
import {
    Button, FlatList, Image, Text, View,ScrollView,Alert
} from "react-native"
import Post from "./Post";


export default  class FetchScreen extends Component{

    static navigationOptions={
        title:"网络请求",
        header:null //隐藏标题栏
    };


    constructor(){
        super();
        this.state={
            posts:[]
        }
    }


    _keyExtractor(item,index){
        return item._id;
    }


    _onItemPress=()=>{
        // iOS和Android上都可用
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

    handlerButtonClick(){
            fetch("http://gank.io/api/data/Android/10/1")
                .then((response)=> response.json())
                .then((responseJson)=>{
                    this.setState({
                        posts:responseJson.results
                    })
                })
            .catch((error)=>{
                console.error(error);
        });
    }


    render(){
        return (
            <ScrollView>
            <Button title="从网络获取数据" onPress={this.handlerButtonClick.bind(this)}/>
            <FlatList data={this.state.posts}
                      renderItem={({item})=><Post post={item}  onPressItem={this._onItemPress}/>}
                      keyExtractor={this._keyExtractor}

            />
            </ScrollView>
        );
    }
}