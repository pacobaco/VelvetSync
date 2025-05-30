import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConsentScreen({ navigation }) {
  const [consentGiven, setConsentGiven] = useState(false);

  const giveConsent = async () => {
    const res = await fetch('https://yourdomain.com/api/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'abc123', partnerId: 'xyz456' })
    });

    if (res.ok) {
      setConsentGiven(true);
      navigation.navigate('ControlPanel');
    } else {
      alert('Consent failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remote Consent</Text>
      <Text style={styles.text}>Do you allow partner control?</Text>
      <Button title="I Consent" onPress={giveConsent} color="#28a745" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20 }
});