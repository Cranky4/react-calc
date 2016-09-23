import * as React from "react";
import {InputProps} from "./TextInput";
import {Option} from "./Option";

interface OptionProps {
    id: any,
    name: string
}

export interface SelectProps extends InputProps {
    values: OptionProps[];
}

export class Select extends React.Component<SelectProps, {}> {
    private htmlClasses: string = 'form-control';

    componentWillMount() {
        if (this.props.htmlClasses) {
            this.htmlClasses = this.props.htmlClasses;
        }
    }

    render() {
        return (
            <div>
                <label className="control-label" htmlFor={this.props.id}>{this.props.title}</label>
                <select id={this.props.id} className={this.htmlClasses} name={this.props.name} defaultValue={this.props.value}>
                    {
                        this.props.values.map((value, index) => {
                            return <Option key={index} id={value.id} name={value.name}/>;
                        })
                    }
                </select>
            </div>
        );
    }
}