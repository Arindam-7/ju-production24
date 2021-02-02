import React from 'react';
import coder from '../../images/coder-resized.jpg';
import styled from 'styled-components';

const Img = styled.img`
    height: 250px;
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Dekko&display=swap');    
    font-size: 14px;
    text-align: center;
    font-size: 14.5px;
    padding-top: 10px;
`

const Arindam = () => {
    return (
        <div>
            <h1>wait!</h1>
            <P>what did you expect to see here?</P>
            <P>well, anyway, I don't wanna disappoint you, so here's a joke</P>
            <Img alt="coder" src={coder}></Img>
            <P>Sherlock Holmes and Dr Watson were going for camping. They pitched their tent under the stars and went to sleep. Sometime in the middle of the night Holmes woke Watson up and said: "Watson, look up at the sky, and tell me what you see." Watson replied: "I see millions and millions of stars." Holmes said: "And what do you deduce from that?" Watson replied: "Well, if there are millions of stars, and if even a few of those have planets, it’s quite likely there are some planets like Earth out there. And if there are a few planets like Earth out there, there might also be life." And Holmes said: "Watson, you idiot, it means that somebody stole our tent."</P>
        </div>
    )
}

export default Arindam;
