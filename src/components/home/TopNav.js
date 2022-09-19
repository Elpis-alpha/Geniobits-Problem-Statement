import styled from 'styled-components'

import { AiOutlineUser } from 'react-icons/ai'

import { BsBell } from 'react-icons/bs'

import { toast } from 'react-toastify'


const TopNav = ({ blur }) => {

	return (

		<TopNavStyle style={{ filter: blur ? "blur(2px)" : "none" }}>

			<div className="inner">

				<div className="l-part">

					<span onClick={() => toast("Comming soon")}>My Apps</span>

					<span className="mid">{">"}</span>

					<span className="active" onClick={() => toast("Comming soon")}>Tasks</span>

				</div>

				<div className="r-part">

					<div className="ic-hol" onClick={() => toast("Comming soon")}>

						<div className="red"></div>

						<BsBell />

					</div>

					<div className="ic-hol" onClick={() => toast("Comming soon")}>

						<AiOutlineUser />

					</div>

				</div>

			</div>

		</TopNavStyle>

	)

}

const TopNavStyle = styled.div`
	background-color: #fff;
	z-index: 30;
	margin-left: 150px;

	.inner {
		display: flex;
		justify-content: space-between;

		.l-part {
			padding: 1pc;
			font-size: 1pc;
			font-weight: bold;

			display: flex;
			align-items: center;
			
			span {
				display: block;
				cursor: pointer;
				padding-right: 0.3pc;

				&.active {
					color: #19ba9d;
				}

				&.mid {
					cursor: auto;
				}

				&:hover {
					color: #000;
				}
			}
		}

		.r-part {
			display: flex;

			.ic-hol {
				cursor: pointer;
				width: 2pc;
				height: 2pc;
				display: block;
				background-color: #e4ecf7;
				margin: auto .5pc;

				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				transition: background-color .5s;
				
				.red {
					position: absolute;
					top: 0; right: 0;
					width: .5pc;
					height: .5pc;
					border-radius: 50%;
					background-color: red;
				}

				&:hover {
					background-color: #e4f7e4;
				}
			}
		}
	}
`

export default TopNav
