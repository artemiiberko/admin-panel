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
let statusfilter

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
    dataField: "description",
    text: "Description",
    sort: true,
    headerStyle: () => {
      return { width: "25%" }
    },
  },
  {
    dataField: "speakers",
    text: "Speakers",
    sort: true,
    headerStyle: () => {
      return { width: "10%" }
    },
  },
  {
    dataField: "rating",
    text: "Rating",
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

const agendasdata = [
  {
    id: 1,
    title:
      "dlk ajsdlk ajsdjasdl ajslk djaskl dja sdjlasj dlkajsd lka jsldaj das lda sadd",
    description:
      "asdkmlaknaljskndlajsndlak a ak kajfkasdfkajsd fas f akjf;kla;sdklfj;ak lsjd sdfasdf",
    speakers: 2,
    rating: 3,
    status: "Active",
  },
  {
    id: 2,
    title: "vnsr snjdknv snvenvsjnvsjenvjs",
    description:
      "acckamlk anjnajnvjdk vjsdnvlvuirvpavn jpsacmnuarn aorvnaur vnauvnjnvjd nadsjvnajsdnvajndv ajn dsjansvjandavuoinravi vna  nvenrv ajdnkljvnjdfk nvlj an najlknvan nasjd",
    speakers: 2,
    rating: 3,
    status: "Active",
  },
  {
    id: 3,
    title: "poqwopoqw",
    description: "asl;al;sdfk sdkfjaf ksldka;d skla skdl",
    speakers: 2,
    rating: 3,
    status: "Active",
  },
]

const Agendas = () => {
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
  const [changeAgendas, setChangeAgendas] = useState(agendasdata)
  const [addagendaerror, setAddagendaerror] = useState("")

  const [newAgenda, setNewAgenda] = useState({
    id: 0,
    title: "",
    description: "",
    speakers: 0,
    rating: 0,
    status: "",
  })
  const addAgenda = (agenda) => {
    setChangeAgendas((prevState) => [...prevState, agenda])
  }
  const onAgendaChange = (e) => {
    const { name, value } = e.target
    setNewAgenda((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  function idExists(id) {
    return changeAgendas.some(function (e) {
      return e.id === id
    })
  }
  const handleSubmit = (e) => {
    if (
      (newAgenda.id !== "") &
      (newAgenda.title !== "") &
      (newAgenda.description !== "") &
      (newAgenda.speakers !== "") &
      (newAgenda.rating !== "") &
      (newAgenda.status !== "")
    ) {
      if (idExists(newAgenda.id)) {
        setAddagendaerror("ID уже существует")
      } else {
        setAddagendaerror("")
        addAgenda(newAgenda)
        setShow(false)
      }
    } else {
      setAddagendaerror("Заполните все поля")
    }
  }
  const statusFilterChange = (e) => {
    statusfilter(e.target.value)
  }
  return (
    <div className="page">
      <div className="page-head">
        <div className="page-header">Agendas List</div>
        <div className="buttons">
          <button className="button-head" onClick={handleShow}>
            <i className="bi bi-plus-lg"></i> New Agenda
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add new agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="ID"
              onChange={onAgendaChange}
              value={newAgenda.id}
              name="id"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={onAgendaChange}
              value={newAgenda.title}
              name="title"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dscription"
              onChange={onAgendaChange}
              value={newAgenda.description}
              name="description"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Speakers</Form.Label>
            <Form.Control
              type="number"
              placeholder="Speakers"
              onChange={onAgendaChange}
              value={newAgenda.speakers}
              name="speakers"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Rating"
              onChange={onAgendaChange}
              value={newAgenda.rating}
              name="rating"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              type="text"
              placeholder="Status"
              onChange={onAgendaChange}
              value={newAgenda.status}
              name="status"
            >
              <option key="status"></option>
              {statuslist.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="add-error">{addagendaerror}</div>
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
            data={changeAgendas}
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

export default Agendas
