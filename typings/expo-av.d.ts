import * as existingModule from '../node_modules/expo-av/build/AV.d.ts'

declare module 'expo-av' {
  export type Playback = import('../node_modules/expo-av/build/AV.d.ts').Playback

  export {
    existingModule
  }
}