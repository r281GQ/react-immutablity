import React, { Component } from 'react';
import { Flex, Button, Text } from 'rebass';

import Child from './Child';

export default class Parent extends Component {
  state = { number: 0 };

  render = () => {
    return (
      <Flex p={3} justifyContent="center" flexDirection="column">
        <Text fontSize={[5]} fontWeight="bold" color="blue" textAlign="center">
          PARENT
        </Text>
        <Flex justifyContent="space-around">
          <Button m={1} onClick={() => console.log(this.state)}>
            Show value in state
          </Button>
          <Button m={1} onClick={() => console.log(this.props)}>
            Show value in props
          </Button>
        </Flex>
        <Button
          m={1}
          onClick={() => {
            this.setState({ number: 5 });
          }}
        >
          Change in state that passed to child
        </Button>
        <Button
          m={1}
          onClick={() => {
            this.props.grandParentState.value = 555;
          }}
        >
          Change state in grandparent
        </Button>
        <Button
          m={1}
          onClick={() => {
            delete this.props.grandParentState;
          }}
        >
          Delete props field
        </Button>
        <Button
          m={1}
          onClick={() => {
            this.props.newField = 'newField';
          }}
        >
          Add other field to props
        </Button>
        <Child props={this.props} number={this.state.number} />
      </Flex>
    );
  };
}
