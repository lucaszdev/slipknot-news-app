/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
// import styled from 'styled-components/native';

import { Container, TabsContainer } from './styles';

const styles = StyleSheet.create({
  tab: {
    borderTopWidth: 2,
    height: 100,
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabItemContainer: {
    borderTopWidth: 2,
    width: 120,
  },
  TabItemContainerActive: {
    borderTopWidth: 2,
    borderColor: 'red',
    width: 120,
  },
});

// eslint-disable-next-line react/prop-types
export default function Tabs(props) {
  const [activetabs, setActivetabs] = useState(0);

  useEffect(() => {
    FunctionSetStyle(activetabs);
  }, [activetabs]);

  // eslint-disable-next-line max-len
  const FunctionSetStyle = tab => (activetabs === tab ? styles.TabItemContainerActive : styles.TabItemContainer);

  return (
    <Container>
      <TabsContainer>
        <View style={FunctionSetStyle(0)}>
          <TouchableOpacity
            onPress={() => {
              setActivetabs(0);
              props.setPressed(0);
            }}
          >
            <View style={styles.tab}>
              <Icon style={{ left: -4 }} name="filetext1" size={24} color="rgb(237, 21, 8)" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={FunctionSetStyle(1)}>
          <TouchableOpacity
            onPress={() => {
              setActivetabs(1);
              props.setPressed(1);
            }}
          >
            <View style={styles.tab}>
              <Icon style={{ left: -4 }} name="copy1" size={24} color="rgb(237, 21, 8)" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={FunctionSetStyle(2)}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Support');
            }}
          >
            <View style={styles.tab}>
              <Icon style={{ left: -4 }} name="solution1" size={24} color="rgb(237, 21, 8)" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={FunctionSetStyle(3)}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('About');
            }}
          >
            <View style={styles.tab}>
              <Icon style={{ left: -4 }} name="infocirlceo" size={24} color="rgb(237, 21, 8)" />
            </View>
          </TouchableOpacity>
        </View>
      </TabsContainer>
    </Container>
  );
}
