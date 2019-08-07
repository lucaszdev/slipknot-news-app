import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  host: '192.168.0.100',
  name: 'React Native Demo',
})
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: stackFrame => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
