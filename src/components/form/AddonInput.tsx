import * as React from "react";
import {InputProps} from "./TextInput";

export interface AddonProps extends InputProps {
    addonText: string,
    addonPosition?: string,
}

export class AddonInput extends React.Component<AddonProps, {}> {
    private htmlClasses: string = 'form-control';

    public static defaultProps = {
        addonPosition: "end",
    };

    componentWillMount() {
        if (this.props.htmlClasses) {
            this.htmlClasses = this.props.htmlClasses;
        }

    }

    render() {
        return (
            <div>
                <label className="control-label" htmlFor={this.props.id}>{this.props.title}</label>
                <div className="input-group">
                    {this.props.addonPosition == 'begin' ?
                        <span className="input-group-addon">{this.props.addonText}</span> : ""}
                    <input type="text" id={this.props.id} className={this.htmlClasses} name={this.props.name}/> {this.props.addonPosition == 'end' ?
                    <span className="input-group-addon">{this.props.addonText}</span> : ""}
                </div>
            </div>
        );
    }
}