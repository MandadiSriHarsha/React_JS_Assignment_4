import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoaderLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  convertData = input => {
    const output = {
      umpires: input.umpires,
      result: input.result,
      manOfTheMatch: input.man_of_the_match,
      id: input.id,
      date: input.date,
      venue: input.venue,
      competingTeam: input.competing_team,
      competingTeamLogo: input.competing_team_logo,
      firstInnings: input.first_innings,
      secondInnings: input.second_innings,
      matchStatus: input.match_status,
    }
    return output
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const newteamBannerUrl = data.team_banner_url
    const newlatestMatchDetails = this.convertData(data.latest_match_details)
    const newrecentMatches = data.recent_matches.map(eachitem =>
      this.convertData(eachitem),
    )
    this.setState({
      teamBannerUrl: newteamBannerUrl,
      latestMatchDetails: newlatestMatchDetails,
      recentMatches: newrecentMatches,
      isLoaderLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderLatestMatchElement = () => {
    const {latestMatchDetails} = this.state
    return <LatestMatch data={latestMatchDetails} />
  }

  renderRecentMatchCards = () => {
    const {recentMatches} = this.state
    return (
      <ul className="recent-match-cards-bg-container">
        {recentMatches.map(eachCard => (
          <MatchCard data={eachCard} key={eachCard.id} />
        ))}
      </ul>
    )
  }

  renderMatchDetails = () => {
    const {teamBannerUrl} = this.state
    return (
      <>
        <img
          alt="team banner"
          src={teamBannerUrl}
          className="team-banner-image"
        />
        <p className="latest-matches-intro-text">Latest Matches</p>
        {this.renderLatestMatchElement()}
        {this.renderRecentMatchCards()}
      </>
    )
  }

  render() {
    const {isLoaderLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const className = `${id}-bg-container`
    return (
      <div
        data-testid="loader"
        className={`team-matches-bg-container ${className}`}
      >
        {isLoaderLoading ? this.renderLoader() : this.renderMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
