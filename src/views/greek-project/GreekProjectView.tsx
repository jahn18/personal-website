import React from "react";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";

interface IGreekPhilosophyProps {}

interface IState {
  name: string,
  relation: string,
  gender: string,
  place: string
}

export class GreekProjectView extends React.PureComponent<IGreekPhilosophyProps, IState> {
  constructor(props: IGreekPhilosophyProps) {
    super(props);
    this.state = {name: "", relation: "", gender: "", place: ""};
  } 
  
  render () {
    document.title = "Greek Philosopher Name"

    const getResults = () => {
      let greekName = "";
      greekName += this.state.name;
      greekName += this.state.relation;
      greekName += this.state.gender;
      greekName += this.state.place;

      let results = [];
      for (let i = 0; i < 15; i++) {
        results.push(
          {
            title: greekName,
            description: "",
            resultID: i
          }
        )
      }

      return results; 
    }

    return (
      <BuzzFeedQuiz
        title={"What's your Greek Philosopher Name?"}
        description={"Project for AMNE 235"}
        byline={false}
        bylineAuthor={"John Ahn"}
        bylineAuthorLink={"www.johnahn.dev"}
        bylineAuthorLinkOpenInNewTab={true}
        // bylineAuthorTagline={"Your author tagline goes here"}
        bylineAvatarImageSrc={require('../../static/profile/profile.jpg')}
        autoScroll={true}
        onRestart={() => {}}
        onResult={() => {}}
        onAnswerSelection={(questionIndex, answerIndex, resultID: any) => {
          if (questionIndex !== undefined) {
            if (questionIndex === 0) {
              switch (resultID) {
                case 0:
                  this.setState({name: "Olympio"});
                  break;
                case 1:
                  this.setState({name:"Hera"});
                  break;
                case 2:
                  this.setState({name:"Atheno"});
                  break;
                case 3:
                  this.setState({name:"Apollo"});
                  break;
                case 4:
                  this.setState({name:"Artemid"});
                  break;
                case 5:
                  this.setState({name:"Hestio"});
                  break;
                case 6:
                  this.setState({name:"Arphrodisi"});
                  break;
                case 7:
                  this.setState({name:"Areo"});
                  break;
                case 8:
                  this.setState({name:"Hermo"});
                  break;
                case 9:
                  this.setState({name:"Demetri"});
                  break;
                case 10:
                  this.setState({name:"Kore"});
                  break;
                case 11:
                  this.setState({name:"Poseidon"});
                  break;
                case 12:
                  this.setState({name:"Plout"});
                  break;
                case 13:
                  this.setState({name:"Dionys"});
                  break;
                case 14:
                  this.setState({name:"Hekat"});
                  break;
                default:
              }
            }
            if (questionIndex === 1) {
              switch (resultID) {
                case 0:
                  this.setState({relation: "dot"});
                  break;
                case 1:
                  this.setState({relation:"ophan"});
                  break;
                case 2:
                  this.setState({relation:"klei"});
                  break;
                case 3:
                  this.setState({relation:"ai"});
                  break;
                default:
              }
            }
            if (questionIndex === 2) {
              switch (resultID) {
                case 0:
                  this.setState({gender:"os"});
                  break;
                case 1:
                  this.setState({gender: "a"});
                  break;
                case 2:
                  this.setState({gender: "on"});
                  break;
                default:
              }
            }

            if (questionIndex === 3) {
              switch (resultID) {
                case 0:
                  this.setState({place:" of Helicon"});
                  break;
                case 1:
                  this.setState({place:" of Knossos"});
                  break;
                case 2:
                  this.setState({place:" of Miletus"});
                  break;
                case 3:
                  this.setState({place:" of Croton"});
                  break;
                case 4:
                  this.setState({place:" of Akragas"});
                  break;
                case 5:
                  this.setState({place:" of Ephesus"});
                  break;
                case 6:
                  this.setState({place:" of Elea"});
                  break;
                case 7:
                  this.setState({place:" of Abdera"});
                  break;
                default:
              }
            }
          }
        }}
        // facebookShareButton={true}
        // facebookShareLink={"www.yourlink.com"}
        // twitterShareButton={true}
        // twitterShareLink={"www.yourlink.com"}
        // copyShareButton={true}
        // copyShareLink={"This text was copied using the copyShareLink prop."}
        questions={[
          {
            question: "Which Greek god describes you?",
            backgroundColor: "#2484ca",
            answerArrangement: "row",
            //   backgroundImageSrc: BackgroundImage,
            answers: [
              {
                answer: "Zeus (the sky, wisdom, justice, willpower, thunderbolt)",
                resultID: 0,
              },
              {
                answer: "Hera (power, royalty, importance of family and trust)",
                resultID: 1,
              },
              {
                answer: "Athena (wisdom, insight, battle strategy, kind to weak)",
                resultID: 2,
              },
              {
                answer: "Apollo (sunlight, prophecy, music, memory, and medicine)",
                resultID: 3,
              },
              {
                answer: "Artemis (moonlight, the wilds of nature, forests, archery, hunting)",
                resultID: 4,
              },
              {
                answer: "Hesti (hearth and home, security, centeredness, firelight)",
                resultID: 5,
              },
              {
                answer: "Aphrodite (love, desire, playfulness, beauty, sexuality)",
                resultID: 6,
              },
              {
                answer: "Ares (war, anger, passion, dance)",
                resultID: 7,
              },
              {
                answer: "Hermes (interpretation, language, translation, business, travel)",
                resultID: 8,
              },
              {
                answer: "Demeter (cultivated nature, agriculture, food security, motherhood)",
                resultID: 9,
              },
              {
                answer: "Persephone (flowers, agriculture, daughterhood)",
                resultID: 10,
              },
              {
                answer: "Poseidon (oceans, deep places, monsters, emotional passion)",
                resultID: 11,
              },
              {
                answer: "Hades (the underworld, the dead, invisibility)",
                resultID: 12,
              },
              {
                answer: "Dionysus (ecstasy, self-transcendence, the party, wine and dance)",
                resultID: 13,
              },
              {
                answer: "Hecate (magic, travel between realms, crossroads)",
                resultID: 14,
              }
            ],
          },
          {
            question: "What is your relation to your Greek god?",
            backgroundColor: "purple",
            answers: [
              {
                answer: "You're a gift of the god to the world",
                backgroundColor: "purple",
                resultID: 0,
              },
              {
                answer: "You're a manifestation of the god",
                backgroundColor: "purple",
                resultID: 1,
              },
              {
                answer: "You bring glory to the god",
                backgroundColor: "purple",
                resultID: 2,
              },
              {
                answer: "You're just similar to the god",
                backgroundColor: "purple",
                resultID: 3,
              }
            ],
          },
          {
            question: "What gender are you?",
            backgroundColor: "white",
            fontColor: "black",
            answers: [
              {
                answer: "Male",
                resultID: 0,
              },
              {
                answer: "Female",
                resultID: 1,
              },
              {
                answer: "Neutral",
                resultID: 2,
                // revealResponse: {
                //   title: "Here's an answer response!",
                //   description: "Here's a description for the answer response!",
                //   //  image: ResponseImage,
                //   imageAttribution: "Answer response image attribution text goes here",
                // },
              },
            ],
          },
          {
            question: "How do you perceive the world?",
            backgroundColor: "#3d3f77",
            answerArrangement: "row",
            //   backgroundImageSrc: BackgroundImage,
            answers: [
              {
                answer: "Mythology, storytelling, and artistic inspiration",
                resultID: 0,
              },
              {
                answer: "Statecraft and just laws, for the common good of all",
                resultID: 1,
              },
              {
                answer: "Scientific accuracy and material analysis",
                resultID: 2,
              },
              {
                answer: "Pure mathematics, with a tinge of mystery & music",
                resultID: 3,
              },
              {
                answer: "Mystery, magic, and the unknown",
                resultID: 4,
              },
              {
                answer: "Life’s ever-changing flux, with a pattern",
                resultID: 5,
              },
              {
                answer: "The constancy of logic and intuition… and paradox",
                resultID: 6,
              },
              {
                answer: "It’s all a matter of perspective and persuasion",
                resultID: 7,
              },
            ],
          }
        ]}
        results={getResults()} facebookShareButton={false} twitterShareButton={false} copyShareButton={false}      />
    );
  }
};