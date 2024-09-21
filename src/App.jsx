import { useEffect, useState } from 'react'
import Background from './components/Background/Background';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

const App = () => {
    let heroData = [
        {text1: "Dive in to", text2: "what we love"},
        {text1: "Indulge", text2: "your passions"},
        {text1: "Give in to", text2: "your passions"}
    ]

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
      setInterval(() => {
        setHeroCount((count) => { return count===0?2:count-1})
      }, 3000);
    },[])

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <NavBar />
            <Hero 
              setPlayStatus = {setPlayStatus}
              heroData = {heroData[heroCount]}
              heroCount = {heroCount}
              setHeroCount = {setHeroCount}
              playStatus = {playStatus}
            />
        </div>
    )
}

export default App