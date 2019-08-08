import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  Image,
  ContentContainer,
  NameText,
  VersionText,
  ButtonGit,
  ButtonText,
} from './style';
import Logo from '../../images/newlogo.png';

export default function About() {
  return (
    <Container>
      <ContentContainer>
        <NameText>Slipknot News</NameText>
        <VersionText>Version 0.0.1</VersionText>
        <Image source={Logo} />
      </ContentContainer>
      <ButtonGit onPress={() => Linking.openURL('https://github.com/lucasZduality/slipknot-news-app')}>
        <ButtonText>Repositório do Projeto</ButtonText>
      </ButtonGit>
    </Container>
  );
}
