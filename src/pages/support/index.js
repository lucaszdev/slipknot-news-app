import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  TabsContainer,
  TabItem,
  NameSupport,
  NameSupport2,
  ImageSupport,
  TouchableOpacityContainer,
  ScrollViewContainer,
  ImageContainer,
} from './styles';
import Sknews from './images/sk_news.png';
import Skmr from './images/skmr2.0.png';

export default function Support() {
  return (
    <Container>
      <TabsContainer>
        <ScrollViewContainer>
          <TabItem>
            <NameSupport>Skmr2.0</NameSupport>
            <TouchableOpacityContainer
              onPress={() => Linking.openURL('https://www.instagram.com/skmr2.0/')}
            >
              <ImageContainer>
                <ImageSupport source={Skmr} />
              </ImageContainer>
            </TouchableOpacityContainer>
          </TabItem>

          <TabItem>
            <NameSupport2>Slipknot News</NameSupport2>
            <TouchableOpacityContainer
              onPress={() => Linking.openURL('https://www.youtube.com/channel/UCWbxKgguqNl04F8ZLA3Le8g')
              }
            >
              <ImageContainer>
                <ImageSupport source={Sknews} />
              </ImageContainer>
            </TouchableOpacityContainer>
          </TabItem>
        </ScrollViewContainer>
      </TabsContainer>
    </Container>
  );
}
