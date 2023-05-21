import React from 'react';
import { Card, Text, View, Image } from 'native-base';
import { TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { formatDate } from '../utils';


interface NewsCardProps {
  title: string;
  imageSource: ImageSourcePropType;
  description: string;
  newsUrl: string;
  author: string;
  publishedAt: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  imageSource,
  description,
  newsUrl,
  author,
  publishedAt,
}) => {
  
    const [isWebViewVisible, setIsWebViewVisible] = React.useState(false);

    const handleCardPress = () => {
      setIsWebViewVisible(true);
    };
  
    const handleWebViewClose = () => {
      setIsWebViewVisible(false);
    };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleCardPress}>
      <Card>
        <Image source={imageSource} style={styles.image} alt='Article Image' />
        <View style={styles.titleContainer}>
        <View style={styles.authorContainer}>
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.publishedAt}>{formatDate(publishedAt)}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
        <Text style={styles.description}>{description}</Text>
      </Card>
    </TouchableOpacity>
    {isWebViewVisible && (
      <WebView
        source={{ uri: newsUrl }}
        style={styles.webview}
        onNavigationStateChange={(navState: WebViewNavigation) => {
          // Close the WebView when the user navigates away from the article
          if (!navState.loading) {
            handleWebViewClose();
          }
        }}
      />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: '100%',
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  author: {
    fontSize: 14,
  },
  publishedAt: {
    fontSize: 14,
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
  },
  webview: {
    flex: 1,
  },
});


export default NewsCard;
