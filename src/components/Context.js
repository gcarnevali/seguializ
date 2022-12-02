import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
                {
                    id: "1",
                    name: "Lui Blanco",
                    price: 1100, 
                    image:"https://cepadevinos.com/wp-content/uploads/2022/07/Lui-Dulce.png"
        
                },
                {
                    id: "2",
                    name: "Aguijón de Abeja Cabernet Franc",
                    price: 1300, 
                    image:"https://www.espaciovino.com.ar/media/default/0001/64/thumb_63732_default_medium.jpeg"
        
                },
                {
                    id: "3",
                    name: "Urraca Grand Reserva Blend",
                    price: 1800, 
                    image:"https://www.docwinehouse.com/wp-content/uploads/2021/09/urraca.jpg"
        
                },
            ],
        }

    render() {
        const {products} = this.state;

        return (
            <DataContext.Provider value ={{products}}>
                {this.props.children}
            </DataContext.Provider>  
        )
    }
}

