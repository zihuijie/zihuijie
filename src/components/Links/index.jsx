import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      github: author.github,
      twitter: author.twitter,
      linkedin: author.linkedin,
      facebook: author.facebook,
      pinterest: author.pinterest,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
        <li className="links__list-item">
          <a href={`https://www.github.com/${links.github}`} target="_blank" >
            <i className="icon-github" />
          </a>
        </li>
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank" >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
          <a href={`https://www.facebook.com/${links.facebook}`} target="_blank">
          <i className="icon-facebook"/>
          </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
