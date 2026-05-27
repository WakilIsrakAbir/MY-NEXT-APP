import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;
    // console.log("show me user id", userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json(); 
    return (
        <div>
            {user.email}
            {user.phone}
        </div>
    );
};

export default UserDetailPage;