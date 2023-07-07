import React from "react";

const UserCard = ({name, email, age}) => {
    return (
        <div className="user_card">
            <h2>{name}</h2>
            <p>Email: {email}</p> 
            <p>Возраст: {age}</p>
        </div>
    )
}

const Main = () => {
    return (
        <div className="user">
            <UserCard name="Abai" email="aabasbekov47@gmail.com" age={19}/>
            <UserCard name="Bakai" email="bakaiabasbekov@gmail.com" age={16}/>
            <UserCard name="Ukai" email="Abasbekov@gmail.com" age={7}/>
            <UserCard name="Bermet" email="Abasbekova10@gmail.com" age={13}/>
            <UserCard name="Urmat" email="Sbaparbekov@gmail.com" age={40}/>
        </div>
    )
}

export default Main;