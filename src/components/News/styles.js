import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const ItemContainer = styled.View`
  background-color: #080808;
  border-width: 1;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20;
  height: 220px;
`;

export const InfoText = styled.Text`
  font-size: 12;
  color: #999;
  left: 20px;
  top: 5px;
`;

export const ImageMainScreen = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

export const TitleDescriptionContainer = styled.View`
  width: 180px;
  height: 10px;
`;

export const AllContainer = styled.View`
  flex-direction: row;
`;

export const LineBorder = styled.View`
  border: 1px;
  border-color: #ddd;
  top: 14px;
  width: 255px;
  margin-left: 10px;
`;

export const ImageMainContainer = styled.View`
  height: 100px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding-right: 10px;
`;

export const ItemDescription = styled.Text`
  font-size: 11px;
  color: #999;
  margin-top: 10px;
  line-height: 15;
  padding-right: 10px;
`;

export const ItemButton = styled.TouchableOpacity`
  height: 35;
  border-radius: 5;
  background-color: rgb(204, 0, 0);
  justify-content: center;
  align-items: center;
  margin-top: 30;
  margin-right: 10px;
  padding: 15px;
  width: 130px;
`;

export const ItemButton2 = styled.TouchableOpacity`
  height: 35;
  border-radius: 5;
  background-color: rgb(204, 0, 0);
  justify-content: center;
  align-items: center;
  margin-top: 30;
  margin-right: 10px;
  padding: 15px;
  width: 140px;
`;

export const ItemButtonText = styled.Text`
  font-size: 15px;
  color: white;
  left: -5;
  font-weight: bold;
`;

export const TouchableOpacityContainerAll = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const RefreshControlMain = styled.RefreshControl``;

export const ViewRender = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  top: -140px;
`;

export const TextRender = styled.Text`
  color: #060606;
`;
