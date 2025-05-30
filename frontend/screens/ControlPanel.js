import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { encryptSignal } from '../utils/crypto';

export default function ControlPanel() {
  const sendCommand = async () => {
    const { encryptedData, iv } = encryptSignal('vibrate:70');

    await fetch('https://yourdomain.com/api/control', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ encryptedData, iv, token: 'velvetsync-token' })
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vibration Control</Text>
      <Button title="Send 70% Vibration" onPress={sendCommand} color="#2196f3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 20, marginBottom: 20 }
});