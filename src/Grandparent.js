import React, { Component } from 'react';
import { Box, Flex, Button, Text } from 'rebass';

import Parent from './Parent';

export default class Grandparent extends Component {
  state = { value: 0 };

  render = () => {
    return (
      <Flex flex="1" p={3} justifyContent="center" flexDirection="column">
        <Box>
          <Text
            fontSize={[5]}
            fontWeight="bold"
            color="blue"
            textAlign="center"
          >
            GRANDPARENT
          </Text>
        </Box>
        <Button m={1} onClick={() => console.log(this.state)}>
          Show value in state
        </Button>

        <Button
          m={1}
          onClick={() => {
            this.state.value = 500;
          }}
        >
          Alter state directly
        </Button>
        <Parent grandParentState={this.state} />
      </Flex>
    );
  };
}
