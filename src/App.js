import React from "react";


const FastFood = ({users}) => {
    return (
        <div>
            <h1>Список еды</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Food title={user.title} wt={user.wt} price={user.price}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Food = ({title, wt, price}) => {
    return (
        <div className="foods">
            <h2 className="ed">{title}</h2>
            <p className="ed">Масса еды: {wt}</p>
            <p className="ed">Цена: {price}</p>
        </div>
    )
}

const App = () => {
    const users = [
        {id: 1, title: "Манты", wt: "400g", price: "200som"},
        {id: 2, title: "Лагман", wt: "350g", price: "180som"},
        {id: 3, title: "Ашлянфу", wt: "250g", price: "80som"},
        {id: 4, title: "Пелмень", wt: "300g", price: "170som"},
        {id: 5, title: "Шаурма", wt: "500g", price: "199som"}
    ]
    return (
        <div className="food">
            <FastFood users={users}/>
        </div>
    )
}
export default App;