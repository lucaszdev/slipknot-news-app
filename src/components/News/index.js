/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FlatList, View, Linking } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies

import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Fontisto';

import Reactotron from 'reactotron-react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { _ } from 'lodash';
// eslint-disable-next-line import/no-cycle
import Tabs from '../Tabs';

import {
  Container,
  ItemContainer,
  ItemTitle,
  ItemDescription,
  ItemButton,
  ItemButton2,
  ItemButtonText,
  RefreshControlMain,
  // ViewRender,
  // TextRender,
  ImageMainScreen,
  TitleDescriptionContainer,
  TouchableOpacityContainerAll,
  AllContainer,
  ImageMainContainer,
  LineBorder,
  InfoText,
} from './styles';

// eslint-disable-next-line import/no-unresolved
import api from '~/services/api';

// eslint-disable-next-line react/prop-types

export function formatDate(date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

export function formatDate2(date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate() - 1}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

export default function News({ navigation }) {
  const [docs, setDocs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // eslint-disable-next-line camelcase
  const olddate = formatDate2(Date.now());
  const dataAtual = formatDate(Date.now());

  const [pressed, setPressed] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line camelcase
    loadProducts();
  }, [pressed]);

  const loadProducts = async () => {
    let dateUsedHere;

    if (pressed === 0) {
      dateUsedHere = dataAtual;
    }

    if (pressed === 1) {
      dateUsedHere = olddate;
    }

    const params = {
      from: dateUsedHere,
      to: dateUsedHere,
      sortBy: 'popularity',
      apikey: 'bd0bf6e5aeed41579fd3c428935c103c',
      q: 'slipknot',
    };
    Reactotron.log(dateUsedHere);
    await api
      .get('/everything', { params })
      .then((respons) => {
        const { articles } = respons.data;

        const newArticle = articles.filter(article => article.title.toLowerCase().includes('slipknot'));

        const newNewArticle = _.orderBy(newArticle, 'publishedAt', 'desc');

        setDocs(newNewArticle);
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert('Erro, verifique sua conexão com a internet!'));
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadProducts()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => setRefreshing(false));
  };

  const ReturnTimeToNews = (item) => {
    if (pressed === 0) {
      const locale = item.source.name.indexOf('.');
      const string = item.source.name.toLowerCase();
      let name = string.substring(0, locale);

      if (name.length > 7) {
        name = `${name.substring(0, 14)}...`;
      }

      // eslint-disable-next-line camelcase
      return `  ${name} • hoje`;
    }

    const locale = item.source.name.indexOf('.');
    const string = item.source.name.toLowerCase();
    let name = string.substring(0, locale);

    if (name.length > 7) {
      name = `${name.substring(0, 8)}...`;
    }

    return `  ${name} • 1 dia atrás`;
  };

  const renderItem = ({ item }) => (
    <ItemContainer>
      <AllContainer>
        <TitleDescriptionContainer>
          <ItemTitle>{`${item.title.substring(0, 27)}...`}</ItemTitle>
          <ItemDescription>{`${item.description.substring(0, 67)}...`}</ItemDescription>
        </TitleDescriptionContainer>

        <ImageMainContainer>
          <ImageMainScreen source={{ uri: item.urlToImage }} />
        </ImageMainContainer>
      </AllContainer>
      <InfoText>
        <Icon3 name="world-o" size={10} color="#999" />
        {ReturnTimeToNews(item)}
      </InfoText>
      <LineBorder />
      <TouchableOpacityContainerAll>
        <ItemButton
          style={{ flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('Webview', { dates: item });
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Icon style={{ left: -8 }} name="flash" size={20} color="white" />
            <ItemButtonText>Visualizar</ItemButtonText>
          </View>
        </ItemButton>
        <ItemButton2
          style={{ flexDirection: 'row' }}
          onPress={() => {
            Linking.openURL(item.url);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <ItemButtonText>Abrir</ItemButtonText>
          </View>
        </ItemButton2>
      </TouchableOpacityContainerAll>
    </ItemContainer>
  );

  return (
    <>
      <Container>
        <FlatList
          refreshControl={(
            <RefreshControlMain
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ff0000', '#fe1106', '#cf0a01']}
              progressBackgroundColor="#080808"
            />
          )}
          contentContainerStyle={{ padding: 20 }}
          data={docs}
          keyExtractor={item => item.description}
          renderItem={renderItem}
        />
      </Container>
      <Tabs setPressed={setPressed} navigation={navigation} />
    </>
  );
}
