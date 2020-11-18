import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
     <h1>Info</h1>
     <p>Here is some info: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
       {props.isAdmin && <p>This is private info</p>} 
        <WrappedComponent {...props}/>
      </div> 
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
       {props.isAuthenticated && <p>This is auth info</p>} 
        <WrappedComponent {...props}/>
      </div> 
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="here are the details"/>, document.querySelector('#app'))