import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {teamCardsList: [], isLoaderLoading: true}
  }

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const {teams} = data
    const modifiedTeamsData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCardsList: modifiedTeamsData, isLoaderLoading: false})
  }

  renderHomePage = () => {
    const {teamCardsList, isLoaderLoading} = this.state
    return (
      <div className="home-page-content-container">
        <div className="home-page-heading-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-image"
          />
          <h1 className="home-page-heading-card-main-heading">IPL Dashboard</h1>
        </div>
        {isLoaderLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="team-cards-list">
            {teamCardsList.map(eachTeam => (
              <TeamCard data={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    return (
      <div data-testid="loader" className="home-page-bg-container">
        {this.renderHomePage()}
      </div>
    )
  }
}

export default Home
