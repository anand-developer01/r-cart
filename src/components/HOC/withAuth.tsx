import React from 'react';

// Define the User interface as above
// Define the User interface as described above
interface User {
  id: number,
  name: string,
  email: string,
  role: string
}

// Define the CheckUserProps interface
interface CheckUserProps {
  songleUser: User | null;
}

// HOC to check if the user has the required role
const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P & CheckUserProps>, // Wrapped component expects CheckUserProps
  checkPermissions: (props: CheckUserProps) => boolean
) => {
  return function (props: P & CheckUserProps) {
    if (checkPermissions(props)) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please login with appropriate role</p>;
    }
  };
};

// PrivateComponent to display the logged-in user
const PrivateComponent: React.FC<CheckUserProps> = ({ songleUser }) => {
  if (!songleUser) {
    return <p>No user selected</p>;
  }

  return (
    <p>
      YOU are Logged In As <b>{songleUser.role}</b>
    </p>
  );
};

// Check if the user has the "admin" role
const yourRole = (props: CheckUserProps) => {
  return props.songleUser?.role === 'admin'; // Check user role
};

// Export the HOC-wrapped component
export const ReturnHOCInputCom = withAuth(PrivateComponent, yourRole);
