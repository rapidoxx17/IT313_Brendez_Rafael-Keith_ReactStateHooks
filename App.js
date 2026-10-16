import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Layout from './layout';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';
import useStopwatch from './useStopwatch';

export default function App() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((currentSolved) => currentSolved + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <Layout>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>IT 313 · LABORATORY 5</Text>
          <Text style={styles.title}>Lab Timer &amp; Practice Tracker</Text>
          <Text style={styles.subtitle}>
            Stay focused, one problem at a time.
          </Text>
        </View>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />

        <Stopwatch seconds={seconds} isRunning={isRunning} />

        <View style={styles.timerActions}>
          <Text style={styles.sectionLabel}>PRACTICE TIMER</Text>
          <View style={styles.actionRow}>
            <View style={styles.action}>
              <TimerButton
                title="Start"
                onPress={handleStart}
                disabled={isRunning}
                variant="primary"
              />
            </View>
            <View style={styles.action}>
              <TimerButton
                title="Stop"
                onPress={handleStop}
                disabled={!isRunning}
                variant="secondary"
              />
            </View>
          </View>
          <Text style={styles.timerHint}>
            Your time is saved when you pause the timer.
          </Text>
        </View>
    </Layout>
  );
}

function TimerButton({ title, onPress, disabled, variant }) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.timerButton,
        isPrimary ? styles.startButton : styles.stopButton,
        disabled && styles.disabledButton,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.timerButtonText,
          isPrimary ? styles.startButtonText : styles.stopButtonText,
          disabled && styles.disabledButtonText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  title: {
    color: '#f8fafc',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 15,
    marginTop: 8,
  },
  timerActions: {
    marginTop: 24,
  },
  sectionLabel: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  action: {
    flex: 1,
  },
  timerButton: {
    minHeight: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#38bdf8',
  },
  stopButton: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
  },
  disabledButton: {
    backgroundColor: '#1e293b',
    borderColor: '#293548',
  },
  timerButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  startButtonText: {
    color: '#082f49',
  },
  stopButtonText: {
    color: '#f8fafc',
  },
  disabledButtonText: {
    color: '#64748b',
  },
  pressed: {
    opacity: 0.75,
  },
  timerHint: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },
});