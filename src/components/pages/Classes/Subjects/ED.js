import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100%;
    overflowY: hidden;
    background-color: #EBECF0;
`

const Heading = styled.h1`
    font-size: 25px;
    padding: 15px 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Li = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Item = styled.ul`
    text-align: center;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
    width: 40%;
    margin-top: 10px;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-size: 20px;
    border-radius: 25px;
    padding: 15px;
    background-color: #EBECF0;
    text-shadow: 1px 1px 0 #FFF;
`

const Details = styled.p`
    padding-top: 5px;
    font-size: 12px;
    font-family: sans-serif;
`

const ED = () => {
    return (
        <Div>
            <Heading>Engineering Drawing</Heading>
                <Li>
                    <Item>
                        <a href="https://youtu.be/SPHHj2MO35k">A2 Part-I</a>
                        <br></br>
                        <a href="https://youtu.be/uZQJo7ziCck">A2 Part-II</a>
                        <br></br>
                        <a href="https://youtu.be/Pm0Q1ziLTtA">A2 Part-III</a>
                        <br></br>
                        <a href="https://youtu.be/mRNySjGMDOI">A2 Part-IV</a>
                        <Details>GB, 28th January 2021</Details>
                    </Item>
                    <Item>First Class</Item>
                    <Item>First Class</Item>
                    <Item>First Class</Item>
                </Li>
        </Div>
    );
}

export default ED
