import styled from 'styled-components'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { BsCalendar } from 'react-icons/bs'

import { AiOutlinePlus } from 'react-icons/ai'

import { toast } from 'react-toastify'

import { v4 } from 'uuid'


const Tasks = ({ appData, setShowAddNew, blur }) => {

	return (

		<TasksStyle style={{ filter: blur ? "blur(2px)" : "none" }}>

			<div className="inner">

				<div className="task-block">

					<div className="intro">

						<h2>Tasks</h2>

						<div className="date-w" onClick={() => toast("Comming soon")}>

							<div className="l-arr">

								<FaAngleLeft />

							</div>

							<div className="datt">

								<BsCalendar />

								<span>May 9, 2022</span>

							</div>

							<div className="r-arr">

								<FaAngleRight />

							</div>

						</div>

					</div>

					<div className="items">

						{appData.tasks.map(task => <div className='task-hol' key={v4()}>

							<div className='task' style={{ backgroundColor: task.color }} onClick={() => toast("Comming soon")}>

								<div className="number">{task.number}</div>

								<div className="name">{task.name}</div>

							</div>

						</div>)}

					</div>

				</div>

				<div className="add-new">

					<div className='ic-hh' onClick={() => setShowAddNew(true)}>

						<AiOutlinePlus size="1.5pc" />

						<span>Add New Task</span>

					</div>

				</div>

			</div>

		</TasksStyle>

	)

}

const TasksStyle = styled.div`
	width: 100%;
	z-index: 10;
	padding-left: 150px;
	
	.inner {
		padding: 1pc;
		display: flex;
		align-items: center;

		.task-block {
			flex: 1;
			background-color: #fff;
			border-radius: 1pc;

			.intro {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 1pc;
				border-bottom: 2px solid #e4ecf7;
	
				h2 {
					font-size: .8pc;
				}

				.date-w {
					display: flex;
					align-items: center;
					color: #6b81a0;
					cursor: pointer;

					> div {
						margin: 0 .2pc;

						&.datt {
							display: flex;
							align-items: center;

							span {
								margin-left: .2pc;
							}
						}

						&.l-arr, &.r-arr {
							width: 1.2pc;
							height: 1.2pc;
							background-color: #e4ecf7;
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 50%;
						}
					}
				}
			}

			.items {
				display: flex;
				align-items: center;

				.task-hol {
					flex: 1;
					padding: 1pc;

					.task {
						border-radius: .5pc;
						color: #fff;
						padding: 1pc;
						line-height: 1pc;
						cursor: pointer;

						.number {
							padding-bottom: 0.5pc;
						}
					}
				}
			}
		}

		.add-new {
			padding: 0.5pc;
			padding-left: 1.5pc;

			.ic-hh {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #fff;
				padding: .5pc 1pc;
				padding-top: 0.8pc;
				cursor: pointer;
				border-radius: 0.5pc;
				background-color: #f26724;
			}
		}
	}
`

export default Tasks
