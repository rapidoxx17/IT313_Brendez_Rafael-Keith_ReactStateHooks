import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <View style={styles.scoreHeader}>
        <Text style={styles.label}>PROBLEMS SOLVED</Text>
        <Text style={styles.score}>{solved}</Text>
        {solved >= 5 ? (
          <Text style={styles.encouragement}>Great job!</Text>
        ) : (
          <Text style={styles.goal}>Solve 5 to reach your first milestone.</Text>
        )}
      </View>

      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          onPress={onSolve}
          style={({ pressed }) => [styles.solveButton, pressed && styles.pressed]}
        >
          <Text style={styles.solveButtonText}>Solve +1</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={onReset}
          style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#192538',
    borderColor: '#26364c',
    borderWidth: 1,
    borderRadius: 22,
    padding: 22,
  },
  scoreHeader: {
    alignItems: 'center',
  },
  label: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  score: {
    color: '#f8fafc',
    fontSize: 68,
    fontWeight: '800',
    lineHeight: 78,
    marginTop: 8,
  },
  encouragement: {
    color: '#34d399',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },
  goal: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 4,
  },
  actions: {
    gap: 10,
    marginTop: 22,
  },
  solveButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#38bdf8',
  },
  solveButtonText: {
    color: '#082f49',
    fontSize: 16,
    fontWeight: '700',
  },
  resetButton: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#233148',
  },
  resetButtonText: {
    color: '#cbd5e1',
    fontSize: 15,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
