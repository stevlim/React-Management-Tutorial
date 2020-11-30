import './App.css';
import React, { Component } from 'react';
import Customer from "./components/Customer"

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

function App() {
  return (
    <div>
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
    
    </div>
    
  );
}

export default App;
