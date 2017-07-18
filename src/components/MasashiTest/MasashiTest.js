import React from 'react';
import {Button} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import MasashiTables from '../MasashiTables/MasashiTables.js';

const MasashiRouter = ({match}) =>(
      <div>
        <h1>
          <Link to={`${match.url}/MasashiTables`}>
<<<<<<< HEAD
            <Button bsStyle='danger'>Don'\''t Click Me</Button>
=======
            <Button bsStyle='danger'>Do not Click Me</Button>
>>>>>>> masashi
          </Link>
        </h1>
         <Route path={`${match.url}/MasashiTables`} component={MasashiTables}/>
      </div>
  )

export default MasashiRouter;
