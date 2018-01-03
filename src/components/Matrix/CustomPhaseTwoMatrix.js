import React from 'react';
import {Table,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';
import './Matrix.css';
import Cell from './Cell.js';
import ReactScrollbar from 'react-scrollbar-js';

export default class CustomPhaseTwoMatrix extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      number: 0,
      threshs: [
        this.props.ModuleThresh.hazard,
        this.props.ModuleThresh.recycle,
        this.props.ModuleThresh.renew,
        this.props.SupplierThresh.iso,
        this.props.SupplierThresh.recycle,
        this.props.SupplierThresh.pack
      ],
      index: -1
    };
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.getPopover = this.getPopover.bind(this);
    this.getCellsToReturn = this.getCellsToReturn.bind(this);
    //this.highlightCell = this.highlightCell.bind(this);
    //this.normalizeCell = this.normalizeCell.bind(this);



  }

  handleDropdownSubmit(num) {
    let set = this.state.threshs;

    set[this.state.index] = parseFloat(num);
    this.setState({threshs: set},function() {
      //Where infor is to be sent out
      this.props.editCell(this.state.index, num);
    });
    //Declare arrays for index storage.
    let removeAltIndex=[];
    let addAltIndex=[];
    let removeSupIndex=[];
    let addSupIndex=[];

    //console.log("============++++++THESHS++++++=============");
    //console.log(this.state.threshs);
    if(this.props.acceptedAlternates.length!=0){
      removeAltIndex = this.props.findRemoveAltIndex(this.props.altData,this.state.threshs,this.props.acceptedAlternates);
    }
    if(this.props.selectedAlternates){
      addAltIndex = this.props.findAddAltIndex(this.props.altData,this.state.threshs,this.props.selectedAlternates,this.props.acceptedAlternates);
    }
    if(this.props.acceptedSuppliers.length!=0){
      removeSupIndex = this.props.findRemoveSupIndex(this.props.supData,this.state.threshs,this.props.acceptedSuppliers);
    }
    if(this.props.selectedSuppliers){
      addSupIndex = this.props.findAddSupIndex(this.props.supData,this.state.threshs,this.props.selectedSuppliers,this.props.acceptedSuppliers);
    }
    console.log("========Add and remove suppliers array========");
    console.log("remove");
    console.log(removeSupIndex);
    console.log("add");
    console.log(addSupIndex);
    let i=0;
    for(i=removeAltIndex.length-1; i>=0;i--){
      this.props.removeAcceptedAlternate(removeAltIndex[i]);
      this.props.removeColFaMMat(removeAltIndex[i]);
      this.props.removeColSaMMat(removeAltIndex[i]);
      this.props.removeRowMPAMat(removeAltIndex[i]);
    }
    for(i=0; i<addAltIndex.length;i++){
      this.props.addAcceptedAlternate(addAltIndex[i]);
      this.props.addColFaMMat();
      this.props.addColSaMMat();
      this.props.addRowMPAMat();
    }
    //suppliers
    for(i=removeSupIndex.length-1; i>=0;i--){
      this.props.removeAcceptedSupplier(removeSupIndex[i]);
      console.log("REMOVIUNG ROW");
      this.props.removeRowSaMMat(removeSupIndex[i]);
    }
    for(i=0; i<addSupIndex.length;i++){
      this.props.addAcceptedSupplier(addSupIndex[i]);
      this.props.addRowSaMMat();
    }

    this.refs.overlay0.hide();
    this.refs.overlay1.hide();
    this.refs.overlay2.hide();
    this.refs.overlay3.hide();
    this.refs.overlay4.hide();
    this.refs.overlay5.hide();
  }

  getPopover() {
    let styling = {
      scrollbar: {
        width: "auto",
        maxHeight: "100px",
      }
    };
    return(
      <Popover id="popoverClick" title={'Choose a value'}>
      <ReactScrollbar style={ styling.scrollbar }>
        <DropDownChoose
          handleDropdownSubmit={this.handleDropdownSubmit}
          value={this.state.value}
          dropDownChoices={this.props.dropDownChoices}
          threshIndex={this.state.index}
        />
      </ReactScrollbar>
      </Popover>
    );
  }

  getCellsToReturn() {
    const popoverClick = this.getPopover();
    return(
      <tbody>
        <td id='rowSpan'>Value</td>
        <OverlayTrigger onEnter={() => this.setState({index: 0})} ref="overlay0" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id="rowSpanWhite">{this.state.threshs[0]}</td>
        </OverlayTrigger>

        <OverlayTrigger onEnter={() => this.setState({index: 1})} ref="overlay1" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id='rowSpanWhite'>{this.state.threshs[1]*100}%</td>
        </OverlayTrigger>

        <OverlayTrigger onEnter={() => this.setState({index: 2})} ref="overlay2" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id="rowSpanWhite">{this.state.threshs[2]}</td>
        </OverlayTrigger>

        <OverlayTrigger onEnter={() => this.setState({index: 3})} ref="overlay3" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id="rowSpanWhite">{this.state.threshs[3]}</td>
        </OverlayTrigger>

        <OverlayTrigger onEnter={() => this.setState({index: 4})} ref="overlay4" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id="rowSpanWhite">{this.state.threshs[4]}</td>
        </OverlayTrigger>

        <OverlayTrigger onEnter={() => this.setState({index: 5})} ref="overlay5" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
        <td id="rowSpanWhite">{this.state.threshs[5]*100}%</td>
        </OverlayTrigger>
      </tbody>
    );
  }


  render() {
    return(

      <div id="myScroll">
        <h1>{this.props.title}</h1>

        <Table responsive striped bordered condensed hover id="myCustomTable">
        <thead>
          <tr>
            <td rowSpan={2} id="rowSpan" >Threshold Determination</td>
            <td colSpan={3} id='rowSpanPale'>Module Related Environmental Indicators</td>
            <td colSpan={3} id='rowSpanPale'>Supplier Related Environmental Indicators</td>
          </tr>
          <tr>
            <td id='rowSpanPale'>Hazardous Material Use (Level: 1=poor - 5=very good)</td>
            <td id='rowSpanPale'>Recyclability (Rate: 0%-100%)</td>
            <td id='rowSpanPale'>Renewable Material Use (Level: 1=poor - 5=very good)</td>
            <td id='rowSpanPale'>ISO 14001 (Yes:1, No:0)</td>
            <td id='rowSpanPale'>Use of Recycled Materials (Level: 1=poor - 5=very good)</td>
            <td id='rowSpanPale'>Environmentally Friendly Packaging (Rate: 0% - 100%)</td>
          </tr>

        </thead>

        {this.getCellsToReturn()}

        </Table>
      </div>

    );
  }

}

export class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.getChoices = this.getChoices.bind(this);
  }

  getChoices() {
    if(this.props.threshIndex == 0 || this.props.threshIndex == 2 || this.props.threshIndex == 4) {
      var choices = [1,2,3,4,5];
      return (
        choices.map((name,index)=> {
          return <div
          onClick={() => this.props.handleDropdownSubmit(index+1)}>
            {index+1}
          </div>;
        })
      );
    }
    else if(this.props.threshIndex == 1 || this.props.threshIndex == 5) {
      var choices = [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1];
      return (
        choices.map((name,index)=> {
          return <div
          onClick={() => this.props.handleDropdownSubmit(name)}>
            {name*100}%
          </div>;
        })
      );
    }
    else {
      return (
        <div>
          <div
            onClick={() => this.props.handleDropdownSubmit(1)}>
            1
          </div>
          <div
            onClick={() => this.props.handleDropdownSubmit(0)}>
            0
          </div>
        </div>
      );
    }
}

  render() {

    return(
      <div>
        <div>{this.getChoices()}</div>
      </div>
    );
  }
}
