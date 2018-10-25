import React, { Component } from "react";
import '../styles/App.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Twitter extends Component {



    render() {
        return (
            <div>
                 <TwitterTimelineEmbed
  					sourceType="profile"
  					screenName="Andr3sGarces"
  					options={{height: 400}}
				/>
				  <TwitterFollowButton
    				screenName={'Andr3sGarces'}
  					/>
            </div>
        );
    }
}

export default Twitter;