import React, { useState } from 'react';
import { Card, Text, View, Image } from 'native-base';
import { TouchableOpacity, ImageSourcePropType, StyleSheet, I18nManager, Platform, Linking } from 'react-native';
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

    const [img,setImg] = useState(imageSource);
  
    const handleCardPress = () => {
      Linking.openURL(newsUrl);
    };

    const handleImageLoadError = () => {
      //set default image
      setImg(require('../assets/images/ArticleDefault.jpg'))
    }


  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleCardPress}>
      <Card>
        <Image source={img} style={styles.image} onError={handleImageLoadError} alt='Article Image' />
        <View style={styles.titleContainer}>
        <View style={styles.authorContainer}>
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.publishedAt}>{formatDate(publishedAt, I18nManager.isRTL ? "ar-eg" : "en-US")}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
        <Text style={styles.description}>{description}</Text>
      </Card>
    </TouchableOpacity>
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
