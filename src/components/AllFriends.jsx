import React, { useState, useEffect } from 'react';
import Friends from './Friends';


const AllFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        fetch('/Friendsdata.json')
            .then((res) => res.json())
            .then((data) => setFriendsList(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">My Friends</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                {friendsList.map((singleFriend) => (
                    <Friends
                        key={singleFriend.id}
                        friend={singleFriend}
                    />
                ))}

            </div>
        </div>
    );
};

export default AllFriends;