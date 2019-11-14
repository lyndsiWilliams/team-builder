import React from "react";
import { Card, Button, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

const Members = props => {
  return (
    // <div className="cardDeck">
        <CardDeck>
            {props.members.map(member => (
            <Card key={member.id}>
                {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
                <CardBody>
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>{member.email}</CardSubtitle>
                <CardText>Role: {member.role}</CardText>
                <Button>Edit</Button>
                </CardBody>
            </Card>
            ))}
        </CardDeck>
    // </div>
  );
};

export default Members;