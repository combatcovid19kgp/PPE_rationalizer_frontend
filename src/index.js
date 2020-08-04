import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from "./component/config/base";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

//amplify 
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => (
    <div>
      <AmplifySignOut />
      My App
    </div>
  );
  
  export default withAuthenticator(App);

//

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <div>
              <Base/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
