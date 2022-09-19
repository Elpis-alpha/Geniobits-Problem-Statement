import styled from 'styled-components'

import { BiGridAlt } from 'react-icons/bi'

import { HiOutlineUsers } from 'react-icons/hi'

import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'

import { FiLogOut } from 'react-icons/fi'

import { toast } from 'react-toastify'


const LeftNav = ({ blur }) => {

	return (

		<LeftNavStyle style={{ filter: blur ? "blur(2px)" : "none" }}>

			<div className="inner">

				<div className="img-part">

					<img src="/logo.png" alt="CAIT Logo" />

				</div>

				<div className="opt-part">

					<ul>

						<li onClick={() => toast("Comming soon")} className='active'>

							<BiGridAlt size="1pc" />

							<span>My Apps</span>

						</li>

						<li onClick={() => toast("Comming soon")}>

							<HiOutlineUsers size="1pc" />

							<span>Resources</span>

						</li>

					</ul>

				</div>

				<div className="opt-part x">

					<ul>

						<li onClick={() => toast("Comming soon")}>

							<AiOutlineHome size="1pc" />

							<span>My Organization</span>

						</li>

						<li onClick={() => toast("Comming soon")}>

							<AiOutlineSetting size="1pc" />

							<span>Settings</span>

						</li>

						<li onClick={() => toast("Comming soon")}>

							<FiLogOut size="1pc" />

							<span>Logout</span>

						</li>

					</ul>

				</div>

			</div>

		</LeftNavStyle>

	)

}

const LeftNavStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 150px;
	height: 100%;
	z-index: 20;
	/* overflow: auto; */
	
	.inner {
		background-color: #fff;
		box-shadow: 2px 2px 4px 0 rgba(0,0,0,.3);
		overflow: auto;

		.img-part {
			width: 100%;
			display: flex;
			padding-bottom: 2pc;

			img {
				width: 78%;
				margin: 1pc auto;
			}
		}

		.opt-part {
			display: flex;
			width: 100%;
			margin-bottom: 10pc;
			
			&.x {
				margin-bottom: 0pc;
				padding-bottom: 1pc;
			}

			ul {
				display: flex;
				width: 100%;
				flex-direction: column;
				list-style-type: none;

				li {
					cursor: pointer;
					padding: .1pc .7pc;
					margin-top: .8pc;
					display: flex;
					align-items: center;
					font-weight: bold;
					border-left: 3px solid transparent;
					transition: background-color .5s;

					span {
						display: block;
						padding-left: 0.3pc;
					}

					&.active {
						color: #f26e30;
						border-left: 3px solid #f26e30;
						box-shadow: 5px 5px 10px #f0f0f0, -5px -5px 10px #ffffff;
					}

					&:hover {
						background-color: rgba(0,0,0,.1);
					}
				}
			}
		}
	}
`

export default LeftNav
