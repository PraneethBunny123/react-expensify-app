// import React from "react";
// import { connect } from "react-redux";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
//     <Route {...rest} component={(props) => (
//         isAuthenticated ? (
//             <Component {...props} />
//         ) : (
//             <Navigate to='/' />
//         )
//     )} />
// )

// const mapStateToProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
// })

// export default connect(mapStateToProps)(PrivateRoute)



import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
 

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <div>
      <Header />
      {children}
    </div>
  ) : (
    <Navigate to="/" />
  );
};
 
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};
 
export default connect(mapStateToProps)(PrivateRoute);