import React from 'react';
import News from '../../components/News';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export default function Main({ navigation }) {
  return (
    <Container>
      <News navigation={navigation} />
    </Container>
  );
}
