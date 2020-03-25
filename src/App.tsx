import React from 'react';
import './App.css';
import Form from "./components/Form/Form";

export interface GlobalProps {
}

const App: React.FC<GlobalProps> = (props: GlobalProps) => {
    return (
        <div className="App">
            <h1>
                freeCodeCamp Survey Form
            </h1>

            <h3>Thank you for taking the time to help us improve the platform</h3>

            <Form/>
        </div>
    );
};

export default App;
