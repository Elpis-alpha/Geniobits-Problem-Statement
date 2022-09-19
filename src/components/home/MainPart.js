import Select from 'react-select';

import { useMemo, useState } from 'react'

import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa'

import styled from 'styled-components'

import { v4 } from 'uuid';

import { capitalize, datetoDateSlash, datetoTimeStr } from '../../helpers';


const MainPart = ({ appData, blur }) => {

	const [start, setStart] = useState(0)

	const [count, setCount] = useState(10)

	const [appStateData, setAppStateData] = useState(appData)

	const [switchVal, setSwitchVal] = useState({ value: 'a', label: 'All' })

	const options = useMemo(() => [

		{ value: 'a', label: 'All' },

		{ value: 'mt', label: 'My Tasks' },

	], []);

	const statusColor = val => {

		switch (val) {

			case "delayed": return "#fa232f"

			case "completed": return "#53c41a"

			case "ongoing": return "#fbad15"

			default: return "#000"
		}

	}

	const filterTasks = e => {

		const val = e.target.value.trim().toLowerCase()

		console.log(appData);
		console.log(val.length === 0);

		if (val.length === 0) {

			setAppStateData(appData)

		} else {

			let task_list = appData.task_list.filter(task => task.task.toLowerCase().startsWith(val))

			task_list = task_list.concat(appData.task_list.filter(task => (!task.task.toLowerCase().startsWith(val) && task.task.toLowerCase().includes(val))))

			setAppStateData({ ...appData, task_list })

		}

		setStart(0)

	}

	console.log(appStateData);

	return (

		<MainPartStyle style={{ filter: blur ? "blur(2px)" : "none" }}>

			<div className="inner">

				<div className="task-list-block">

					<div className="intro">

						<h2>Task List</h2>

						<div className="fill">

							<Select
								value={switchVal}
								onChange={setSwitchVal}
								options={options}
							/>

						</div>

					</div>

					<div className="search">

						<div className="i-s">

							<input type="text" placeholder='Search Tasks' onInput={filterTasks} />

							<div className="s-ic"><FaSearch /></div>

							<div className="end-ic">

								<div className="l-arr" onClick={() => setStart(((start - count) >= 0) ? (start - count) : 0)}>

									<FaAngleLeft />

								</div>

								<div className="datt">

									{start}-{(start + count) > appStateData.task_list.length ? appStateData.task_list.length : (start + count)} of {appStateData.task_list.length}

								</div>

								<div className="r-arr" onClick={() => setStart(((start + count) <= appStateData.task_list.length) ? (start + count) : appStateData.task_list.length - 1)}>

									<FaAngleRight />

								</div>

							</div>

						</div>

					</div>

					<div className="table">

						<table>

							<thead>

								<tr>

									<th>Task</th>

									<th>Time</th>

									<th>Date</th>

									<th>Assigned By</th>

									<th>Assigned To</th>

									<th>Deadline</th>

									<th>Status</th>

									<th>Priority</th>

								</tr>

							</thead>

							<tbody>

								{appStateData.task_list.slice(start, start + count).map(task => <tr key={v4()}>

									<td>{task.task}</td>

									<td>{datetoTimeStr(new Date(task.datetime))}</td>

									<td>{datetoDateSlash(new Date(task.datetime))}</td>

									<td>{task.assigned_by}</td>

									<td>{task.assigned_to}</td>

									<td>{datetoDateSlash(new Date(task.deadline))}</td>

									<td style={{ textAlign: "center" }}><span style={{ backgroundColor: statusColor(task.status) }}></span></td>

									<td>{capitalize(task.priority)}</td>

								</tr>)}

							</tbody>

						</table>

					</div>

				</div>

			</div>

		</MainPartStyle>

	)

}

const MainPartStyle = styled.div`
	width: 100%;
	z-index: 10;
	padding-left: 150px;
	
	.inner {
		padding: 1pc;
		display: flex;
		align-items: center;

		.task-list-block {
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

				.fill {

					* {
						border: 0 none;
						outline: 0 none;
					}
				}
			}

		}

		.search {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1pc;

			.i-s {
				width: 100%;

				input {
					width: 100%;
					display: block;
					line-height: 1.5pc;
					padding: 0.3pc;
					padding-left: 2pc;
					padding-right: 5pc;
					border: 0 none;
					outline: 0 none;
					box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
					border-radius: 1pc;
				}

				.s-ic {
					position: absolute;
					top: 0; bottom: 0;
					left: 0;
					width: 2pc;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.end-ic {
					position: absolute;
					top: 0; bottom: 0;
					right: 0;
					padding-right: .4pc;
					display: flex;
					align-items: center;
					justify-content: center;

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
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
		}

		.table {
			padding: 1pc;
			padding-top: 0;
			text-align: left;
			
			table {
				width: 100%;

				tr {
					border-bottom: #e4ecf7;

					td {
						font-size: .7pc;
					}

					span {
						width: 1pc;
						height: 1pc;
						display: inline-block;
						border-radius: 50%;
						margin: auto;
					}
				}
			}
		}
	}
`

export default MainPart
