import React, { Component} from "react";
import "./ToDoItems.css";
//import Image from './Foto/generic-male-icon-blue.jpg';




class toDoItems extends Component{
state= {
    isCheck: false,
}

    // checkedHandler  =() =>{
    // this.setState({isCheck : !this.state.isCheck})
    // }

     image = (gender) => {
        let imgFile = 'generic-male-icon-blue.jpg';

        if(gender === "Female"){
            imgFile = 'profile-female-icon.png'
         }

        return <img className="imageCard" src={require('./Foto/' + imgFile)} />
    }

    createTasks = (item) =>{
        return<div className="maineCard">
                <div key={item.key} className="headerItems">
                        <div className="deleteLogo">
                            <i onClick={() => this.props.delete(item.key)} id="sendNewSms" className="material-icons">close</i>
                        </div>
                {/*<img className="imageCard" src={ require('./Foto/generic-male-icon-blue.jpg') } />*/}
                {/*    <img className="imageCard" src={this.image()} />*/}
                        {this.image(item.gender)}
                        <ol className="card">
                            <li> Name: {item.text} {item.inputValueLast}</li>
                            <li> Birth of Date: {item.inputDatum}</li>
                            <li> Sex: {item.gender}</li>
                            <li> E-mail: {item.email}</li>
                            <li> Address: {item.address}</li>
                        </ol>
                    </div>
             </div>


    }



    render() {
        let toDoEntries = this.props.item;
        return(
            <li>
                {this.createTasks(toDoEntries)}

            </li>


        );
    }

};
export default toDoItems;
