import "./App.css";
import Header from "./components/header/Header";
import SideMenu from "./components/side-menu/SideMenu";
import DataCardSmall from "./components/data-cards/data-card-small/DataCardSmall";
import DataCardBig from "./components/data-cards/data-card-big/DataCardBig";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallCardsValues: [
                {
                    title: "Actores",
                    value: "n/a",
                    color: "primary",
                },
                
            ],
        };
    }
    async queryActorsAPI(endpoint) {
        const response = await fetch(
            `http://localhost:3000/api/products/${endpoint}`
        );
        return await response.json();
    }
    async queryUsersAPI(endpoint) {
        const response = await fetch(
            `http://localhost:3000/api/users/${endpoint}`
        );
        return await response.json();
    }

    async getProductsCount() {
        const countResponse = await this.queryProductsAPI("count");
        return countResponse.count;
    }
    async getProductsTotalPrice() {
        const countResponse = await this.queryProductsAPI("total-price");
        return countResponse.totalPrice;
    }
    async getUsersCount() {
        const countResponse = await this.queryUsersAPI("count");
        return countResponse.count;
    }

    async updateData() {
        const smallCardsValues = [
            {
                title: "Actores",
                value: (await this.getProductsCount()).toString(),
                color: "primary"
            },
            
        ];

        this.setState({
            smallCardsValues,
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.updateData();
            console.log("data updated");
        }, 5000);
        this.updateData();
    }

    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    <SideMenu />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">
                                        Título del Episodio
                                    </h1>
                                </div>
                                <div className="row">
                                    {this.state.smallCardsValues.map(
                                        (elem, index) => {
                                            return (
                                                <DataCardSmall
                                                    key={index}
                                                    title={elem.title}
                                                    value={elem.value}
                                                    color={elem.color}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                                <div className="row">
                                    <DataCardBig />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

