import React from 'react';
import {Image} from 'react-bootstrap';
import './Project.css'

/*import FolderPic from '../../Images/folder.png';*/


const About = ({match}) =>(
  <div id='all'>
    <div id='top'className='clear'>


    <h1 className='clear'>Learning Objectives</h1>

    <p className='clear'>
    Learning Objectives
    Students completing this case study will identify the challenges and benefits of sustainability decision making for design and manufacturing. The learning objectives of this case study are listed as follows:
    </p>
    <p className='clear'>
    •	Students will use multi-perspectives for product design, considering requirements, functions, modules, product architectures, and suppliers, to develop environmentally responsible products.
    </p>
    <p className='clear'>
    •	Students will perform a design decision-making process to integrate environmental issues into selection of product concepts and suppliers through the S-PASS (Sustainable Product Architecture and Supplier Selection) tool.
    </p>
    <p className='clear'>
    •	Students will formulate their own design problems for development of environmentally responsible products.
    </p>


      <h1 className='clear'>Case Study</h1>
      <p className='clear'>
      Drones and multi-copters are very familiar to consumers. While children play with remote controlled toy versions, some adults expect deliveries by drones. Company X is currently selling two types of drones: hexa-copters and quad-copters (See Table 1). Due to global regulations regarding the environmental impacts of products and companies, Company X is planning to upgrade its existing products through environmentally responsible design.
      </p>
      <p className='clear'>
      The main objective of environmentally responsible drone design at Company X is to determine new product architectures and their suppliers while considering their possible environmental impacts. New drones should satisfy design requirements for minimal energy use and reduction in hazardous by-products/pollutants both from the manufacturing process and throughout useful life of drones. Modules in new drones should be provided by suppliers that are environmentally friendly in their operations (i.e., manufacturing and logistics). Key modules and components of the existing drone designs are provided in Table 1.
      </p>
      <p className='clear'>
Company X has just signed a consulting agreement with your team to tap into your expertise in sustainable design and manufacturing.  You are tasked with proposing new designs that are vastly improved in environmental sustainability performance over the current designs of drones. For facilitating the design task, your team will employ the Sustainable Product Architecture and Supplier Selection (S-PASS) tool provided in class (See Appendix). As a team, follow each phase outlined below and determine the input values to use within the S-PASS tool.
      </p>
      <p className='clear'>
      An overview of S-PASS is illustrated in the figure below. The tool employs a matrix propagation system which constructs and uses a series of overlapping matrices to derive a final solution. Users input information regarding sustainability requirements, existing and alternative modules, and new suppliers. This information is then processed according to thresholds on requirement satisfaction and environmental impact to reveal acceptable alternative modules (product architectures) and related suppliers.
      </p>


      <Image src={require('../../Images/S-PASS_Diagram.PNG')} alt='S-PASS Diagram' className='clear' />

    </div>

    <div id='bottom' className='clear'>

    </div>
  </div>

)

export default About;
