import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles, theme } from './styles';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid} from './components'

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
