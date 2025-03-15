import { useEffect, useState } from 'react'
import axios from 'axios'
import { Name, Login } from './UserModeal'
import UserListing from './UserListing'

interface Users {
    name: Name
    login: Login
    email: string
}

const AppUser: React.FC = () => {
    const [userList, setUserList] = useState<Users[]>([])
    const [isLoader, setIsLoader] = useState<boolean>(false)

    useEffect(() => {
        const getUsers = async () => {
            try {
                setIsLoader(true)
                const { data } = await axios.get(
                    'https://randomuser.me/api/?results=10'
                );
                console.log(data.results)
                setUserList(data.results)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setIsLoader(false)
            }
        }
        getUsers()
    }, [])
    return (
        <div>
            <ul>
                {
                    isLoader ? 'Loading' : userList.map(({ login, name, email }) => <UserListing key={login.uuid} name={name} email={email} />)
                }
            </ul>
        </div>
    );
}

export default AppUser;
