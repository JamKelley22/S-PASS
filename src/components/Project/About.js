import React from 'react';
import {Image} from 'react-bootstrap';
import './Project.css'

/*import FolderPic from '../../Images/folder.png';*/


const About = ({match}) =>(
  <div>
    <div id='top'className='clearfix'>


      <h1 className='clearfix'>Case Study</h1>
      <p className='clearfix'>
      Drones and multi-copters are very familiar to consumers. While children play with remote controlled toy versions, some adults expect deliveries by drones. Company X is currently selling two types of drones: hexa-copters and quad-copters (See Table 1). Due to global regulations regarding the environmental impacts of products and companies, Company X is planning to upgrade its existing products through environmentally responsible design.
      </p>
      <p className='clearfix'>
      The main objective of environmentally responsible drone design at Company X is to determine new product architectures and their suppliers while considering their possible environmental impacts. New drones should satisfy design requirements for minimal energy use and reduction in hazardous by-products/pollutants both from the manufacturing process and throughout useful life of drones. Modules in new drones should be provided by suppliers that are environmentally friendly in their operations (i.e., manufacturing and logistics). Key modules and components of the existing drone designs are provided in Table 1.
      </p>
      <p className='clearfix'>
Company X has just signed a consulting agreement with your team to tap into your expertise in sustainable design and manufacturing.  You are tasked with proposing new designs that are vastly improved in environmental sustainability performance over the current designs of drones. For facilitating the design task, your team will employ the Sustainable Product Architecture and Supplier Selection (S-PASS) tool provided in class. As a team, follow each phase outlined below and determine the input values to use within the S-PASS tool.
      </p>
      <p className='clearfix'>
      An overview of S-PASS is illustrated in the figure below. The tool employs a matrix propagation system which constructs and uses a series of overlapping matrices to derive a final solution. Users input information regarding sustainability requirements, existing and alternative modules, and new suppliers. This information is then processed according to thresholds on requirement satisfaction and environmental impact to reveal acceptable alternative modules (product architectures) and related suppliers.
      </p>




      <p className='clearfix'>
      Follow each phase outlined in the case study description
      (
      <a href="https://drive.google.com/file/d/1WFyZkMWiCg7naXGU6eHuI_ePgGg7dxWb/view?usp=sharing" target="_blank" id="underline">See Case Study Description</a>
      )
      </p>

      <Image src={require('../../Images/Table1.png')} alt='S-PASS Diagram' id='tableImage' className='clearfix' />

    </div>

    <div id='bottom' className='clearfix'>

    </div>
  </div>

)

export default About;
