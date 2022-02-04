import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12 } from './ReviewQuestions';
import { setA, setB, setC, setD, setE, setF, setG } from './Questions';

function App() {

  const [showMK, setShowMK] = useState(false);
  const [showHC, setShowHC] = useState(false);
  const [showHRL, setShowHRL] = useState(false);
  const [showTE, setShowTE] = useState(false);

  const sets = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12, setD];
  const letters = ['A','B','C','D','E','F'];
  const [title, setTitle] = useState("");
  const [questionSet, setQuestionSet] = useState([]);
  const [answerSheet, setAnswerSheet] = useState({});
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [isScored, setIsScored] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const toggleAnswer = (qId, aId, qAnswers) => {
    let myAnswers = {...answerSheet};
    let newAnswers = [];
    let toggleOut = false;
    if(myAnswers[qId] !== undefined) { newAnswers = myAnswers[qId];}
    // remove old reference
    let aIndex = newAnswers.indexOf(aId);
    if(aIndex > -1) {
      newAnswers.splice(aIndex, 1);
      toggleOut = true;
    }
    // make room for new item
    if(newAnswers.length === qAnswers.length) {
      newAnswers.splice(0, 1);
    }
    // add new item if we're not toggling out
    if(!toggleOut) {
      newAnswers.push(aId);
    }
    // set new array
    myAnswers[qId] = newAnswers;
    setAnswerSheet(myAnswers);
  };

  const scoreTest = () => {
    let myScore = 0;
    let totalQuestions = 0;
    questionSet.forEach((q) => {
      if(answerSheet[q.id] !== undefined) {
        let myAnswers = answerSheet[q.id];
        myAnswers.forEach((x) => {
          let qValue = 0;
          if(q.answerId.indexOf(x) > -1) {
            qValue++;
          }
          if(qValue === q.answerId.length) {
            myScore++;
          }
        });
      }
      totalQuestions++;
    });
    setTotal(totalQuestions);
    setScore(myScore);
    setIsScored(true);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  const randomTest = () => {
    let fn = [];
    let fnSets = shuffle(sets);
    fnSets.forEach((el) => {
      let randomIndex = Math.floor(Math.random() * el.length);
      if(fn.length < 15) {
        fn.push(el[randomIndex]);
      }
    });
    return fn;
  };

  const resetTest = (setType = 0) => {
    setIsStarted(false);
    setScore(0);
    setQuestionSet([]);
    setAnswerSheet({});
    setIsScored(false);
    if(setType > 0 && setType < 13) {
      setQuestionSet(shuffle(sets[setType - 1]));
      setTitle("CH " + setType);
    }
    if(setType === 0 || setType > 12) {
      switch(setType) {
        case 13:
          setQuestionSet(shuffle(setA));
          setTitle("set A - Random Questions");
        break;
        case 14:
          setQuestionSet(shuffle(setB));
          setTitle("set B - Current Test");
        break;
        case 15:
          setQuestionSet(shuffle(setC));
          setTitle("set C - Udemy Test");
        break;
        case 16:
          setQuestionSet(shuffle(setD));
          setTitle("set D - Case Studies");
        break;
        case 17:
          setQuestionSet(shuffle(setE));
          setTitle("set E - Case Studies");
        break;
        case 18:
          setQuestionSet(shuffle(setF));
          setTitle("set F - Case Studies");
        break;
        case 19:
          setQuestionSet(shuffle(setG));
          setTitle("set G - Case Studies");
        break;
        case 20:
          setQuestionSet(randomTest());
          setTitle("Random");
        break;
        default:
          setQuestionSet([]);
          setTitle("None Selected");
        break;
      }
    }
    setIsStarted(true);
  }

  const checkSelect = (qId, aId) => {
    let x = [];
    if(answerSheet[qId] !== undefined) {
      x = answerSheet[qId];
    }
    return x.indexOf(aId) > -1;
  };

  return (
    <div className="App">
      <div className="caseStudyBox">
        <div>CASE STUDIES</div>
        <div className="cs">
          <div className="cs-title" onClick={() => {setShowMK(!showMK)}}>MountKirk</div>
          {showMK &&
          <div className="cs-details"><a target="_blank" href='https://services.google.com/fh/files/blogs/master_case_study_mountkirk_games.pdf' rel="noreferrer">DETAILS</a></div>
          }
        </div>
        <div className="cs">
          <div className="cs-title" onClick={() => {setShowTE(!showTE)}}>TerramEarth</div>
          {showTE &&
          <div className="cs-details"><a target="_blank" href='https://services.google.com/fh/files/blogs/master_case_study_terramearth.pdf' rel="noreferrer">DETAILS</a></div>
          }
        </div>
        <div className="cs">
          <div className="cs-title" onClick={() => {setShowHRL(!showHRL)}}>Helicopter Racing League</div>
          {showHRL &&
          <div className="cs-details"><a target="_blank" href='https://services.google.com/fh/files/blogs/master_case_study_helicopter_racing_league.pdf' rel="noreferrer">DETAILS</a></div>
          }
        </div>
        <div className="cs">
          <div className="cs-title" onClick={() => {setShowHC(!showHC)}}>EHR Healthcare</div>
          {showHC &&
          <div className="cs-details"><a target="_blank" href='https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf' rel="noreferrer">DETAILS</a></div>
          }
        </div>
      </div>
      <div className="container" style={{maxWidth:"700px"}}>
        <div className="py-2 mt-4">
        <h3>GCP Architect Pro - Test Questions</h3>
        </div>
        <div className="py-2 mt-4">
          <div>
            <div>Prep Course Questions</div>
            <div className="btn btn-lg btn-info" onClick={() => {resetTest(1);}}>CH 1</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(2);}}>CH 2</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(3);}}>CH 3</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(4);}}>CH 4</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(5);}}>CH 5</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(6);}}>CH 6</div>
          </div>
          <div className="py-2">
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(7);}}>CH 7</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(8);}}>CH 8</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(9);}}>CH 9</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(10);}}>CH 10</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(11);}}>CH 11</div>
            <div className="btn btn-lg btn-info" onClick={() => {resetTest(12);}}>CH 12</div>
          </div>
          <div className="py-2">
            <div>Misc Questions</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(13);}}>SET A</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(14);}}>SET B</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(15);}}>SET C</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(16);}}>SET D</div>
          </div>
          <div className="py-2">
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(17);}}>SET E</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(18);}}>SET F</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(19);}}>SET G</div>
            <div className="btn btn-lg btn-info mx-2" onClick={() => {resetTest(20);}}>RANDOM</div>
          </div>
          <div className="my-2">{isScored && "Score: " + score + "/" + total}  {isScored && <strong>{((score/total)*100)}%</strong>} &nbsp;</div>
        </div>
        <div>
          {questionSet.length > 0 &&
            <div className="pb-2" style={{fontSize:"30px",fontWeight:"bold"}}>{title} - TIME {2 * questionSet.length} Minutes</div>
          }
        {questionSet.map((q, i) => 
          (
            <div className="row py-2" key={q.id}>
              <div className="col" style={{textAlign:'left'}}>
                <div className="py-2 d-flex">
                  <div><strong>{i + 1} :&nbsp;</strong></div>
                  <div style={{textAlign:'left', width:"calc(100% - 65px)"}}><strong>{q.question}</strong>
                  {q.options && q.options.map((option, i) => (<div key={i}>{option}</div>))}
                  {q.img && <div className="py-4"><img src={q.img} alt="question"/></div>}
                  </div>
                </div>
                <div style={{marginLeft:'20px'}}>
                  {q.answers.map((a) => 
                    (<div key={a.id} className="my-1 py-1 d-flex clickable"  onClick={() => toggleAnswer(q.id, a.id, q.answerId)}>
                      <div><div className={"btn btn-sm" + (checkSelect(q.id, a.id) ? " btn-primary" : " btn-secondary")} style={{marginRight:'10px'}}>{letters[a.id]}</div></div><div>{a.desc}</div></div>)
                  )}
                </div>
                {isScored && 
                <div className="my-3">
                  <div style={{marginBottom:'5px'}} className="border p-3">
                    <div style={{marginBottom:'5px'}}>Correct Answer(s):
                      {q.answerId.map((aId) => (<strong key={aId}>{letters[aId]}</strong>))}
                    </div>
                    <div><strong>Rationale:</strong></div>
                    {q.rationale.map((rat) => (<div key={rat.id}>{rat.desc}</div>))}
                  </div>
                </div>
                }
              </div>
            </div>
          )
        )}
        </div>
        <div className="my-4">
          {!isScored && isStarted && <div className="btn btn-lg btn-primary" onClick={() => {scoreTest()}}>Score Test</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
