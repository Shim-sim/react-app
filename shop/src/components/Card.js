/* eslint-disable */
import { Link } from 'react-router-dom';


function Card(props) {
	return(
		<div className="col-md-4" >
			<Link to={`/detail/${props.i}`} style={{ color: 'black' }}>
			<img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%"/>
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}</p>
			</Link>
		</div>
	)
}

export default Card;