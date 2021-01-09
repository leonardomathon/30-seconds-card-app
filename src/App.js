import React, { useEffect } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

import words from './json/words.json';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  // Copy of the JSON data
  let data = words

  let dataLength = Object.keys(data).length;

  // Array containing the indices of the words that already have been used
  let doneWordIndices = [];

  function generateCard() {

    // Generate 5 random words from the data
    let cardItems = [];
    for (let i = 0; i < 5; i++) {
      cardItems.push(pickRandom(dataLength));
    }
    
    // Prepare the output
    var output = '';
    cardItems.map((item) => {
      output += item + '\n';
    })

    // Send output to the user via alert
    Alert.alert("Kaartje", output, [{text: 'Nog een kaartje', onPress: () => generateCard()}, {text: 'Sluiten', onPress: () => console.log("Close")}]);

  }
  
  function pickRandom(dataLength) {
    // Pick a random number, check if it has already been used
    let randomNumber = Math.floor(Math.random() * dataLength);
    while (doneWordIndices.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * dataLength);
    }

    // Add the new random number the indices list
    doneWordIndices.push(randomNumber);

    // Find the corresponding word and delete it from the data
    let word = data[randomNumber];
    delete data[randomNumber];
    return word.value;
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