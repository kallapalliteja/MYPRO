import React, { Component } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap"

// Carousel images
import dr1 from "../Images/dr1.png"
import dr2 from "../Images/dr2.png"
import dr3 from "../Images/dr3.jpg"
import "./sliding.css"

const items = [
  {
    src: dr1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: dr2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: dr3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
]

class Sliding4 extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          interval={1000}
        >
          <img
            src={item.src}
            className="d-block w-100"
            alt={item.altText}
          />
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <div className="carousel-inner">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>

      </React.Fragment>
    )
  }
}

export default Sliding4