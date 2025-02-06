import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
  
      <ThemedView style={styles.container}>
        <ThemedText type="title">Settings</ThemedText>
    </ThemedView>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  }
});
     