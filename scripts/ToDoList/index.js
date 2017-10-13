import task from './task.json'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import * as RB from 'react-bootstrap'
export default class TaskTable extends React.Component{
    constructor(props){
        super(props);
        let date = new Date();
        let _task = [].concat(task)
        date = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
        let index = _task.reverse().findIndex((_ta)=>{
            console.log(_ta.date)
            console.log(date)
            return _ta.date === date
        })
        this.state = {
            date: date,
            dataList: _task.slice(0, 7)
        }
    }
    formatData(data){
        let keys = Object.keys(data).filter(key=>key!=='date')
        let dataList = [];
        let maxLength = keys.map(key=>data[key].length).reduce((a, b)=>{
            return a>b?a: b
        }, 0)
        for(let index = 0; index<maxLength; index++){
            let obj = {};
            keys.forEach((key)=>{obj[key] = data[key][index]||""})
            obj['table_key_id'] = Math.random(10000)
            dataList.push(obj)
        }
        return dataList;
    }
    changeDate(e){
        let index = task.findIndex((_ta)=>{
            return _ta.date === e.value
        })
        this.setState({
            date: e.value,
            dataList: task.slice(index, index+7)
        })
    }
    formatter(va){
        let toolTip = <RB.Tooltip id='tag_edit'>{va}</RB.Tooltip>
        return (
            <RB.OverlayTrigger placement="top" overlay={toolTip}>
                <div style = {{width: '100%', color:'white', overflow:'auto'}} >{va}</div>
            </RB.OverlayTrigger>
        )
    }
    renderTableList(){
        const tablepara = [{name: "table_key_id"}, {name: "todo"}, {name: "done"}, {name: "highlight"}]
        let count = 0;

        return this.state.dataList.map((_data, index)=>{
            return (
                <div key = {index} style = {{paddingBottom: 20}}>
                    <label style = {{color: 'white'}}>{_data.date}</label> 
                    <BootstrapTable ref={'taskTable'+index} data={this.formatData(_data)}>
                        {
                            (() => {
                                let list = tablepara.map((va) => {
                                    if (va.name == "table_key_id") {
                                        return (<TableHeaderColumn key={count++} isKey={true} dataField="table_key_id" hidden={true} autoValue={true}>ss</TableHeaderColumn>);
                                    }
                                    return (<TableHeaderColumn key={count++} dataFormat={this.formatter} dataField={va.name}>{va.name}</TableHeaderColumn>);
                                })
                                return list;
                            })()
                        }
                    </BootstrapTable>
                </div>
            )
        })
    }

    render(){
        let style = {
            zIndex: 100,
            top: '20%',
            width: '80%',
            position: 'absolute',
            paddingLeft: '10%',
            height: '500px',
            overflow: 'auto'
        }
        let date = new Date();
        return (
            <div style = {style}>
                <div>
                    <Select
                        options = {task.map(_ta=>{return {label: _ta.date, value: _ta.date}})}
                        id = '12'
                        value = {this.state.date}
                        onChange = {this.changeDate.bind(this)}
                    />
                </div>
                {this.renderTableList()}
            </div>
        )
    }
}
