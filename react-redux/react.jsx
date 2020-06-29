function App(props){
	return (
		<div>
			<Box1 name="hello" gender="男"></Box1>
			<Box2 name="world" gender="女"></Box2>
		</div>
	)
  }
  //组件名首字母要大写
  class Box1 extends React.Component{
	  constructor(props){
		  super(props)
		  this.state = {
			  number: 20
		  }
	  }
	  add(){
		  this.setState({
			  number: this.state.number + 1}
		  )
	  }
	  minus(){
		  this.setState({
			  number: this.state.number - 1
		  })
	  }
	  render(){
		  return (
			  
				<div>
				  
				  <span>我的名字是{this.props.name},性别是{this.props.gender}，今年{this.state.number}岁</span>
				  <button onClick={this.add.bind(this)}> +1岁 </button>
				  <button onClick={this.minus.bind(this)}> -1岁 </button>
				  //记住要自己绑定this
				</div>
			  
		  )
	  }
  }
  

  
  
  render()
  function render(){
	  ReactDOM.render(
		  <App> </App>,
		  document.querySelector("#root")
	  )
  }