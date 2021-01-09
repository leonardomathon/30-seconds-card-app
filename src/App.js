import React, { useState } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

import words from './json/words.json';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  function generateCard() {
    let dataLength = Object.keys(words).length;
    let cardItems = [];
    for (let i = 0; i < 5; i++) {
      cardItems.push(pickRandom(dataLength));
    }
    
    var output = '';
    cardItems.map((item) => {
      output += item + '\n';
    })

    Alert.alert("Kaartje", output, [{text: 'Nog een kaartje', onPress: () => generateCard()}, {text: 'Sluiten', onPress: () => console.log("Close")}]);

  }
  
  function pickRandom(dataLength) {
    let randomNumber = Math.floor(Math.random() * dataLength);
    return words[randomNumber].value;
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title="Begin een nieuw spel"
          color="#2AAEE4"
          onPress={generateCard}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Spel hervatten"
          color="#F8DA18"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Spel afsluiten"
            color="#0E1C36"
            onPress={() => Alert.alert('Left button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  buttons: {
    marginBottom: 25,
  },
  fixToText: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;