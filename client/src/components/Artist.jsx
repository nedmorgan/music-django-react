import React, { Component } from 'react'
import axios from 'axios'

export default class Artist extends Component {

    state = {
        artist: {},
        songs: []
    }

    componentDidMount() {
        const artistId = this.props.match.params.id
        this.fetchArtist(artistId)
    }

    fetchArtst = async (artistId) => {
        try {
            const artistResponse = await axios.get(`/api/v1/artists/${artistId}`)
            this.setState({
                artist: artistResponse.data,
                songs: artistResponse.data.songs
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
                <h1>{this.state.artist.name}</h1>
                {
                    this.state.songs.map(song => {
                        return (
                            <div key={song.id}>
                                <h4>{song.title}</h4>
                                <audio controls src={song.preview_url}></audio>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
