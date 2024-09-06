import React from 'react';
import cn from '../style.module.scss';

const Form = () => {
  return (
    <div className={cn.Form}>
        <h4>Send us a message</h4>
        <p>If you have any work from me or any types of quies of quries related to my tutorial,your message from here. It’s our pleasure to help you</p>
        <form>
            <input type="text" placeholder='Enter your name' />
            <input type="text" placeholder='Enter your email' />
            <textarea type="text" placeholder='Enter your message' />
            <button>Send Now</button>
        </form>
    </div>
  )
}

export default Form