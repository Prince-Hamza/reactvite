import { useContext, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Col, Form, Row } from 'react-bootstrap'
import { AppContext } from '../../Context'

function Main() {

    const { appInfo, setAppInfo } = useContext(AppContext)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => {
                    appInfo.count += 1
                    setAppInfo({ ...appInfo })
                }}>
                    count is {appInfo.count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>


            <Row style={{ width: '100%' }}>
                <Form.Label> __________ </Form.Label>
            </Row>

            <Row style={{ width: '100%' }}>
                <Form.Label> ____ </Form.Label>
            </Row>


        </div>
    )
}

export default Main


