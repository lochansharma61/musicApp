import React, { Component } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'native-base';
import {styles} from './styles'

export default class MusicCard extends Component {

   constructor(props) {
     super(props)
    this.state = {
    };
   }

  render() {
      let {image, title, onPress} =this.props
     return (
       <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
         <Card style={styles.card}>
          <Image style={styles.albumImage} source={{uri:image}} resizeMode={'cover'}/>   
          <Text style={styles.albumName} numberOfLines={2}>{title}</Text>     
         </Card>
       </TouchableOpacity>
     )
  }
 }