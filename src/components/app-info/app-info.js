import './app-info.css';
import styled from 'styled-components'

//Библиотека Styled-components css в js
const Wrapper = styled.div`
width: 600px;
margin: 80px auto 0 auto;
background: green;
h1 {
    background: blue;
}
`;
const AppInfo = (props) => {
    console.log(props);
    return (
        <Wrapper className="app-info" >
            <h1> Учет сотрудников </h1>
            <h2>Общее число сотрудников: {props.allCounter()}</h2>
            <h2>Премию получат:{props.riseCounter()} </h2>
        </Wrapper>
    )
}

export default AppInfo;