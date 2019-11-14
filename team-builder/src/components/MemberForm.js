import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemberForm = props => {
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:""
    });

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name:"", email:"", role:"" })
    };

    return(
      <div className="formCont">
        <Form onSubmit={submitForm}>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
                placeholder="Full Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
                placeholder="example@example.com" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="role" sm={2}>Role</Label>
            <Col sm={10}>
              <Input
                id="role"
                type="select"
                name="role"
                onChange={handleChanges}
                value={member.role}
              >
                  <option>Tank</option>
                  <option>Healer</option>
                  <option>Damage</option>
                  <option>Support</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
};

export default MemberForm;