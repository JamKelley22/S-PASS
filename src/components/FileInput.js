import React from 'react';
import Papa from 'papaparse';
import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {updateRequirementList,updateFunctionList,updateModuleList} from '../actions/updateActions';
import {Button} from 'react-bootstrap';

class FileInput extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        file:null
      }
      this.getFile = this.getFile.bind(this);
      this.doStuff = this.doStuff.bind(this);
      this.parseData = this.parseData.bind(this);
    }

    parseData(file,callback) {
        Papa.parse(file, {
          complete: function(results) {
            callback(results.data);
          }
        });
    }

    doStuff(data) {
      var functionList = data[3];
      functionList.shift();
      console.log(functionList);
      this.props.updateFunctionList(functionList);

      var requirementList = data[9];
      requirementList.shift();
      console.log(requirementList);
      this.props.updateRequirementList(requirementList);

      var moduleList = data[6];
      moduleList.shift();
      console.log(moduleList);
      this.props.updateModuleList(moduleList);

    }

    getFile(event) {
      let file = event.target.files[0];
      console.log(file);
      if (file) {
        this.parseData(file,this.doStuff);
      }
    }

    render() {
      return (
        <span>
          <input type="file"
          name="myFile"
          onChange={this.getFile} />
        </span>
    );
    }
}

function mapStateToProps(state){
  return{

  };
}

function matchDispatchToProps(dispatch,list){
  return bindActionCreators({
    updateFunctionList : updateFunctionList,
    updateRequirementList : updateRequirementList,
    updateModuleList : updateModuleList,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(FileInput);
