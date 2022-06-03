import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(255, 255, 255);
  background-color: #CD5C5C;
  margin: 0;
  box-sizing: border-box;

  input{
  height: 60px;
  width: 600px;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px;
  color: #3A3A3A;
  border: 2px solid #fff;
  font-family:Nunito, sans-serif;
  font-size: 18px ;
  font-weight: 600;
  }
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
`

export const Card = styled.div`
  border-radius: 3%;
  border: 1px solid #fff;
  color: #fff;
  margin: 10px;
  height:304px;

  img {
    border-radius: 3%;
    padding-top: 4px;
    width: 250px;
    height: 250px;
  }

  p{
    text-align: center;
    font-size: 18px;
    color: #fff;
    margin-top: 6px;
    font-family:Nunito, sans-serif;
    font-size: 18px ;
    font-weight: 600;
  }
`