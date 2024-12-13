import { StyleSheet, Image, Platform, View } from 'react-native';
import MapView from 'react-native-maps';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -21.12165459276416,
          longitude: 55.54070004999999,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  }
});
