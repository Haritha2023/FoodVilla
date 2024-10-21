import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "dummy name",
      location: "dummy location",
    };
    console.log("Constructor" + this.props.name);
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/Haritha2023");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // console.log(json);

    // this.timer = setInterval(() => {
    //   console.log(
    //     "setInterval=====, this will be called after componentwillunmount, it is cons of SPA"
    //   );
    // }, 1000);
    console.log("componentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("This is Component Update===================");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("This is componentWillUnmount=============");
  }
  render() {
    console.log("render" + this.props.name);
    return (
      <div>
        <h2>This is class component</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Email: {this.state.userInfo.location}</h3>
        {/* <h3>{this.state.userInfo.name}</h3>
        <h3>{this.state.userInfo.name}</h3>
        <h3></h3> */}
        {/* <button
          onClick={() => {
            // WE DO NOT MUTATE STATE DIRECTLY
            //NEVER do this.state = something
            this.setState({ count: 1, count2: 2 });
          }}
        >
          Increment Count
        </button> */}
      </div>
    );
  }
}

export default Profile;
