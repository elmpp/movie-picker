<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">MOVIE PICKER</h3>

<div align="center">


</div>

---

<p align="center">
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Libraries](#libraries)

## 🧐 About <a name = "about"></a>

I need a job. Spending this much time in the library isn't healthy

## 🏁 Getting Started <a name = "getting_started"></a>

As you'll quickly notice have gone with a managed expo project here as time is of
the essence and there's to be no funky low-level stuff. Also, honestly, it's
a chance to see how expo's react-native-web integration has been going.


- git checkout -> `yarn install`
- For mobile: `yarn start` (usual managed expo options then arise)
- For web: `yarn web` (Perhaps play around with the browser window as it's responsive)

> It's available through expo's app directory here - https://expo.io/@trousered/movie-picker

## 🏁 Notes
 - there are some warnings around performance when using the carousel. This is probably due
 to the use of a containing ScrollView and would probs try FlatList with more time
 - I've removed the ability on Web to play the video as that looked a little gnarly right now
 - in retrospect, shouldn't have tackled web platform given the time and included a search
 feature. On the plus side it's waaay easier than in the past
 - i haven't tested on ios due to current machine not being set up yet
 - i haven't actually written any unit tests - i've run out of time and s

## 🏁 Libraries <a name = "libraries"></a>

- [Expo](https://github.com/expo) - Scaffolding
- [React-native-paper](https://callstack.github.io/react-native-paper/index.html) - Component library
- [NextJS](https://nextjs.org/) - SSR Web Framework

## ✍️ Authors <a name = "authors"></a>

- [@elmpp](https://github.com/elmpp) - Stuff
