import React from 'react';

var percentArray = [];

let obj = {
    array: []
};
for (var l=0;l<20;l++){
    obj.array[l] = l+1;
}
let optionItems = obj.array.map((item) =>
        <option key={item}>{item}</option>
    );


class Timetable extends React.Component {


    render() {
        return (

            <div class="pa4"> 
                
                <h1 class="f3 f2-m f1-l fw6 black-90 mv3 b center" style={{marginTop:"0%"}}>
                    Input the class timetable in this window:      
                </h1>

                <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Choose the class here</h1>
                    <div class="pa3 bt b--black-10">
                        <select id="sm1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose the class</option>
                            {optionItems}
                        </select>
                    </div>
                    </article>

            <div class="overflow-auto">
                <table class="f6 w-100 mw8 center" cellspacing="0">
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
                    <td class="pa3"><div>
                        <select id="sm1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                        <option value="">Choose subject</option>
                        {optionItems}
                        </select>
                        <select id="fm1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                        <option value="">Choose faculty</option>
                        <option label="Music" value="2">Space Type
                        </option>
                        <option label="Photography" value="12">Space Type
                        </option>
                        <option label="Film" value="22">Space Type
                        </option>
                        <option label="Visual Art" value="32">Space Type
                        </option>
                        <option label="Performance" value="42">Space Type
                        </option>
                        <option label="Workshop" value="52">Space Type
                        </option>
                        <option label="Event" value="62">Space Type
                        </option>
                        <option label="Co-Working" value="72">Space Type
                        </option>
                        </select>

                        </div>
                    </td>
                    <td class="pa3">
                        <div>
                            <select id="sm2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fm2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sm3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fm3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sm4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fm4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sm5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fm5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sm6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="tm6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Tuesday</td>
                    <td class="pa3">
                        <div>
                            <select id="st1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject 1</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="st2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="st3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="st4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="st5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="st6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ft6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Wednesday</td>
                    <td class="pa3">
                        <div>
                            <select id="sw1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sw2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sw3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sw4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sw5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sw6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fw6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Thursday</td>
                    <td class="pa3">
                        <div>
                            <select id="sth1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sth2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sth3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sth4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sth5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sth6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="fth6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                    </tr>
                    <tr class="stripe-dark">
                    <td class="pa3 bg-white">Friday</td>
                    <td class="pa3">
                        <div>
                            <select id="sf1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff1" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sf2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff2" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sf3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff3" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sf4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff4" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sf5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff5" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                        <td class="pa3">
                        <div>
                            <select id="sf6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" >
                            <option value="">Choose subject</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>
                            <select id="ff6" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="" style={{marginTop:"2%"}}>
                            <option value="">Choose faculty</option>
                            <option label="Music" value="2">Space Type
                            </option>
                            <option label="Photography" value="12">Space Type
                            </option>
                            <option label="Film" value="22">Space Type
                            </option>
                            <option label="Visual Art" value="32">Space Type
                            </option>
                            <option label="Performance" value="42">Space Type
                            </option>
                            <option label="Workshop" value="52">Space Type
                            </option>
                            <option label="Event" value="62">Space Type
                            </option>
                            <option label="Co-Working" value="72">Space Type
                            </option>
                            </select>

                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div class="ph3" style={{marginTop:'4%',marginLeft:'44%'}}>
            <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy" href="#0">Submit timetable</a>
            </div>    
        </div>

        );

    }    


}    

export default Timetable;