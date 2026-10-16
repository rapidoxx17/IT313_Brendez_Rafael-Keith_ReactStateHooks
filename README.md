# IT313 React State and Hooks

A small Expo app for tracking solved practice problems and time spent practicing in the lab.

## Features

- **Practice tracker:** `Solve +1` adds one to the solved count. `Reset` resets only that count.
- **Milestone message:** `Great job!` appears when five or more problems have been solved.
- **Practice timer:** Start counts elapsed seconds, and Stop pauses the timer without resetting it.
- **Reusable stopwatch hook:** `useStopwatch` uses `useState`, `useEffect`, and `setInterval`. Its effect cleanup calls `clearInterval` when the timer stops or the component unmounts.

`App` owns the shared `solved` and `isRunning` state and passes values and handler functions to `PracticeTracker` and `Stopwatch`. This is lifting state up. Button event handlers are passed as function references, such as `onPress={onSolve}`.

## Run the app

1. Install Node.js and npm if they are not installed.
2. In this project folder, run:

   ```bash
   npm install
   npx expo start
   ```

3. Open the project in Expo Go by scanning the QR code, or launch an available simulator.

## Check the requirements

1. On launch, the solved count is `0`, the timer reads `00:00`, and the status is `Paused`.
2. Press `Solve +1` five times to see `Great job!`. Press `Reset` to reset the count without affecting the timer.
3. Press `Start` and wait for the elapsed time to increase. Press `Stop` to pause it; starting again resumes from the saved time.
4. The timer's `useEffect` returns a cleanup function that clears its interval. Removing that cleanup can leave an interval running after stopping or unmounting.