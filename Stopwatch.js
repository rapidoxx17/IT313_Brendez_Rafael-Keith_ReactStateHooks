import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const time = `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text
          accessibilityLabel={`Elapsed time ${minutes} minutes and ${remainingSeconds} seconds`}
          style={styles.time}
        >
          {time}
        </Text>
        <View style={[styles.statusDot, isRunning && styles.statusDotRunning]} />
        <Text style={styles.status}>{isRunning ? 'Running...' : 'Paused'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 28,
  },
  display: {
    width: '100%',
    minHeight: 158,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#192538',
    borderColor: '#26364c',
    borderWidth: 1,
  },
  time: {
    color: '#f8fafc',
    fontSize: 54,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
    letterSpacing: 2,
  },
  status: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 8,
  },
  statusDot: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#64748b',
  },
  statusDotRunning: {
    backgroundColor: '#34d399',
  },
});