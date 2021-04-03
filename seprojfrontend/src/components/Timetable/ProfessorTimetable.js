import React from 'react';

class ProfessorTimetable extends React.Component {

    constructor(props){
        super(props);
        this.state={
            sub_array:[],
            room_array:[],
            class_array:[]

        }
    }


    onGetProfTimeTable = () => {
        const email=document.getElementById('chprof').value
        alert(email)
        fetch('http://localhost:2500/getTeacherTimetable',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
              email:email
            })


        })
        .then(response=> response.json())
        .then(resp=> {
            if(resp.sub_array){

                
                this.setState({
                    sub_array:resp.sub_array,
                    class_array:resp.class_array,
                    room_array:resp.room_array
                })
                console.log(this.state)

            
            }
            else{
                return alert("Failed getFaculty")
            }
        })
        
    }

    render() {
        //let class_list = this.props.state.array_class;
        //let classOptionItems = class_list.map((item) =>
          //      <option value={item.secnumber}>{item.secnumber}</option>
            //);

        let teacher_list = this.props.data;
        let profOptionItems = teacher_list.map((item) =>
                <option value={item.email}>{item.name} - {item.email}</option>
            );      
        return(
            <div>
                <h1 class="f3 f2-m f1-l fw6 black-90 mv3 b center" style={{marginTop:"2%",marginLeft:"3%"}}>
                    Choose professor name to view timetable 
                </h1>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Choose professor name from the list below</h1>
                    <div class="pa3 bt b--black-10">
                        <select id="chprof" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose professor name </option>
                            {profOptionItems}
                        </select>
                    </div>
                </article>

                <div className="" style={{textAlign:'center'}}>
                    <input
                        onClick={this.onGetProfTimeTable}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="button"
                        id="reg"
                        value="Get timetable"

                    />
                </div>

                <div class="overflow-auto">
                <table class="f6 w-100 mw8 center" cellspacing="0" style={{marginTop:'2%'}}>
                <thead>
                    <tr class="stripe-dark">
                    <th class="fw6 tl pa3 bg-white">Day</th>
                    <th class="fw6 tl pa3 bg-white">Period 1</th>
                    <th class="fw6 tl pa3 bg-white">Period 2</th>
                    <th class="fw6 tl pa3 bg-white">Period 3</th>
                    <th class="fw6 tl pa3 bg-white">Period 4</th>
                    <th class="fw6 tl pa3 bg-white">Period 5</th>
                    <th class="fw6 tl pa3 bg-white">Period 6</th>

                    </tr>
                </thead>
                <tbody class="lh-copy">
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white" >Monday</td>
                    <td class="pa3">
                        <div>

                            
                        </div>
                    </td>
                    <td class="pa3">
                        <div>
                        

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                          

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                        

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Tuesday</td>
                    <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Wednesday</td>
                    <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                           
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Thursday</td>
                    <td class="pa3">
                        <div>
                            
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Friday</td>
                    <td class="pa3">
                        <div>
                            
                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            

                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>


            </div>

        );



    }    






}



export default ProfessorTimetable;