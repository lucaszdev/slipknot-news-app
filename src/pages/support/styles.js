import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #080808;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollViewContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  padding: 25px;
`;

export const NameSupport = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  top: -30px;
  left: 120px;
`;

export const NameSupport2 = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  top: -30px;
  left: 80px;
`;

export const ImageSupport = styled.Image`
  width: 300px;
  height: 300px;
`;

export const ImageContainer = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 150;
`;

export const TouchableOpacityContainer = styled.TouchableOpacity``;
