import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12 } from './questions/reviewQuestions';
import { setA, setB, setC, setD, setE, setF, setG } from './questions/questions';

function App() {
  const sets = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12];
  const miscSets = [
    {name:'Set A - Random Questions',set:setA},
    {name:'Set B - Current Test',set:setB},
    {name:'Set C - Udemy Test',set:setC},
    {name:'Set D - Case Studies',set:setD},
    {name:'Set E - Case Studies',set:setE},
    {name:'Set F - Case Studies',set:setF},
    {name:'Set G - Case Studies',set:setG}];
  const letters = ['A','B','C','D','E','F'];
  const [title, setTitle] = useState('');
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
    if(setType !== 20) {
      if(setType > 0 && setType < 13) {
        setQuestionSet(shuffle(sets[setType - 1]));
        setTitle('CH ' + setType);
      }
      if(setType === 0 || setType > 12) {
        setQuestionSet(shuffle(miscSets[setType - 13].set));
        setTitle(miscSets[setType - 13].name);
      }
    } else {
      setQuestionSet(randomTest());
      setTitle('Random');
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
    <div className='App'>
      <div className='caseStudyBox'>
        <h5>DIRECTIONS</h5>
        <div><p>Click a question set (like CH1) to see the question practice set.</p>
        <p>Each Set will be randomized and include the suggested time limit for the question set.</p>
        <p>Click "SCORE TEST" when you have finished answering questions to see your score and the correct answer.</p>
        <p>Go through each set multiple timess until you are able to score 100% each time.</p></div>
        <h5 className='mt-4 pt-2'>CASE STUDY LINKS</h5>
        <p>Use these links to review the Case Studies for the Exam:</p>
        <div className='cs'><a target='_blank' href='https://services.google.com/fh/files/blogs/master_case_study_mountkirk_games.pdf' rel='noopener noreferrer'>MountKirk</a></div>
        <div className='cs'><a target='_blank' href='https://services.google.com/fh/files/blogs/master_case_study_terramearth.pdf' rel='noopener noreferrer'>TerramEarth</a></div>
        <div className='cs'><a target='_blank' href='https://services.google.com/fh/files/blogs/master_case_study_helicopter_racing_league.pdf' rel='noopener noreferrer'>Helicopter Racing League</a></div>
        <div className='cs'><a target='_blank' href='https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf' rel='noopener noreferrer'>EHR Healthcare</a></div>
      </div>
      <div className='questionBox'>
        <div className='py-2 mt-4'>
        <h2>GCP Architect Pro - Test Questions</h2>
        </div>
        <div className='container' style={{maxWidth:"700px"}}>
        <div className='py-2 mt-2'>
          <div className='course-btns'>
            <div>GCP Prep Course Questions</div>
            {sets.map((a, index) => 
              (<div key={index} className='btn btn-sm btn-info' onClick={() => {resetTest(index +1);}}>CH {index +1}</div>)
            )}
          </div>
          <div className='py-2 course-btns'>
            <div>Misc Practice Test Questions</div>
            {miscSets.map((a, index) => 
              (<div key={index} className='btn btn-sm btn-info' onClick={() => {resetTest(index +13);}}>{a.name}</div>)
            )}
            <div className='btn btn-sm btn-info' onClick={() => {resetTest(20);}}>RANDOM</div>
          </div>
          <div className='my-2'>{isScored && 'Score: ' + score + '/' + total}  {isScored && <strong>{((score/total)*100)}%</strong>} &nbsp;</div>
        </div>
        <div>
          {questionSet.length > 0 &&
            <div className='pb-2' style={{fontSize:'30px',fontWeight:'bold'}}>{title} - TIME {2 * questionSet.length} Minutes</div>
          }
        {questionSet.map((q, i) => 
          (
            <div className='row py-2' key={q.id}>
              <div className='col' style={{textAlign:'left'}}>
                <div className='py-2 d-flex'>
                  <div><strong>{i + 1} :&nbsp;</strong></div>
                  <div style={{textAlign:'left', width:'calc(100% - 65px)'}}><strong>{q.question}</strong>
                  {q.options && q.options.map((option, i) => (<div key={i}>{option}</div>))}
                  {q.img && <div className='py-4'><img src={q.img} alt='question'/></div>}
                  </div>
                </div>
                <div style={{marginLeft:'20px'}}>
                  {q.answers.map((a) => 
                    (<div key={a.id} className='my-1 py-1 d-flex clickable'  onClick={() => toggleAnswer(q.id, a.id, q.answerId)}>
                      <div><div className={'btn btn-sm' + (checkSelect(q.id, a.id) ? ' btn-primary' : ' btn-secondary')} style={{marginRight:'10px'}}>{letters[a.id]}</div></div><div>{a.desc}</div></div>)
                  )}
                </div>
                {isScored && 
                <div className='my-3'>
                  <div style={{marginBottom:'5px'}} className='border p-3'>
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
        <div className='my-4'>
          {!isScored && isStarted && <div className='btn btn-lg btn-primary' onClick={() => {scoreTest()}}>Score Test</div>}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
