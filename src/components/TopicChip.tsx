import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Box, Text } from 'native-base';

interface TopicChipProps {
  topic: string;
  selected: boolean;
  onPress: () => void;
}

const screenWidth = Dimensions.get('window').width;
const chipWidth = screenWidth / 3 - 20;

const TopicChip: React.FC<TopicChipProps> = ({ topic, selected, onPress }) => {
  const backgroundColor = selected ? '#007aff' : '#f0f0f0';
  const textColor = selected ? 'white' : 'black';

  return (
    <TouchableOpacity onPress={onPress} style={[styles.topicButton, { backgroundColor }]}>
      <Box style={styles.topicBox}>
        <Text style={[styles.topicText, { color: textColor }]}>{topic}</Text>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    topicButton: {
      marginRight: 10,
      marginBottom: 10,
      width: chipWidth,
      borderRadius: 20,
      overflow: 'hidden', // Ensure the content stays within the rounded borders
    },
    topicBox: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',

    },
    topicText: {
      color: 'black',
    },
  });

export default TopicChip;
