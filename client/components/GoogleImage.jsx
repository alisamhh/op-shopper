import React from 'react'

import api from '../api'

class GoogleImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      selected: this.props.imageurl
    }
  }

  componentDidMount () {
    api.getImages(`${this.props.item.color} ${this.props.item.brand} ${this.props.item.item}`)
      .then(response => {
        this.setState({
          images: response.body
        })
      })
  }

  selectImage (e) {
    this.setState({
      selected: e.target
    })
    // api.addImage(this.state.selected)
  }

  render () {
    const images = this.state.images
    // const image = this.state.images[1] && <img src={this.state.images[1].url} />
    return (
      <div>
        {this.state.selected ? <img src={this.state.selected} /> : images.map(image => {
          return <img onClick={() => this.setState({selected: image.url})} key={image.url} src={image.url} />
        })}
      </div>
    )
  }
}

export default GoogleImage
