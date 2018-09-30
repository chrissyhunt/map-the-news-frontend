import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppInfo extends Component {

  render() {
    return (
      <div className="container">
        <div className="row header-row">
          <div className="header">
            <div className="header-left">
              <span className="title">MAP THE NEWS</span>
            </div>
            <div className="header-right">
              <p class="menu">
                <Link to="/news">Back to News Map</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="content">
        <h1>About Map the News</h1>
        <p>Have you ever wondered how your perspective on current events is being shaped by the news you consume?</p>
        <p>Map the News is a dynamic news application designed to help you break out of the echo chamber by exposing you to headlines across the media landscape, and placing your favorite go-to sources into a wider context.</p>
        <p>With your eye on the big picture, you can watch in real time as stories are framed and challenged across the media landscape. You can see how different news organizations interact with and respond to each other, and how alternative perspectives on issues are pushed to the forefront for different audiences. You can witness a broader dialogue about events as they unfold.</p>

        <h2>Goals & Limitations of the Project</h2>
        <p>When you search for a topic or phrase in the news, or choose to view all "Top Headlines," Map the News pulls headlines from nineteen prominent (and mostly U.S.-oriented) news sources across the political spectrum through the News API and displays them on a two-dimensional bias chart. (This chart is loosely based on the overall political bias and quality ratings of news sources published by the <a href="https://www.adfontesmedia.com/">Media Bias Chart</a> and <a href="https://www.allsides.com/unbiased-balanced-news">AllSides</a>. Please note that Map the News is not affiliated with or endorsed by either project.)</p>
        <p>Map the News is not intended to provide a definitive or complete view of "the news", nor is it intended to be the final word on political bias and quality across the media. This is a complex topic, and assessments of political bias in particular always involve a degree of subjectivity. I firmly believe that there is no technology or tool that can ever replace the need for human critical thinking when consuming news and information.</p>
        <p>However, I've also found that it's easy to become comfortable within our information bubbles and blind to the world beyond, and that the rise of algorithmic news aggregation has only increased our isolation within these echo chambers. Map the News aims to provide an easy first step back to a broader dialogue.</p>

        <h2>News Sources</h2>
        <table>
          <tr>
            <th>News Source</th>
            <th>Political Bias</th>
            <th>Quality Rating</th>
          </tr>

          <tr>
            <td>Axios</td>
            <td>Leans Liberal</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>Bloomberg</td>
            <td>Neutral or Minimal Bias</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>Breitbart News</td>
            <td>Very Conservative</td>
            <td>Frequent Propaganda & Misinformation</td>
          </tr>

          <tr>
            <td>Buzzfeed</td>
            <td>Very Liberal</td>
            <td>Incomplete Story</td>
          </tr>

          <tr>
            <td>CNN</td>
            <td>Leans Liberal</td>
            <td>Complex Analysis & Opinion</td>
          </tr>

          <tr>
            <td>Fox News</td>
            <td>Very Conservative</td>
            <td>Incomplete Story</td>
          </tr>

          <tr>
            <td>MSNBC</td>
            <td>Very Liberal</td>
            <td>Complex Analysis & Opinion</td>
          </tr>

          <tr>
            <td>National Review</td>
            <td>Leans Conservative</td>
            <td>Complex Analysis & Opinion</td>
          </tr>

          <tr>
            <td>Reuters</td>
            <td>Neutral or Minimal Bias</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>The American Conservatives</td>
            <td>Leans Conservative</td>
            <td>Complex Analysis & Opinion</td>
          </tr>

          <tr>
            <td>The Huffington Post</td>
            <td>Very Liberal</td>
            <td>Incomplete Story</td>
          </tr>

          <tr>
            <td>The New York Times</td>
            <td>Leans Liberal</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>The Wall Street Journal</td>
            <td>Leans Conservative</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>The Washington Post</td>
            <td>Leans Liberal</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>USA Today</td>
            <td>Neutral or Minimal Bias</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>The Hill</td>
            <td>Neutral or Minimal Bias</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>Politico</td>
            <td>Leans Liberal</td>
            <td>Fact Reporting</td>
          </tr>

          <tr>
            <td>The Economist</td>
            <td>Leans Liberal</td>
            <td>Complex Analysis & Opinion</td>
          </tr>

          <tr>
            <td>The Washington Times</td>
            <td>Leans Conservative</td>
            <td>Complex Analysis & Opinion</td>
          </tr>
        </table>

        <h2>Technology</h2>
        <p>Map the News was built by me, <a href="http://chrissyhunt.com">Chrissy Hunt</a>, as my final project for the <a href="https://flatironschool.com/">Flatiron School's Online Full Stack Web Development</a> program. The application is built in React with a Rails API backend, and pulls information from the <a href="http://newsapi.org">News API</a>.</p>
        <p>You can learn more about the technical details of the project on <a href="https://github.com/chrissyhunt87/map-the-news">GitHub</a>.</p>

        <h2>Get Started</h2>
        <p>Ready to get started? <Link to="/news">Head on over to the news map!</Link></p>

      </div>
      </div>
    );
  }
}

export default AppInfo;
