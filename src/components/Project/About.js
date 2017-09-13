import React from 'react';
import {Image} from 'react-bootstrap';
import './Project.css'

/*import FolderPic from '../../Images/folder.png';*/


const About = ({match}) =>(
  <div>
    <div id='top'>
      <h1>About the S-PASS Tool</h1>
      <p>
      The Sustainable Product Architecture and Supplier Selection (S-PASS) tool is designed to guide users in identifying sustainable product architectures and related suppliers. The use of S-PASS within this platform aims to enhance students’ class activities relevant to sustainable product and service design modules, and to provide an easy to use and effective tool for determining product architectures and Original Equipment Manufacturer (OEM) suppliers with consideration of environmental impacts.
      </p>
      <p>
      An overview of S-PASS is illustrated in the figure below. The tool employs a matrix propagation system which constructs and uses a series of overlapping matrices to derive a final solution. Users input information regarding sustainability requirements, existing and alternative modules, and new suppliers. This information is then processed according to thresholds on requirement satisfaction and environmental impact to reveal acceptable alternative modules (product architectures) and related suppliers.
      </p>


      <Image src={require('../../Images/S-PASS_Diagram.PNG')} alt='S-PASS Diagram'/>

      <p>
      The S-PASS Tool is comprised of three phases. In each phase, there is an input section where the user must input information, and an output section where the user can evaluate results.
      </p>
    </div>

    <div id='bottom'>

    </div>
  </div>

)

export default About;
