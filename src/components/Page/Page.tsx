import React from 'react';
import WarningBanner from './WarningBanner';
import './WarningBanner.css';

export interface Props {
}

interface State {
    showWarning: boolean;
}

class Page extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;