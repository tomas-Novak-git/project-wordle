import React from 'react'

function Input({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  
  function handleSubmit(event)  {
  event.preventDefault();
  handleSubmitGuess(tentativeGuess);
  setTentativeGuess('');
}
  return (
  <form className='guess-input-wrapper' onSubmit={handleSubmit}>
    <label htmlFor='gameInput'>
      Enter your word:
    </label>
    <input
    disabled={gameStatus  !== 'running'}
    required
    id='gameInput'
    type="text"
    pattern="[a-zA-Z]{5}"
    minLength={5}
    maxLength={5}
    title='5 letter words'
    value={tentativeGuess}
    onChange={(event) => {
      const nextGuess = event.target.value.toUpperCase();
      setTentativeGuess(nextGuess)
    }}
    >
    </input>
  </form>
  )
}

export default Input;