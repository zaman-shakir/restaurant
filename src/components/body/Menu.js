import React,{Component} from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
class Menu extends Component {

    state ={
        dishes : DISHES,
        selectedDish: null,
        modalOpen: false,
    }
    onDishSelect = dish =>{
        console.log(dish);
        this.setState({
            selectedDish: dish,
        });
        this.toggleModal();

    }
    toggleModal = () =>{

        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    render(){
        console.log(this.state);
        let dishDetail = null;
        if(this.state.selectedDish !== null){
            dishDetail = <DishDetail dish={ this.state.selectedDish} />;
        }

        const menu = this.state.dishes.map( (item)=>{


            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect ={this.onDishSelect}
                />
            )
        });


        return(
            <div className="container">
                <div className="row">
                    {/* <CardColumns className="col-12">
                        {menu}
                    </CardColumns>
                    <Modal onClick isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary">
                                Collapse
                            </Button>
                        </ModalFooter>
                    </Modal> */}
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
