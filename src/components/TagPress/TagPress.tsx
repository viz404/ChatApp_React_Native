import {View, Text, Pressable} from 'react-native';
import React from 'react';

import {light, dark} from './stylesTagPress';

type TagPressProps = {
  title: String;
  onPress?: Function;
};

const TagPress = ({title, onPress}: TagPressProps) => {
  let theme = 'dark';

  const styles = theme == 'dark' ? dark : light;

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onPress && (
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>X</Text>
        </Pressable>
      )}
    </View>
  );
};

export default TagPress;
