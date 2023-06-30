import React from "react";

class Fios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: "",
            value2: "",
            value3: ""
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };
    
    handleSubmit(event) {
        alert(`
            Ваше имя: ${this.state.value1}
            Номер: ${this.state.value2}
            Gmail адрес: ${this.state.value3}
        `);
        event.preventDefault();
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="label">
                    <input
                        type="text" 
                        name="value1"
                        className="input"
                        placeholder="Имя"
                        value={this.state.value1} 
                        onChange={this.handleChange}
                     />
                    <input
                        type="text" 
                        name="value2"
                        className="input"
                        placeholder="Номер"
                        value={this.state.value2} 
                        onChange={this.handleChange}
                     />
                    <input
                        type='text' 
                        name="value3"
                        className="input"
                        placeholder="Gmail"
                        value={this.state.value3} 
                        onChange={this.handleChange}
                     />
                    <input className="click" type='submit' alue="Send"/>
                </label>
            </form>
        )
    }
};

export default Fios;