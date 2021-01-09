import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.buttons}>
      <Button
        title="Begin een nieuw spel"
        color="#2AAEE4"
        onPress={() => Alert.alert('Simple Button pressed')}
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