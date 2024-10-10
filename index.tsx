import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your course goal!"
                    style={styles.textInput}
                />
                <Button title="ADD GOAL" color="#2196F3" onPress={() => {}} />
            </View>

            <View>
                <Text style={styles.goalsText}>List of Goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
            flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 13,
    },
    goalsContainer: {
        flex: 5,
    },
    goalsText: {
        marginTop: 16,
        fontWeight: 'bold',
    },
});


/*
import {StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}> Team 63 </Text>
                <Text style={styles.text}> Team Members: </Text>
                <Text style={styles.text}> Clarito, Vincent Maverick </Text>
                <Text style={styles.text}> Estacion, Kenneth </Text>
                <Text style={styles.text}> Mendoza, Paulo </Text>
                <Text style={styles.text}> Rabang, Daniela Marie </Text>
            </View>
            <View>
                <Button title="Tap me!" color="green" onPress={() => alert('Button Pressed!')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 16,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'blue',
        color: 'white',
        padding: 16,
    },
});



import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome, We are the TEAM 63!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
      <ThemedText style={{ color: 'blue' }}>Clarito, Vincent Maverick</ThemedText>
      <ThemedText style={{ color: 'red' }}>Estacion, Kenneth</ThemedText>
      <ThemedText style={{ color: 'green' }}>Mendoza, Paulo</ThemedText>
      <ThemedText style={{ color: 'purple' }}>Rabang, Daniela Marie</ThemedText>
    </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

*/
