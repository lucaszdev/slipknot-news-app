import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background: #080808;
  flex-direction: row;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
