import React, {Component} from "react";

import "./Modal.css"

const list = []

const initialState = {
    inputValue: "",
    inputValueLastName: "",
    inputDate: "",
    emailValue: "",
    address: "",
    gender: "",
    genderError: "",
    emailError: "",
    firstNameError: "",
    lastNameError: "",
    dateError: "",
    addressError: "",
    error: false

}

class Modal extends Component {


    state = {
        ...initialState,
    };


    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let dateError = "";
        let emailError = "";
        let addressError = "";
        let genderError = "";

        if (this.state.gender === "") {
            genderError = "Please enter the Gender";
        }

        if (!this.state.emailValue.includes("@")) {
            emailError = "Please enter The correct Email";

        }

        if (this.state.address === "") {
            addressError = "Please enter The Address";
        }


        if (this.state.inputDate === "") {
            dateError = "Please enter The correct date";

        }

        if (this.state.inputValue === "") {
            firstNameError = "Please enter The First Name";
        }


        if (this.state.inputValueLastName === "") {
            lastNameError = "Please enter The Last Name";
        }

        if (firstNameError || lastNameError || dateError || emailError || addressError || genderError) {
            this.setState({firstNameError, lastNameError, dateError, emailError, addressError, genderError});
            return false;
        }
        return true;

    };

    addItem = (e) => {
        e.preventDefault();
        const isValidate = this.validate();

        if (isValidate) {
            const newItem = {
                text: this.state.inputValue,
                inputValueLast: this.state.inputValueLastName,
                inputDatum: this.state.inputDate,
                email: this.state.emailValue,
                address: this.state.address,
                gender: this.state.gender,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    ...initialState,
                };
            });
            this.props.updateItems(this.props.items.concat(newItem))
        }
    }

    inputChangeHandler = (e, key) => {
        this.setState({[key]: e.target.value})
    }
    inputChangeHandlerByName = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    onValueChange = (event) => {
        this.setState({gender: event.target.value});
        console.log(event.target.value);
    }


    render() {
        console.log(this.state.showModal)
        return (
            <div className="modalListApp">
                <div className="modalList">

                    <div className="closeModal">
                        <i onClick={this.props.toggel} className="material-icons">close</i>
                    </div>
                    <div className="todoListMain">
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <div className="labelValue">
                                    <label className="info">First Name:</label>
                                </div>
                                <div className="textValue">
                                    <input className="feldValue" name="inputName" value={this.state.inputValue}
                                           onChange={(e) => this.inputChangeHandler(e, "inputValue")}/>
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.firstNameError}</div>
                                <div className="labelValue">
                                    <label className="info">Last Name:</label>
                                </div>
                                <div className="textValue">
                                    <input className="feldValue" name="inputValueLastName"
                                           value={this.state.inputValueLastName}
                                           onChange={this.inputChangeHandlerByName}/>
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.lastNameError}</div>


                                <div className="gender">
                                    <input type="radio" value="Male" onChange={this.onValueChange}
                                           checked={this.state.gender === "Male"}/> Male
                                    <input type="radio" value="Female" onChange={this.onValueChange}
                                           checked={this.state.gender === "Female"}/> Female
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.genderError}</div>


                                <div className="labelValue">
                                    <label className="info">Date of Birth:</label>
                                </div>
                                <div className="textValue">
                                    <input className="feldValue" type="date" name="inputName"
                                           value={this.state.inputDate}
                                           onChange={(e) => this.inputChangeHandler(e, "inputDate")}/>
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.dateError}</div>

                                <div className="labelValue">
                                    <label className="info">Email:</label>
                                </div>
                                <div className="textValue">
                                    <input className="feldValue" name="emailValue" value={this.state.emailValue}
                                           onChange={this.inputChangeHandlerByName}/>
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.emailError}</div>


                                <div className="labelValue">
                                    <label className="info">Address:</label>
                                </div>
                                <div className="textValue">
                                    <input className="feldValue" name="address" value={this.state.address}
                                           onChange={(e) => this.inputChangeHandler(e, "address")}/>
                                </div>
                                <div className="labelValue"
                                     style={{fontSize: '10 px', color: '#ac7339'}}>{this.state.addressError}</div>

                                <button className="add" type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Modal