import { Table } from 'react-bootstrap';

function Users() {
    return (
        <>
            <h4>All Users</h4>
            <p>Users and their age</p>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>24</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Users;
