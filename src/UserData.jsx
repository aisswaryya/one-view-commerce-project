import React from 'react';
import { withRouter } from 'react-router-dom';
class UserData extends React.Component {
    render() {
        const { userData } = this.props.location.state;
        return (
            <div className="post-data">
                <table>
                    <thead>
                        <th>
                            <h2>Title</h2>
                        </th>
                        <th>
                            <h2>Body</h2>
                        </th>
                    </thead>
                    <tbody>
                        {userData &&
                            userData.map((item) => {
                                return (
                                    <tr key={item.title}>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(UserData);
