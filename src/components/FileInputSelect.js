import React from 'react';
import Papa from 'papaparse';


export default class FileInput extends React.Component {
    constructor(props) {
      super(props)
      this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);
        //this.props.addFunction("Test");

        if (file) {
          Papa.parse(file, {
          	complete: function(results) {
              var functionList = results.data[3];
              functionList.shift();
          		console.log(functionList);
              console.log(this.props.updateFunctionList);
              //this.props.updateFunctionList(functionList);


              var requirementList = results.data[9];
              requirementList.shift();
          		console.log(requirementList);
              //this.props.updateRequirementList(requirementList);
          	}
          });
        }
    }

    render() {
      return <span>
        <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      </span>
    }
}
