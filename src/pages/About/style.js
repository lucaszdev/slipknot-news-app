import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #080808;
`;

export const Image = styled.Image`
  height: 150px;
  width: 150px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  top: -30px;
`;

export const VersionText = styled.Text`
  top: -20px;
  color: white;
`;

export const ButtonGit = styled.TouchableOpacity`
  flex: 0.2;
  background-color: rgb(138, 23, 25);
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
