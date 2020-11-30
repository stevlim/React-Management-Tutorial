import './App.css';
import React, { Component } from 'react';
import Customer from "./components/Customer"
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import {withStyles} from '@material-ui/core/styles';
import { render } from '@testing-library/react';

const styles = theme => ({
  root: {
    width : "100%",
    marginTop : theme.spacing.unit * 3,
    overFlowX : "auto"
  },
  table : {
    minWidth :1080
  }
});

const customers = [
  {
  "id" : 1,
  "image" : "http://placeimg.com/64/64/any",
  "name" : "홍길동2",
  "birthday" : "960122",
  "gender" : "여자",
  "job" : "대학생"
  },
  {
    "id" : 2,
    "image" : "http://placeimg.com/64/64/any?p=1",
    "name" : "홍길나",
    "birthday" : "920122",
    "gender" : "남자",
    "job" : "회장"
    },
    {
      "id" : 3,
      "image" : "http://placeimg.com/64/64/any?p=2",
      "name" : "홍길서",
      "birthday" : "060122",
      "gender" : "여자",
      "job" : "의사"
      } 
]

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(c => {
              return (
                
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  ></Customer>
                
                
              );
            })
          }
            
          </TableBody>
          
        </Table>

      </Paper>
        
    );
  }
  
}

export default withStyles(styles)(App);
