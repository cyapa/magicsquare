import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { MuiThemeProvider } from 'material-ui/styles';
import { TextField } from 'material-ui';
import { grey200, red100 } from 'material-ui/styles/colors';


const SUM = 15;
class App extends Component {

  checkRowSum = ()=>{}
  checkColumnSum = ()=>{}
  checkFWDiagonalSum =()=>{}
  checkBWDiagonalSum =()=>{}
  
  render() {
    return (
      <div>
       <MuiThemeProvider>
         
       <Table>
                <TableHeader>
                </TableHeader>
                <TableBody displayRowCheckbox={false} > 
                  <TableRow >
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                  </TableRow>
                  <TableRow >
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                  </TableRow>
                  <TableRow >
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                    <CustomRowCell enabled={true}/>
                  </TableRow>
                </TableBody>
            </Table>

         </MuiThemeProvider>
      </div>
    );
  }
}

class CustomRowCell extends Component{
  constructor(props){
    super();
    this.state={
      val:0
    }
  }

  updateVal = (e,v)=>{
    this.setState({val:v});
  }
  render(){
    return(<TableRowColumn><TextField onChange={this.updateVal} style={{width:25,height:30, backgroundColor:grey200}} disabled={!this.props.enabled} value ={this.state.val}/></TableRowColumn>)
  }
}

export default App;
