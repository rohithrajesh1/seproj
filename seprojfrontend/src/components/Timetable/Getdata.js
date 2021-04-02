import React from 'react';
import Signin from '../Signin/Signin';
import Timetable from './Timetable';

var percentArray = [];


//for (var l=0;l<20;l++){
//    obj.array[l] = l+1;
//}

//var flg=false;

class Getdata extends React.Component {
    constructor(){
        super()
        this.state={
            array:[],
            array_class:[]
        }
        


    }
    componentDidMount(){
        
        fetch('http://localhost:2500/getTeachers',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
              choice:"teachers"
            })


        })
        .then(response=> response.json())
        .then(resp=> {
            if(resp[0].name){

                var teacher_list = [];

                for(var teacher of resp){
                    teacher_list.push({
                        name:teacher.name,
                        email:teacher.email
                    });
                }
                this.setState({
                    array:teacher_list,
                    array_class:this.state.array_class
                })
                console.log(this.state.array)

            
            }
            else{
                return alert("Failed getteachers")
            }
        })


        fetch('http://localhost:2500/getTeachers',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
              choice:"classes"
            })


        })
        .then(response=> response.json())
        .then(resp=> {
            if(resp[0].secnumber){

                
                this.setState({
                    array:this.state.array,
                    array_class:resp
                })
                console.log(this.state.array)

            
            }
            else{
                return alert("Failed getClasses")
            }
        })
        
        
    }



    render() {
        return(
            //<Signin />
            <Timetable state={this.state}/>
            )
    
    }
}

export default Getdata;