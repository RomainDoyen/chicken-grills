import { StyleSheet, Image, View } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function TabTwoScreen() {

  const [region, setRegion] = useState({
    latitude: -21.12165459276416,
    longitude: 55.54070004999999,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const sellers = [
    {
      name: 'Poulet Grillé 1',
      latitude: -20.9606333,
      longitude: 55.6492731,
      description: 'Le meilleur poulet grillé de la ville !',
    },
    {
      name: 'Poulet Grillé 2',
      latitude: -21.1277445,
      longitude: 55.7922999,
      description: 'Le meilleur poulet grillé de la ville !',
    },
    {
      name: 'Poulet Grillé 3',
      latitude: -21.0006099,
      longitude: 55.2771585,
      description: 'Le meilleur poulet grillé de la ville !',
    }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        {sellers.map((seller, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: seller.latitude, longitude: seller.longitude }}
            title={seller.name}
            description={seller.description}
          >
            <Image source={require('@/assets/images/chicken-marker.png')} style={{ width: 36, height: 36 }} />
          </Marker>
        ))}
        {/* <Marker
          coordinate={{ latitude: -20.9606333, longitude: 55.6492731 }}
          title="Poulet Grillé 1"
          description="Le meilleur poulet grillé de la ville !"
        /> */}
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
