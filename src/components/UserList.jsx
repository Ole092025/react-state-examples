

import { useState } from 'react'

import styles from './UserList.module.css';

// use memo

// Old version
// <input type="text" placeholder="Username.." onChange={cb => setNewUser(prevData => ({ ...prevData, username: cb.target.value}))}/>

export default function UserList() {

    const mockData = [
        { username: 'Ola Normann', email: 'ola.normann@norge.no'},
        { username: 'Torleif', email: 'torleif@kodehode.no' },
        { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
        { username: 'Sander', email: 'sander@kodehode.no' },
    ];

    const [users, setUsers] = useState(mockData);
    const [newUser, setNewUser] = useState({});

    function handleUserInput(cb) {
        const {name, value} = cb.target;
        setNewUser(prevData => ({...prevData, [name]: value}));
    }

    function addUser() {
        if (newUser.username && newUser.email) {
            setUsers(prevData => [...prevData, newUser]);
            setNewUser({});
        } else {
            alert("Please fill in username and email");
        }
    }

    return (
        <>
            <div className={styles.userListContainer}>
                {users.map((user, i) => {
                    return (
                        <div className={styles.listContainer} key={i}>
                            <div className={styles.usernameItem}>
                                <p><strong>Username: </strong>{user.username}</p>
                            </div>
                            <div className={styles.emailItem}>
                                <p><strong>Email: </strong>{user.email}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.adminContainer}>
                <input className={styles.inputStyle} type="text" placeholder="Username.." onChange={handleUserInput} name="username" value={newUser.username || ""}/>
                <input className={styles.inputStyle} type="text" placeholder="Email.." onChange={handleUserInput} name="email" value={newUser.email || ""}/>

                <button className={styles.addUserBtn} onClick={addUser}>Add User</button>
            </div>
        </>
    )
}



