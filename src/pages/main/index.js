import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
    // state = {
    //     product: [],
    //     productInfo: {},
    //     page: 1
    // }

    // componentDidMount() {
    //     this.loadProducts()
    // }

    // loadProducts = async (page = 1) => {
    //     const response = await api.get(`products?page=${page}`)

    //     const { docs, ...productInfo } = response.data
    
    //     this.setState({ product: docs, productInfo, page })
    // }

    // prevPage = () => {
    //     const { page } = this.state

    //     if (page === 1) return

    //     const pageNumber = page - 1
        
    //     this.loadProducts(pageNumber)
    // }

    // nextPage = () => {
    //     const { page, productInfo } = this.state

    //     if (page === productInfo.pages) return

    //     const pageNumber = page + 1
        
    //     this.loadProducts(pageNumber)
    // }

    render() {
        // const { product, page, productInfo } = this.state

        return (

            // <div className="product-list">{product.map(product => (
            //     <article key={product._id}>
            //         <strong>{product.title}</strong>
            //         <p>{product.description}</p>
            //         <Link to={`/products/${product._id}`}>Acessar</Link>
            //     </article>
            // ))}
            
            //     <div className="actions">
            //         <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            //         <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
            //     </div>

            // </div>

            <div className="apps">
                <p>Clique na imagem para baixar o app <span>Guia do Bem</span></p>
                <a href="https://drive.google.com/open?id=1Fy8Dr-UmEiobYPd7-lLgPUg4PXv-UB7y" download="Guia do bem.apk" target="blank">
                    <img src="https://cdn-prod.voxy.com/wp-content/uploads/2017/06/google-play-badge.png" alt="Disponivel para Android"/>
                </a>
            </div>

        )
    }
}