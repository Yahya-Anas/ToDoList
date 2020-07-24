import React, {Component} from "react";
import ToDoItems from "./toDoItems";
import "./toDolist.css";
import Modal from "./Modal";


//
// const list = []
//
// const initialState = {
//     items: [...list],
//     inputValue: "",
//     inputValueLastName: "",
//     inputDate: "",
//     emailValue: "",
//     address: "",
//     gender: "",
//     genderError: "",
//     emailError: "",
//     firstNameError: "",
//     lastNameError: "",
//     dateError: "",
//     addressError: "",
//     maleImage: './Foto/generic-male-icon-blue.jpg',
//     error: false
//
// }


class ToDoList extends Component {

    state = {
        //...initialState,
        visible: 5,
        items: [],
        listEmpty: true,
        showModal: false,
    };

    loadMore = () => {
        this.setState((prevState) => {
            return {
                visible: prevState.visible + 5
            };
        });
    }


    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})

    }

    closeModal = () => {
        this.setState({showModal: false})
    }


    updateItemsHandler = (items) => {
        this.setState({items: [...items], showModal: false})
    }
    deleteItem = (key) => {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        console.log(this.state.visible)
        console.log({showModal: !this.state.showModal});
        return (
            <>

                <div className="addList" onClick={this.toggleModal}> Click Hier to Add List</div>
                {this.state.showModal &&
                (<Modal items={this.state.items} updateItems={this.updateItemsHandler}
                        show={this.state.showModal}
                        toggel={this.toggleModal}>
                </Modal>)}

                <div>
                    {this.state.items.length > 0 ? <ul className="theList">
                        {this.state.items.slice(0, this.state.visible).map((item, index) =>
                            <ToDoItems key={index} item={item} delete={this.deleteItem}/>)
                        }
                        {this.state.visible < this.state.items.length &&
                        <li>
                            <button className="loadMore" onClick={this.loadMore} type="button">Load More
                            </button>
                        </li>
                        }
                    </ul> : <div className="emptyList"> Empty List </div>}

                </div>
            </>
        );
    }

}

export default ToDoList;