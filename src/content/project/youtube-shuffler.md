---
title: 'YouTube Shuffler'
description: "Hates YouTube shuffle algorithm? This will truly shuffle your playlist without repeating the same videos."
stacks: ['Vue', 'JavaScript']
pubDate: '2021-09-27'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Hates YouTube's shuffle algorithm? This will truly shuffle your playlist without repeating the same videos.

## Features

- True random shuffle of YouTube playlists
- No repeated videos during playback
- Simple and intuitive interface
- Better randomization than YouTube's native shuffle

## Technology Stack

This project is built using:
- **Vue.js** for the frontend interface
- **JavaScript** for the core shuffle logic
- **YouTube API** for playlist integration

## Implementation Details

YouTube's shuffle feature has been criticized for not providing true randomization, often playing the same videos repeatedly or following predictable patterns. This application solves that problem by implementing a proper shuffle algorithm that ensures each video in the playlist is played exactly once before any repeats occur.

The shuffle algorithm uses a Fisher-Yates shuffle method to provide truly random ordering, giving users a better listening experience when they want to shuffle through their playlists.
