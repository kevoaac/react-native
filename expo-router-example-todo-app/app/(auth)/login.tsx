import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/contexts/auth';

export default function TabOneScreen() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="(auth)/login.tsx" />
      <Button title='Log in' onPress={signIn} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
