

const List = ({Colaboradores, searchTerm}) => {

    const filteredColaboradores = Colaboradores.filter((colaborador) => {
        const searchValue = searchTerm.toLowerCase();

        return (
            colaborador.name.toLowerCase().includes(searchValue) ||
            colaborador.email.toLowerCase().includes(searchValue)
        )
    })

    return (
        <table className="table table-striped">

            <thead>

                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody>

                {filteredColaboradores.map ((colaborador) => {

                        return (
                            <tr key={colaborador.id}>
                                <td>{colaborador.name}</td>
                                <td>{colaborador.email}</td>
                            </tr>
                        )
                    }
                )}

            </tbody>
        </table>
    )
}

export default List;