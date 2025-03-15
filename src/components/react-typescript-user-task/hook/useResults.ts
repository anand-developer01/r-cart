// useResults.ts
import { useState, useEffect } from "react";
import { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=20";

export default function useResults() {
  //states for doctors
  const [users, setUsers] = useState<User[]>([]);

  //load list of appointments, doctors, patients on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  const handleRefresh: () => void = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
      })
      .catch((err: Error) => console.log(err));
  };

  return { users, handleRefresh };
}
