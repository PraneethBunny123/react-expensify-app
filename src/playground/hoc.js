import React from "react";
import ReactDOM from 'react-dom/client';

const Info = (props) => {
    return (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
    )
    
}

const container = document.getElementById('app')


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>this is higher component</h1>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view details</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

ReactDOM.createRoot(container).render(<AuthInfo isAuthenticated={false} info='This is the props' />)