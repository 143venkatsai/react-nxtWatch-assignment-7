import React from 'react'

const ThemeContext = React.createContext({
  savedVideos: [],
  activeTab: 'Home',
  isDarkTheme: false,
  addVideo: () => {},
  changeTab: () => {},
  onChangeTheme: () => {},
})

export default ThemeContext
