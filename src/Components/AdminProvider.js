import React, { Component } from 'react'
import { TopBar } from './TopBar';

export const Mycontext=React.createContext();
export default class AdminProvider extends Component {
    state={
        isAdmin:false
    }
   
    render() {
        return (
           <Mycontext.Provider value={{getIsAdmin:()=>{return this.state.isAdmin}, setAdmin:(value)=>{this.setState({isAdmin:value})} }}>
            {this.state.isAdmin && <TopBar logout={()=>{this.setState({isAdmin:false})}}></TopBar> }
            {this.props.children}
           </Mycontext.Provider>
        )
    }
}
