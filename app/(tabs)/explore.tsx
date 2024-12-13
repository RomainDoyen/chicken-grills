import { StyleSheet, Image, Platform, View } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function TabTwoScreen() {

  const [region, setRegion] = useState({
    latitude: -21.12165459276416,
    longitude: 55.54070004999999,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        <Marker
          coordinate={{ latitude: -20.9606333, longitude: 55.6492731 }}
          title="Poulet Grillé 1"
          description="Le meilleur poulet grillé de la ville !"
        />
      </MapView>
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
