import React from 'react';
import ReactDom from 'react-dom';

// var App = React.createClass({
//     //初始
//     getDefaultProps:function(){
//         console.log('getDefaultProps')
//         return{
//             name: 'zjw'
//         }
//     },
//     getInitialState: function(){
//         console.log('getInitialState')
//         return{
//             value: 'please input'
//         }
//     },
//     componentWillMount:function(){
//         console.log('componentWillMount')
//     },

//     //更新时
//     shouldComponentUpdate: function(nextProps,nextState){
//         console.log('shouldComponentUpdate',nextProps,nextState);
//         return true;
//     },
//     componentWillUpdate: function(){
//         console.log('componentWillUpdate')
//     },
//     componentDidUpdate:function(){
//         console.log('componentDidUpdate');
//     },

//     render: function(){
//         var CpName = 'Duyi'
//         console.log(this.props.name)
//         return (
//             <div>
//                 <h1>{CpName}</h1>
//                 <ul>
//                     {
//                         //[<li>cst</li>,<li>jc</li><li>dxm</li>]
//                         this.props.data.map(function(ele,index){
//                             return <li key={index + 100}>{ele}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     },

//     componentDidMount: function(){
//         var self = this;
//         console.log('componentDidMount');
//         setTimeout(function(){
//             self.setState({value:'cst'})
//         },2000)
//     },
// });

// var dataList =['cst','jc','dxm']

// ReactDom.render(
//     <App data={dataList}/>,
//     document.getElementById('root')
// )


var Search = React.createClass({
    getInitialState: function(){
        return{
            value: 'please input'
        }
    },
    //自定义函数
    onHandleChange: function(){
        this.setState({value:this.refs.inp.value})
    },
    render:function(){
        console.log(this.state.value);
        return(
            <div>
                <input type='text' ref='inp' value={this.state.value} onChange={this.onHandleChange}></input>
                <span>{this.state.value}</span>
            </div>
        )
    }
})
ReactDom.render(
    <Search/>,
    document.getElementById('root')
)


// var Mask = React.createClass({
//     render: function(){
//         var styles = {
//             position:"absolute",
//             left:0,
//             top:0,
//             right:0,
//             bottom:0,
//             background:'black',
//             opacity:0.5,
//             display:'block'
//         },
//         return(
//             <div style={styles}>

//             </div>
//         )
//     }
// });
// var Dialog = React.createClass({
//     onHandelClick:function;
//     render:function(){
//         var styles = {
//             width:'100%',
//             height:200,
//             lineHeight:'200px',
//             textAlign:'center',
//             background:'orange',
//             color:'black'
//         }
//         return(
//             <div>
//                 <mask>
//                     <div style={styles}></div>
//                 </mask>
//             </div>
//         )
//     }
// })
// var App = React.createClass({
//     geteInitialState: function(){
//         return{

//         }
//     },
//     render:function(){
//         return(
//             <div>
//                 <Dialog></Dialog>
//             </div>
//         )
//     }
// })
// ReactDom.render(
//     <Mask/>,
//     document.getElementById('root')
// );