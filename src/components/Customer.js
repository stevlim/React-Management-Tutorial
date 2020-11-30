import React from 'react';

class Customer extends React.Component {
    
    render() {
        return (
            <div>
                <CustomerProfile 
                image={this.props.image} 
                name={this.props.name} 
                id={this.props.id}></CustomerProfile>

                <CustomerInfo
                birthday={this.props.birthday} 
                gender={this.props.gender} 
                job={this.props.job} 
                ></CustomerInfo>
            </div>
        );
        
    };
}

class CustomerInfo extends React.Component { 
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

class CustomerProfile extends React.Component { 
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name} ({this.props.id})</h2>
            </div>
        );
    }
}

export default Customer;