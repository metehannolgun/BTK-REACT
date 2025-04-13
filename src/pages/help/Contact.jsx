import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'></input>
          </div>
          <div>
            <label htmlFor='message'>Mesaj</label>
            <textarea name='message'></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact