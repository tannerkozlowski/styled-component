import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const Keyframes = () => md`
  ### \`keyframes\` | web

  A helper method to create keyframes for animations.

  ${
    <Table head={[ 'Arguments', 'Description' ]}>
      <Row>
        <Column>
          1. <Code>TaggedTemplateLiteral</Code>
        </Column>
        <Column>
          A tagged template literal with your keyframes inside.
        </Column>
      </Row>
    </Table>
  }

  Returns a unique name for these keyframes, to be used in your animation declarations.

  \`\`\`jsx
  import styled, { keyframes } from 'styled-components';

  const fadeIn = keyframes\`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  \`;

  const FadeInButton = styled.button\`
    animation: 1s \${fadeIn} ease-out;
  \`;
  \`\`\`

  You can learn more about styled-components with Animations in the [Animations](/docs/basics#animations)
`

export default Keyframes
