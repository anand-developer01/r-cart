import { useEffect, useState } from 'react'
import axios from 'axios'
import { Name, Login } from './UserModeal'

interface Users {
    name: Name
    email: string
}

const UserListing: React.FC<Users> = ({name, email}) => {
    return (
        <> 
            <li>
                <div>
                    Name: {name.first} {name.last}
                </div>
                <div>Email: {email}</div>
                <hr />
            </li>  
        </>
    );
}

export default UserListing;
