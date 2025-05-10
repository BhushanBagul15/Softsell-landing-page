import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review3:
    'The team at SoftSell was professional and responsive throughout the entire process. I was impressed with the results.',
  author3Alt: 'David Johnson - Founder, 123 Corp.',
  author2Name: 'Jane Smith',
  author4Src:
    'https://images.unsplash.com/photo-1594877502388-8d9e1dfcd84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njg2MjQxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1602033350291-a9ab8d800269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njg2MjQyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Alt: 'Sarah Lee - COO, QWE Ltd.',
  author1Alt: 'John Doe - CEO, ABC Inc.',
  author1Name: 'John Doe',
  content1:
    'See what our customers have to say about their experience with SoftSell.',
  review4:
    'SoftSell exceeded our expectations in terms of valuation and customer service. A reliable partner for software resale.',
  author3Name: 'David Johnson',
  author4Name: 'Sarah Lee',
  author2Position: 'CTO, XYZ Co.',
  review1:
    'SoftSell made it incredibly easy for us to sell our software licenses. The process was smooth and efficient.',
  author3Position: 'Founder, 123 Corp.',
  author1Position: 'CEO, ABC Inc.',
  heading1: 'Customer Testimonials',
  review2:
    'I highly recommend SoftSell for anyone looking to get the best value for their unused software licenses. Great service!',
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njg2MjQxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1603665696936-1331903666e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Njg2MjQyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: 'COO, QWE Ltd.',
  author2Alt: 'Jane Smith - CTO, XYZ Co.',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  review4: PropTypes.string,
  author3Name: PropTypes.string,
  author4Name: PropTypes.string,
  author2Position: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  author1Position: PropTypes.string,
  heading1: PropTypes.string,
  review2: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial
