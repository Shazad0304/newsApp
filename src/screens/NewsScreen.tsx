import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  I18nManager
} from 'react-native';
import {Spinner, View, Text, FlatList} from 'native-base';
import NewsCard from '../components/NewsCard';
import TopicChip from '../components/TopicChip';
import ToggleTheme from '../components/ToggleTheme';
import useNewsApi from '../hooks/useNewsApi';
import { News } from '../types/News';
import ToggleLanguage from '../components/ToggleLanguage';
import LocalizedText from '../components/LocalizedText';

I18nManager.allowRTL(true);

const NewsScreen: React.FC = () => {
  const topics = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
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
        <ToggleLanguage/>
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
          data={[]}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<LocalizedText style={styles.notFound}>{t => t("NOT_FOUND")}</LocalizedText>}
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
    justifyContent: 'space-around',
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
