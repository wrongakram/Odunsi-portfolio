import React from "react"

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
          <video
            poster="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/53006846_539912093081814_3463245754746190054_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=106&oh=cda110261b8679cd3868e39c2171c671&oe=5DE56700"
            controls
            type="video/mp4"
            src="https://scontent-dfw5-2.cdninstagram.com/v/t50.2886-16/53730396_2071478279602567_7391671117649281024_n.mp4?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&oe=5DE5325D&oh=28646880a3188b07a14e6a88d281124a"
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Let’s Talk About It Now</h3>
          </div>
          <div className="content">
            <p>
              I’m so happy to present the 1st trailer of the film. “Let’s Talk
              About It Now” is a film that focuses on Mental health in the
              African community, and the black race as a whole, as this is a
              topic we tend to shy away from in our community . With this film,
              we hope to reduce/eradicate the stigma surrounding Mental Health
              In our community, making it a topic that is freely discussed as
              opposed to leaving it on the back burner.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
