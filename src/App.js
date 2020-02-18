import React, { Component } from "react";
import "./styles/App.css";
import Searchinput from "./components/Searchinput";
import Searchfield from "./components/Searchfield";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
      searchField: `In a 1999 interview, Rowling said Voldemort was invented as a nemesis
          for Harry Potter, and she intentionally did not flesh out Voldemort's
          backstory at first. "The basic idea [was that Harry] didn't know he
          was a wizard ... And so then I kind of worked backwards from that
          position to find out how that could be, that he wouldn't know what he
          was. ... When he was one year old, the most evil wizard for hundreds
          and hundreds of years attempted to kill him. He killed Harry's
          parents, and then he tried to kill Harry—he tried to curse him. ...
          Harry has to find out, before we find out. And—so—but for some
          mysterious reason the curse didn't work on Harry. So he's left with
          this lightning bolt shaped scar on his forehead and the curse
          rebounded upon the evil wizard, who has been in hiding ever since."[8]
          
          In the second book, Rowling establishes that Voldemort hates
          non-pure-blood wizards, despite being a half-blood himself. In a 2000
          interview with the BBC, Rowling described Voldemort as a self-hating
          bully: "Well I think it is often the case that the biggest bullies
          take what they know to be their own defects, as they see it, and they
          put them right on someone else and then they try and destroy the other
          and that's what Voldemort does."[9] In the same year, Rowling became
          more precise about Voldemort. She began to link him to real-life
          tyrants, describing him as "a raging psychopath, devoid of the normal
          human responses to other people's suffering".[10] In 2004, though,
          Rowling said that she did not base Voldemort on any real person.[11]
          In 2006, Rowling told an interviewer that Voldemort at his core has a
          human fear: the fear of death. She said: "Voldemort's fear is death,
          ignominious death. I mean, he regards death itself as ignominious. He
          thinks that it's a shameful human weakness, as you know. His worst
          fear is death."[12]
          
          Throughout the series, Rowling establishes that Voldemort is so feared
          in the wizarding world that it is considered dangerous even to speak
          his name. Most characters in the novels refer to him as "You-Know-Who"
          or "He-Who-Must-Not-Be-Named" rather than say his name aloud. In Harry
          Potter and the Deathly Hallows, a "taboo" spell is placed upon the
          name, such that Voldemort or his followers may trace anyone who utters
          it. By this means, his followers eventually find and capture Harry and
          his friends Ron Weasley and Hermione Granger. In the second book,
          Rowling reveals that I am Lord Voldemort is an anagram of the
          character's birth name, Tom Marvolo Riddle. According to the author,
          Voldemort's name is an invented word.[13] Some literary analysts have
          considered possible meanings in the name: Philip Nel believes that
          Voldemort is derived from the French for "flight of death",[14] and in
          a 2002 paper, Nilsen and Nilsen suggest that readers get a "creepy
          feeling" from the name Voldemort, because of the French word "mort"
          ("death") within it and that word's association with cognate English
          words derived from the Latin mors.[15]`,
      originalField: `In a 1999 interview, Rowling said Voldemort was invented as a nemesis
          for Harry Potter, and she intentionally did not flesh out Voldemort's
          backstory at first. "The basic idea [was that Harry] didn't know he
          was a wizard ... And so then I kind of worked backwards from that
          position to find out how that could be, that he wouldn't know what he
          was. ... When he was one year old, the most evil wizard for hundreds
          and hundreds of years attempted to kill him. He killed Harry's
          parents, and then he tried to kill Harry—he tried to curse him. ...
          Harry has to find out, before we find out. And—so—but for some
          mysterious reason the curse didn't work on Harry. So he's left with
          this lightning bolt shaped scar on his forehead and the curse
          rebounded upon the evil wizard, who has been in hiding ever since."[8]
          
          In the second book, Rowling establishes that Voldemort hates
          non-pure-blood wizards, despite being a half-blood himself. In a 2000
          interview with the BBC, Rowling described Voldemort as a self-hating
          bully: "Well I think it is often the case that the biggest bullies
          take what they know to be their own defects, as they see it, and they
          put them right on someone else and then they try and destroy the other
          and that's what Voldemort does."[9] In the same year, Rowling became
          more precise about Voldemort. She began to link him to real-life
          tyrants, describing him as "a raging psychopath, devoid of the normal
          human responses to other people's suffering".[10] In 2004, though,
          Rowling said that she did not base Voldemort on any real person.[11]
          In 2006, Rowling told an interviewer that Voldemort at his core has a
          human fear: the fear of death. She said: "Voldemort's fear is death,
          ignominious death. I mean, he regards death itself as ignominious. He
          thinks that it's a shameful human weakness, as you know. His worst
          fear is death."[12]
          
          Throughout the series, Rowling establishes that Voldemort is so feared
          in the wizarding world that it is considered dangerous even to speak
          his name. Most characters in the novels refer to him as "You-Know-Who"
          or "He-Who-Must-Not-Be-Named" rather than say his name aloud. In Harry
          Potter and the Deathly Hallows, a "taboo" spell is placed upon the
          name, such that Voldemort or his followers may trace anyone who utters
          it. By this means, his followers eventually find and capture Harry and
          his friends Ron Weasley and Hermione Granger. In the second book,
          Rowling reveals that I am Lord Voldemort is an anagram of the
          character's birth name, Tom Marvolo Riddle. According to the author,
          Voldemort's name is an invented word.[13] Some literary analysts have
          considered possible meanings in the name: Philip Nel believes that
          Voldemort is derived from the French for "flight of death",[14] and in
          a 2002 paper, Nilsen and Nilsen suggest that readers get a "creepy
          feeling" from the name Voldemort, because of the French word "mort"
          ("death") within it and that word's association with cognate English
          words derived from the Latin mors.[15]`
    };
  }

  setSearchCriteria = criteria => {
    this.setState({ searchCriteria: criteria });
  };

  setSearchField = searchText => {
    this.setState({ searchField: searchText });
  };

  render() {
    return (
      <div className="App">
        <Searchinput
          setSearchCriteria={this.setSearchCriteria}
          setSearchField={this.setSearchField}
          originalField={this.state.originalField}
        />
        <Searchfield searchField={this.state.searchField} />
      </div>
    );
  }
}

export default App;
