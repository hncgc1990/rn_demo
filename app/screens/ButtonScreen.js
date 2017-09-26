
import React, { Component } from 'react';
import {
    Button,ScrollView,View,StyleSheet,Text
} from "react-native"


export default  class ButtonScreen extends Component{

    static navigationOptions={
        title:"按钮"
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
                <View style={styles.margins}>
            <Button title="切换状态" color="#665500" onPress={this._updateBtnState}/>
                </View>
                <View style={styles.margins}>
            <Button title="按钮状态" color="#665500" onPress={()=>console.log("onclick")} disabled={this.state.disable}/>
                </View>

                <Text>{this.props.navigation.state.key}</Text>
            </ScrollView>
        );
    }
}


const styles=StyleSheet.create({
   margins:{
       margin:8,
   }
});