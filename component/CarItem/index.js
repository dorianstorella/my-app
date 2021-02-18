import React from 'react';
import {View, Text ,ImageBackground} from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

const CarItem = (props) => {
    
  const {name, tagline, taglineCTA, image  } = props.car;

  return (
          
    <View style={styles.carContainer}>    
      <ImageBackground 
      source={image} 
      style={styles.image} 
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>
      
      <View style={styles.ButtonContainer}>
        <StyleButton 
          type="primary" 
          content={"Custom Order"} 
          onPress={()=> {
            console.warn("0custom was pressed ");
          }} 
        />
      
        <StyleButton 
          type="secondary" 
          content={"Existing Inventory"} 
          onPress={()=> {
            console.warn("existing Inventory was pressed ");
          }} 
        />
      </View>
    </View>      
      );
  };
  export default CarItem;