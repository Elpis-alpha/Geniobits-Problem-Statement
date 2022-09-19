import styled from "styled-components"

import Select from 'react-select';

import { FaTimes } from "react-icons/fa"

import { toast } from 'react-toastify'

import { useMemo, useState } from "react";

const OverAddTask = ({ setShowAddNew }) => {

	const [taskPri, setTaskPri] = useState(undefined)

	const [deptRel, setDeptRel] = useState(undefined)

	const [assignedTo, setAssignedTo] = useState(undefined)

	const optionsPri = useMemo(() => [

		{ value: 'kdjsd', label: 'Low' },

		{ value: 'lsakkdsak', label: 'Medium' },

		{ value: 'ldsladk', label: 'High' },

	], []);

	const optionsDept = useMemo(() => [

		{ value: 'adsf', label: 'HR Department' },

		{ value: 'dsj', label: 'Logistics' },

		{ value: 'dsfj', label: 'Engineering Department' },

	], []);

	const optionsAss = useMemo(() => [

		{ value: 'oase', label: 'Clarke Harris' },

		{ value: 'kdsf', label: 'Mike Johnson' },

		{ value: 'jd', label: 'Wist Mall' },

	], []);

	const submitForm = e => {

		e.preventDefault()

		toast("Task created")

		setShowAddNew(false)

	}

	return (

		<OverAddTaskStyle>

			<form className="inner" onSubmit={submitForm}>

				<div className="intro">

					<h2>Add Task</h2>

					<div className="cancel-x" onClick={() => setShowAddNew(false)}>

						<FaTimes color="red" size="1.2pc" />

					</div>

				</div>

				<div className="mid-part">

					<div className="left o-s-p">

						<div className="form-pack">

							<label htmlFor="t-name">Task Name</label>

							<input required type="text" id="t-name" name="t-name" />

						</div>

						<div className="form-pack">

							<label htmlFor="t-desc">Description</label>

							<textarea required name="t-desc" id="t-desc"></textarea>

						</div>

					</div>

					<div className="mid o-s-p">

						<div className="form-pack">

							<label htmlFor="t-da-ti">Set Deadline</label>

							<input required type="datetime-local" name="t-da-ti" id="t-da-ti" />

						</div>

						<div className="f-ps">

							<label htmlFor="t-as-df">Assign To</label>

							<Select
								value={assignedTo}
								onChange={setAssignedTo}
								options={optionsAss}
								id="t-as-df"
								className="sel-left"
							/>

						</div>

					</div>

					<div className="right o-s-p">

						<div className="f-ps">

							<label htmlFor="t-spri">Set Priority</label>

							<Select
								value={taskPri}
								onChange={setTaskPri}
								options={optionsPri}
								className="sel-left"
								id="t-spri"
							/>

						</div>

						<div className="f-ps">

							<label htmlFor="t-rel-to">Related To</label>

							<Select
								value={deptRel}
								id="t-rel-to"
								onChange={setDeptRel}
								options={optionsDept}
								className="sel-left"
							/>

						</div>

					</div>

				</div>

				<div className="end-part">

					<div className="i-ed">

						<button className="can" type="button" onClick={() => setShowAddNew(false)}>Cancel</button>

						<button className="ok" type={"submit"}>Add</button>

					</div>

				</div>

			</form>

		</OverAddTaskStyle>

	)

}

const OverAddTaskStyle = styled.div`
	position: fixed;
	top: 0; bottom: 0;
	left: 0; right: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.3);
	z-index: 150;
	display: flex;

	.inner {
		width: 80%;
		background-color: #fff;
		margin: auto;
		border-radius: 1pc;
		max-width: 800px;

		.intro {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 1pc;
			border-bottom: 2px solid #e4ecf7;

			h2 {
				font-size: .8pc;
			}

			.cancel-x {
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}
		}

		.mid-part {
			display: flex;
			align-items: stretch;
			justify-content: center;

			.o-s-p {
				flex: 1;
				padding: 1pc;

				.form-pack {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					padding-bottom: .5pc;
					text-align: left;

					label {
						width: 100%;
					}

					input, textarea {
						outline: 0 none;
						padding: 0 .5pc;
						border: 0 none;
						background-color: #e4ecf7;
						border-radius: .5pc;
						width: 100%;
					}
				}
				
				.f-ps {
					padding-bottom: .5pc;
				}
			}
		}

		.end-part {
			padding: 1pc;
			box-shadow: 0 -2px 4px rgba(0,0,0,.3);

			.i-ed {
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.can {
					border: 0 none;
					font-weight: bold;
				}
				
				.ok {
					border: 0 none;
					color: #fff;
					background-color: #f26724;
					padding: 0 2.5pc;
					line-height: 1.8pc;
					border-radius: 0.4pc;
					margin-left: .3pc;
				}
			}
		}
	}
`

export default OverAddTask
