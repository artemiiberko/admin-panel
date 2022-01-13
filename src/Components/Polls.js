import React, { useState } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Modal } from "react-bootstrap"
import paginationFactory from "react-bootstrap-table2-paginator"
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter"
import { FormControl, TextField, MenuItem, Select, Stack } from "@mui/material"
import "bootstrap-icons/font/bootstrap-icons.css"

const statuslist = ["Active", "Inactive"]
const polltypelist = ["Optional", "Subjective"]
let statusfilter
let polltypefilter

const columnsdata = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" }
    },
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    headerStyle: () => {
      return { width: "25%" }
    },
  },
  {
    dataField: "questions",
    text: "Questions",
    sort: true,
    headerStyle: () => {
      return { width: "25%" }
    },
  },
  {
    dataField: "option_a",
    text: "Option A",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "option_b",
    text: "Option B",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "option_c",
    text: "Option C",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "option_d",
    text: "Option D",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "polltype",
    text: "Poll Type",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
    filter: selectFilter({
      options: polltypelist,
      getFilter: (filter) => {
        polltypefilter = filter
      },
      className: "head-filter",
    }),
  },
  {
    dataField: "surveystart",
    text: "Survey Start Time",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "surveyend",
    text: "Survey End Time",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "result",
    text: "Result",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    filter: selectFilter({
      options: statuslist,
      getFilter: (filter) => {
        statusfilter = filter
      },
      className: "head-filter",
    }),
    headerStyle: () => {
      return { width: "15%" }
    },
  },
  {
    dataField: "buttons",
    text: "Actions",
    headerStyle: () => {
      return { width: "10%" }
    },
  },
]

const pollsdata = [
  {
    id: 1,
    title: "test",
    questions: "test",
    option_a: "A",
    option_b: "B",
    option_c: "C",
    option_d: "D",
    polltype: "Optional",
    surveystart: "",
    surveyend: "",
    result: 0,
    status: "Inactive",
  },
  {
    id: 2,
    title: "test2",
    questions: "test2",
    option_a: "A",
    option_b: "B",
    option_c: "C",
    option_d: "D",
    polltype: "Optional",
    surveystart: "",
    surveyend: "",
    result: 0,
    status: "Inactive",
  },
  {
    id: 3,
    title: "test3",
    questions: "test3",
    option_a: "A",
    option_b: "B",
    option_c: "C",
    option_d: "D",
    polltype: "Optional",
    surveystart: "",
    surveyend: "",
    result: 0,
    status: "Inactive",
  },
]

const Polls = () => {
  let rowStyle = (row, rowIndex) => {
    row.index = rowIndex
    const style = {}
    if (rowIndex % 2 === 0) {
      style.backgroundColor = "transparent"
    } else {
      style.backgroundColor = "#faf9fc"
    }
    style.borderTop = "none"

    return style
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [changePolls, setChangePolls] = useState(pollsdata)
  const [pollerror, setPollerror] = useState("")
  const [newPoll, setNewPoll] = useState({
    id: 0,
    title: "",
    questions: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    polltype: "",
    surveystart: "",
    surveyend: "",
    result: 0,
    status: "",
  })
  const addPoll = (poll) => {
    setChangePolls((prevState) => [...prevState, poll])
  }
  const onPollChange = (e) => {
    const { name, value } = e.target
    setNewPoll((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  function idExists(id) {
    return changePolls.some(function (e) {
      return e.id === id
    })
  }
  const handleSubmit = (e) => {
    if (
      (newPoll.id !== "") &
      (newPoll.title !== "") &
      (newPoll.questions !== "") &
      (newPoll.option_a !== "") &
      (newPoll.option_b !== "") &
      (newPoll.option_c !== "") &
      (newPoll.option_d !== "") &
      (newPoll.polltype !== "") &
      (newPoll.result !== "") &
      (newPoll.status !== "")
    ) {
      if (idExists(newPoll.id)) {
        setPollerror("ID уже существует")
      } else {
        setPollerror("")
        addPoll(newPoll)
        setShow(false)
      }
    } else {
      setPollerror("Заполните все поля")
    }
  }
  const statusFilterChange = (e) => {
    statusfilter(e.target.value)
  }
  const polltypeFilterChange = (e) => {
    polltypefilter(e.target.value)
  }
  return (
    <div className="page">
      <div className="page-head">
        <div className="page-header">Polls List</div>
        <div className="buttons">
          <button className="button-head" onClick={handleShow}>
            <i className="bi bi-plus-lg"></i> New Poll
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add new poll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="ID"
              onChange={onPollChange}
              value={newPoll.id}
              name="id"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={onPollChange}
              value={newPoll.title}
              name="title"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Questions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Questions"
              onChange={onPollChange}
              value={newPoll.questions}
              name="questions"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Option A</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option A"
              onChange={onPollChange}
              value={newPoll.option_a}
              name="option_a"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Option B</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option B"
              onChange={onPollChange}
              value={newPoll.option_b}
              name="option_b"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Option C</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option C"
              onChange={onPollChange}
              value={newPoll.option_c}
              name="option_c"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Option D</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option D"
              onChange={onPollChange}
              value={newPoll.option_d}
              name="option_d"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poll Type</Form.Label>
            <Form.Select
              type="text"
              placeholder="Poll Type"
              onChange={onPollChange}
              value={newPoll.polltype}
              name="polltype"
            >
              <option key="polltype"></option>
              {polltypelist.map((polltype) => (
                <option key={polltype}>{polltype}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Survey Start Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Survey Start Time"
              onChange={onPollChange}
              value={newPoll.surveystart}
              name="surveystart"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Survey End Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Survey End Time"
              onChange={onPollChange}
              value={newPoll.surveyend}
              name="surveyend"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Result</Form.Label>
            <Form.Control
              type="text"
              placeholder="Result"
              onChange={onPollChange}
              value={newPoll.result}
              name="result"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              type="text"
              placeholder="Status"
              onChange={onPollChange}
              value={newPoll.status}
              name="status"
            >
              <option key="status"></option>
              {statuslist.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="add-error">{pollerror}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="table-wrapper">
        <div className="filter" style={{ justifyContent: "left" }}>
          <Stack sx={{ minWidth: "219px" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="status"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
                onChange={statusFilterChange}
              >
                <MenuItem key="status" value="">
                  <font color="grey">All Status</font>
                </MenuItem>
                {statuslist.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack sx={{ minWidth: "219px" }}>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <Select
                id="polltype"
                displayEmpty
                defaultValue={""}
                sx={{
                  height: "38px",
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
                onChange={polltypeFilterChange}
              >
                <MenuItem key="polltype" value="">
                  <font color="grey">All Poll Type</font>
                </MenuItem>
                {polltypelist.map((polltype) => (
                  <MenuItem key={polltype} value={polltype}>
                    {polltype}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack>
            <FormControl sx={{ m: "0px 15px 15px 15px", mt: "0px" }}>
              <TextField
                id="search"
                placeholder="Search..."
                type="search"
                variant="outlined"
                height="30px"
                size="small"
                sx={{
                  p: 0,
                  m: 0,
                  fontFamily: "Poppins",
                  fontSize: 14,
                }}
              />
            </FormControl>
          </Stack>
        </div>
        <div className="mytable">
          <BootstrapTable
            keyField="id"
            data={changePolls}
            columns={columnsdata}
            hover
            condensed
            bordered={false}
            headerWrapperClasses="table-header"
            bodyClasses="table-body"
            rowStyle={rowStyle}
            pagination={paginationFactory()}
            filter={filterFactory()}
          />
        </div>
      </div>
    </div>
  )
}

export default Polls
