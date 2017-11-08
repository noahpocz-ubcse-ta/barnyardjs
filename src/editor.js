import React, { Component } from 'react';
import './App.css';

import AceEditor from 'react-ace';

class Editor extends Component {
    
    componentDidMount() {
        const editor = document.getElementById('ace-editor')
        console.log(editor)
    }

    render() {

        return (
            <AceEditor id='ace-editor' style={{ width: '100%' }}/>
        )
    }
}

export default Editor;