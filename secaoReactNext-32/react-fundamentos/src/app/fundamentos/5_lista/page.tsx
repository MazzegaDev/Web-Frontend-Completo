export default function Lista(){
    const users = [
        {id: 1, nome: "Gui", email: "g@mail.com"},
        {id: 2, nome: "Gui2", email: "g2@mail.com"},
        {id: 3, nome: "Gui3", email: "g3@mail.com"},
    ]
    
    const list = users.map(
        user => <li>key={user.id} {user.nome} ({user.email})</li>
    )



    return(
        <ul>
            {list}
        </ul>
    )
}