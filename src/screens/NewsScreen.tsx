import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Spinner, View, Text, FlatList} from 'native-base';
import NewsCard from '../components/NewsCard';
import TopicChip from '../components/TopicChip';
import ToggleTheme from '../components/ToggleTheme';
import useNewsApi from '../hooks/useNewsApi';
import { News } from '../types/News';


const NewsScreen: React.FC = () => {
  const topics = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];
  const [selectedTopic, setSelectedTopic] = useState('');
  const {news, isLoading, error} = useNewsApi(selectedTopic);

  const handleTopicPress = (topic: string) => {
    setSelectedTopic(topic);
  };

  const renderNewsItem = ({item}: {item: News}) => (
    <NewsCard
      title={item.title}
      imageSource={{uri : item.urlToImage}}
      description={item.description}
      newsUrl={item.url}
      author={item.author}
      publishedAt={item.publishedAt}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ToggleTheme />
      </View>
      <View style={styles.topicsContainer}>
        {topics.map(topic => (
          <TopicChip
            key={topic}
            topic={topic}
            selected={topic === selectedTopic}
            onPress={() => handleTopicPress(topic)}
          />
        ))}
      </View>

      {isLoading ? (
        <Spinner/>
      ) : (
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.notFound}>No news found</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notFound: {
    padding: 10
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  topicBox: {
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsScreen;