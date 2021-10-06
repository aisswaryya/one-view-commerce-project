import './App.css';
import { withRouter } from 'react-router-dom';

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            searchItem: '',
            userData: [],
        };
    }
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    this.setState({
                        postData: res.data,
                        updatedData: res.data,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleClickRow = (item) => {
        //alert('clicked');
        console.log(item);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${item.id}`)
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    this.setState({
                        userData: res.data,
                    });
                    console.log(this.props);
                    this.props.history.push('/users', {
                        userData: this.state.userData,
                    });
                }
            })
            .catch((err) => {
                this.props.history.push('/users');
            });
    };

    handleChange = (e) => {
        let currentVal = e.target.value;
        let finalData = this.state.updatedData;
        const updatedState = finalData.filter((val) =>
            val.name.toLowerCase().includes(currentVal.toLowerCase())
        );
        this.setState({
            postData: updatedState,
            searchItem: currentVal,
        });
    };

    render() {
        let { postData } = this.state;
        return (
            <div className="App">
                <div className="spacing">
                    <label htmlFor="search-form">
                        Search Posts by name
                        <input
                            type="search"
                            name="searh-form"
                            className="formField"
                            placeholder="Search posts by name"
                            value={this.state.searchItem}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </label>
                </div>
                <table className="table-data">
                    <thead>
                        <th>
                            <h2>Name</h2>
                        </th>
                        <th>
                            <h2>Email</h2>
                        </th>
                        <th>
                            <h2>City</h2>
                        </th>
                        <th>
                            <h2>Company</h2>
                        </th>
                    </thead>
                    <tbody>
                        {postData &&
                            postData.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        onClick={() =>
                                            this.handleClickRow(item)
                                        }>
                                        <td>{item.name}</td>
                                        <td>
                                            <a mailTo={item.email}>
                                                {item.email}
                                            </a>
                                        </td>
                                        <td>{item.address.city}</td>
                                        <td>{item.company.name}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <div></div>
            </div>
        );
    }
}

export default withRouter(App);
