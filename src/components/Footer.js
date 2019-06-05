import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container ml-5 mt-3">
          <footer id="footer">
            <p>
              &copy; Created with
              <i
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
                className="fas fa-heartbeat"
              />
              @Chef &middot;
              <a
                href="https://github.com/thecryptochef"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/CryptoChef_"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://t.me/Crypto_Chef"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
              >
                <i className="fab fa-telegram-plane" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXpIell0mnis-TPSF33_YLg"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://chef-portfolio-webpage-git-master.chef.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 22,
                  margin: 5,
                  color: '#cc1e18'
                }}
              >
                <i className="fas fa-globe" />
              </a>
            </p>
          </footer>
        </div>
      </>
    );
  }
}
