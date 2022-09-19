import { useEffect, useState } from "react"

import styled from "styled-components"

import { SpinnerCircular } from "spinners-react"

import { getApiJson } from "../helpers"

import LeftNav from "./home/LeftNav"

import Tasks from "./home/Tasks"

import TopNav from "./home/TopNav"

import MainPart from "./home/MainPart"

import OverAddTask from "./home/OverAddTask"


const Home = () => {

	// to store data from rest api
	const [appData, setAppData] = useState(undefined)

	// To control the add task popup
	const [showAddNew, setShowAddNew] = useState(false)

	useEffect(() => {

		const fetchData = async () => {

			// Fetches data
			const fData = await getApiJson("/api.json")

			setAppData(fData)

		}

		fetchData()

	}, [])

	if (appData) {

		return (

			<HomeStyle>

				{/* The left navbar */}
				<LeftNav blur={showAddNew} />

				{/* The top navbar */}
				<TopNav blur={showAddNew} />

				{/* The tasks box */}
				<Tasks appData={appData} setShowAddNew={setShowAddNew} blur={showAddNew} />

				{/* The list of tasks */}
				<MainPart appData={appData} blur={showAddNew} />

				{/* The add task popup */}
				{showAddNew && <OverAddTask setShowAddNew={setShowAddNew} />}

			</HomeStyle>

		)

	} else {

		return <SpinnerCircular size="3pc" color="#fff" secondaryColor="#c6d9f3" style={{ margin: "auto" }} />

	}

}

const HomeStyle = styled.div`

	width: 100%;
`

export default Home