import { useEffect, useState } from "react"

import styled from "styled-components"

import { SpinnerCircular } from "spinners-react"

import { getApiJson } from "../helpers"

import LeftNav from "./home/LeftNav"

import Tasks from "./home/Tasks"

import TopNav from "./home/TopNav"

import MainPart from "./home/MainPart"


const Home = () => {

	const [appData, setAppData] = useState(undefined)

	const [showAddNew, setShowAddNew] = useState(false)

	useEffect(() => {

		const fetchData = async () => {

			const fData = await getApiJson("/api.json")

			setAppData(fData)

			console.log(fData);

		}

		fetchData()

	}, [])

	if (appData) {

		return (

			<HomeStyle>

				<LeftNav />

				<TopNav />

				<Tasks appData={appData} setShowAddNew={setShowAddNew} />

				<MainPart appData={appData} />

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