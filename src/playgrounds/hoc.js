
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (

<div>

<h1>Info</h1>
<p>This info is:{props.info}</p>
</div>
);

const withAdminWarning = (WrappedComponent) => {

    return (props) => (

        <div>
        {props.isAdmin && <p>Private inof bro</p>}
        <WrappedComponent {...props} />       
        </div>
    );
};

const requireAuthentication =(WrappedComponent) => {
 return (props) => (

<div>

{props.isAuth && <p> Your Authenticated </p>}
<WrappedComponent {...props} />
</div>

 );


};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="This are the results" />, document.getElementById('app'));