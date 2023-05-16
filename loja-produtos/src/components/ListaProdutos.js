import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/LojaApp/rest/produto").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setProdutos(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/LojaApp/rest/produto/${id}`, {
            method: "delete"
        }).then(() => {
            window.location = "/"
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <h1>Lista Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.codigo}>
                            <td>{produto.titulo}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td>
                                <button onClick={handleDelete.bind(this, produto.codigo)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>);
}
