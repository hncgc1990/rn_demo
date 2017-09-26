
import React from 'react';
import {
    Button, FlatList, Image, Text, View,StyleSheet,TouchableOpacity
} from "react-native"


export default  class Post extends React.PureComponent{

    _click=()=>{
        this.props.onPressItem();
        console.log("点击了按钮");
    }

    render(){
        let post =this.props.post;
        return (

            <TouchableOpacity   style={styles.container} onPress={this._click}>

                <Text>{post.desc}</Text>
                <View >
                {this.renderImage(post.images)}
                </View>
            </TouchableOpacity >

        );
    }


    renderImage(images){
        if(images!=undefined && images!=null && images.length>0){
            console.log(images[0]);
            return (
              <Image
                 source={{uri:images[0]}}
                  style={styles.images}/>
            );
        }
    }
}


const styles=StyleSheet.create(
    {
        container:{
           borderWidth:1,
            borderColor:"#f1f1f1",
            margin:8,
            padding:8,
            backgroundColor:'white',
            borderRadius:4
        },
        images:{
            height:200,
            resizeMode: 'cover',
        }
    }
)