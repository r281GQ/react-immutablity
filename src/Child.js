import React, { Component } from 'react';
import { Flex, Button, Text } from 'rebass';

export default class Child extends Component {
  componentDidMount = () => {
    const props = this.props;

    setInterval(() => {
      console.log(this.props === props);
    }, 1000);
  };

  render = () => {
    return (
      <Flex p={3} justifyContent="center" flexDirection="column">
        <Text fontSize={5} fontWeight="bold" color="blue" textAlign="center">
          CHILD
        </Text>
        <Button m={1} onClick={() => console.log(this.props)}>
          Console props
        </Button>
        <Button
          m={1}
          onClick={() => {
            this.props.props.grandParentState.value = 90;
          }}
        >
          Change props that derived from grandParent's state
        </Button>
      </Flex>
    );
  };
}
