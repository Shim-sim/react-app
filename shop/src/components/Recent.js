import './../components/Recent.css';
import { Link } from 'react-router-dom'

const Recent = ( { recentArr } ) => {

	return (
		<div className="lasted">
			<h6>최근 본 상품</h6>
			{
				recentArr && recentArr.map((a,i)=> {
					return(
						<div className="row" key={i}>
							<Link to={`/detail/${a}`}>
								<img src={`https://codingapple1.github.io/shop/shoes${+a+1}.jpg`} width="100%" alt="recentShoes"/>
							</Link>
						</div>
					)}
				)
			}
		</div>
	)
}

export default Recent