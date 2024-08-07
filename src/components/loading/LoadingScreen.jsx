import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { LoadingDots } from './index'
import { StarsCanvas } from '../../components'

const message = [
  "W", "e", "l", "c", "o", "m", "e", '\xa0',
  "T", "o", '\xa0',
  "M", "y", '\xa0',
  "P", "o", "r", "t", "f", "o", "l", "i", "o", "!"
]

const LoadingCharacter = ({character, index}) => {
  return (
    <motion.div
      initial={{ 
        y: "100%",
        opacity: 0
      }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{
        type: "intertia",
        velocity: 50,
        delay: index*0.05
      }}
      className={`${styles.heroSubText} text-white font-normal`}
    >
      {character}
    </motion.div>
  )
}

const LoadingScreen = () => {
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <>
          <div className="flex flex-row h-screen mx-auto items-center justify-center">
            {message.map((char, index) => (
              <LoadingCharacter character={char} index={index} key={index}/>
            ))}
            <StarsCanvas />
          </div>
        </>
      )}
    </>
  )
}

export default LoadingScreen
