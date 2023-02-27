import React, { Component } from 'react';
import '../css/Person.css';
import ListOfPersons from './ListOfPersons';


const Person = ({data})=>{
    return(<div><ListOfPersons data={data}/></div>)
}

export default Person;