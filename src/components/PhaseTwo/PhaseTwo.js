import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.



class PhaseTwo extends React.Component{

  render(){
    return(
      <div>
        <h1>Hi masashi</h1>
        {this.props.supplierData[0].name}
        {console.log(this.props.supplierData)}
        {console.log(this.props.altModuleData)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    supplierData: state.supplierData,
    altModuleData: state.altModuleData,
  };
}

export default connect(mapStateToProps)(PhaseTwo);
