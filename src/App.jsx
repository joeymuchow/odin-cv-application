import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import Button from './components/Button'

function App() {
  const [generalInfo, setGeneralInfo] = useState({})
  const [educationalExp, setEducationalExp] = useState({})
  const [practicalExp, setPracticalExp] = useState({})
  const [showCV, setShowCV] = useState(false)

  // Should all the components below be surrounded by a form?
  // As in this file has a form element surrounding all components
  // General information
  // Educational experience
  // Practical experience

  // make a visual component that uses info from above components to create a resume

  // There will be a submit button for taking all the entered info and displaying it in a view
  // There should be either one edit button for the whole form or one for each section. I'm leaning toward one edit button for everything
  // Clicking edit will show the components for entering info again, with their current values filled in
  return (
    <>
      {
        showCV ?
          <div>
            <Button text='Edit' onClick={() => setShowCV(false)} />
          </div> :
          <>
            <GeneralInformation generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            <EducationalExperience educationalExp={educationalExp} setEducationalExp={setEducationalExp} />
            <PracticalExperience practicalExp={practicalExp} setPracticalExp={setPracticalExp} />
            <Button text='Submit' onClick={() => setShowCV(true)} />
          </>
      }
    </>
  )
}

export default App
