import * as React from "react";
import {InputProps} from "./TextInput";

export class Checkbox extends React.Component<InputProps, {}> {
    private htmlClasses: string = 'form-control';

    componentWillMount() {
        if (this.props.htmlClasses) {
            this.htmlClasses = this.props.htmlClasses;
        }

    }

    render() {
        return (
            <div className="checkbox">
                <br/> <input type="hidden" name={this.props.name} value="0"/> <label>
                <input type="checkbox" id={this.props.id} name={this.props.name} value="1"/> {this.props.title} </label>
            </div>
        );
    }
}