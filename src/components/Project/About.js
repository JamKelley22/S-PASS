import React from 'react';
import {Image} from 'react-bootstrap';
import './Project.css'

/*import FolderPic from '../../Images/folder.png';*/


const About = ({match}) =>(
  <div>
    <div id='top'>
      <h1>About the S-PASS Tool</h1>
      <p>
      Sustainable Product Architecture and Supplier Selection (S-PASS) The Sustainable Product Architecture and Supplier Selection (S-PASS) tool, designed to guide users to identify sustainable product architectures and their suppliers. The use of S-PASS within this platform aims to:
      </p>
      <p>
      <b>1. </b>Enhance students’ class activities relevant to sustainable product and service design modules, and
      </p>
      <p>
      <b>2. </b>Provide an easy to use and effective tool to enable students to determine product architectures and Original Equipment Manufacturer (OEM) suppliers with consideration of possible environmental impacts.
      </p>
      <p>
      An overview of S-PASS is illustrated in the figure below. The S-PASS basically employs a matrix propagation system, which constructs and uses a series of overlapping matrices, to derive a final solution through matrix operations starting from the rows in the initial matrix to columns in the last matrix.
      </p>

      <Image src={require('../../Images/S-PASS_Diagram.PNG')} alt='S-PASS Diagram'/>

      <p>
      Students’ information input regarding new part modules and suppliers in consideration of sustainable design requirements and proper environmental impact is processed through the matrix system to obtain acceptable sustainable product architectures and their suppliers.
      </p>
    </div>

    <div id='bottom'>

    </div>
  </div>

)

export default About;
