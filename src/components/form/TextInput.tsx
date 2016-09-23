import * as React from "react";

export interface InputProps {
    id: string,
    name: string,
    value: any,
    title: string,
    htmlClasses?: string,
}

export class TextInput extends React.Component<InputProps, {}> {
    private htmlClasses: string = 'form-control';

    componentWillMount() {
        if(this.props.htmlClasses) {
            this.htmlClasses = this.props.htmlClasses;
        }

    }

    render() {
        return <input type="text" id={this.props.id} className={this.htmlClasses} name={this.props.name} />;
    }
}