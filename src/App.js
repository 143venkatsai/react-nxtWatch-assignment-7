import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import Home from './components/Home'
import Login from './components/Login'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, activeTab: 'Home', savedVideos: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state

    // const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    // if (index === -1) {
    //   this.setState({savedVideos: [...savedVideos, video]})
    //   console.log(savedVideos)
    //   console.log(index)
    // } else {
    //   savedVideos.splice(index, 1)
    //   this.setState({savedVideos})
    // }

    const existingVideo = savedVideos.find(
      eachVideo => eachVideo.id === video.id,
    )
    console.log(existingVideo)

    if (existingVideo) {
      const filterVideosList = savedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideos: filterVideosList})
    } else {
      const updatedVideosList = [...savedVideos, video]
      this.setState({savedVideos: updatedVideosList})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          onChangeTheme: this.onChangeTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
