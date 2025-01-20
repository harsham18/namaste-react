import React from "react";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "DUmmy",
        location: "default",
      },
    };
    //console.log("constructor called");
  }
  async componentDidMount() {
    //console.log("componentDidMount called");
    const data = await fetch("https://api.github.com/users/harsham18");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userinfo: {
        name: json.login,
        location: json.followers,
      },
    });
  }
  componentWillUnmount() {
    //console.log("componentWillUnmount called");
  }
  componentDidUpdate() {
    //console.log("componentDidUpdate called");
  }
  render() {
    //console.log("render called");
    //const { name, location } = this.props;
    return (
      <div className="profile-card">
        <div>
          User:
          <UserContext.Consumer>
            {({ loggedInfo }) => <h1>{loggedInfo}</h1>}
          </UserContext.Consumer>
        </div>
        <h1>Name: {this.state.userinfo.name}</h1>
        <h2>Location: {this.state.userinfo.location}</h2>
      </div>
    );
  }
}

export default AboutClass;
