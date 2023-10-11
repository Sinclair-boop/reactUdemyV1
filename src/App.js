import { Component } from "react";
import "./App.css";
import MyCars from "./components/MyCars";

class App extends Component {
  state = {
    titre: "Mon catalogue voiture",
    color: "green",
  };
  changeTitle = (e) => {
    this.setState({ titre: "le nouveau titre" });
  };
  changeTitleParam = (titre) => {
    this.setState({ titre });
  };
  viaBand = (titreBand) => {
    this.setState({ titre: titreBand });
  };
  onChangeInput = (val) => {
    console.log(val.target.value);
    this.setState({ titre: val.target.value });
  };
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} color={this.state.color} />
        <button onClick={this.changeTitle}> Changer le titre</button>
        <button
          onClick={() =>
            this.changeTitleParam("Le titre qui est passe en parametre")
          }
        >
          Changer le titre via parametre
        </button>
        <button onClick={this.viaBand.bind(this, "Titre via band")}>
          titre via band
        </button>
        <input type="text" onChange={this.onChangeInput} />
      </div>
    );
  }
}

export default App;
