import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ArtistList extends Component {

    state = {
        artists: []
    }

    componentDidMount() {
        this.fetchArtists()
    }

    fetchArtists = async () => {
        try {
            const res = await axios.get('/api/v1/artists/')
            this.setState({ artists: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>All Artists</h1>
                {
                    this.state.artists.map(artist => {
                        return (
                            <div key={artist.id}>
                                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}