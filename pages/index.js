import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { violetRed, gold } from '../utils/colors'
import { Content, Title, Header } from '../components/Layout'
import CodeBlock from '../components/CodeBlock'
import LiveEdit from '../components/LiveEdit'
import Code from '../components/Code'
import Link from '../components/Link'
import { BasicExample } from '../components/basics/getting-started'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  background: linear-gradient(20deg, ${violetRed}, ${gold});
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  min-height: 100vh;
`

const Logo = styled.img.attrs({
  alt: 'Styled Components Logo',
  src: '/static/logo.png'
})`
  width: ${rem(125)};
  height: ${rem(125)};
`

const Text = styled.h1`
  font-size: ${rem(18)};
  font-weight: normal;
  margin: ${rem(36)} 0;
`

const Tagline = styled.span`
  display: block;
  font-weight: 600;
  font-family: ${headerFont};
  font-size: ${rem(24)};
`

const SubTagline = styled.span`
  font-family: ${headerFont};
  font-size: ${rem(20)};
`

const Links = styled.div`
  margin: ${rem(36)} 0;
`

const Button = styled.a`
  display: inline-block;
  border-radius: ${rem(3)};
  padding: ${rem(6)} 0;
  margin: ${rem(5)} ${rem(16)};
  text-decoration: none;
  text-align: center;
  width: ${rem(175)};
  font-family: ${headerFont};

  background: transparent;
  color: white;
  border: ${rem(2)} solid white;

  ${p => p.primary && css`
    background: white;
    color: palevioletred;
  `}
`

const InternalButton = Button.withComponent(Link);

const ExampleButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${p => p.primary && css`
    background: palevioletred;
    color: white;
  `}
`

const AlignCenter = styled.div`
  text-align: center;
`

const sample = (`
const Button = styled.button\`
  /* Adapt the colours based on primary prop */
  background: \${props => props.primary ? 'palevioletred' : 'white'};
  color: \${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
\`;

<Button>Normal</Button>
<Button primary>Primary</Button>
`).trim()

const importSc = `
import styled from 'styled-components';

const Button = styled.button\`\`;
`.trim()

const firstStyling = `
const Button = styled.button\`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
\`
`.trim()

const finishedStyling = `
const Button = styled.button\`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  \${props => props.primary && css\`
    background: palevioletred;
    color: white;
  \`\}
\`
`.trim()

const finishedButtonExample = `
const Button = styled.button\`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  \${props => props.primary && css\`
    background: palevioletred;
    color: white;
  \`\}
\`

render(
  <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
)
`.trim()

const FirstButton = styled.button``;

const SecondButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

const Index = () => (
  <div>
    <Wrapper>
      <Content>
        <Logo />

        <Text>
          <Tagline>
            Visual primitives for the component age.
          </Tagline>

          <SubTagline>
            Use the best bits of ES6 and CSS to style your apps without stress 💅
          </SubTagline>
        </Text>

        <Links>
          <Button
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
          >
            GitHub
          </Button>

          <InternalButton href="/docs" prefetch>
            Documentation
          </InternalButton>
        </Links>

        <CodeBlock language="jsx" code={sample} />
      </Content>
    </Wrapper>

    <Content>
      <Title>Getting started</Title>
      <Header>Installation</Header>
      <p>To download styled-components run <Code>npm install --save styled-components</Code>. That's all you need to do, you are now ready to use it in your app! (yep, no build step needed 👌)</p>
      <Header>Your first styled component</Header>
      <p>Let's say you want to create a simple and reusable <Code>&lt;Button /&gt;</Code> component that you can use throughout your application. There should be a normal version and a big and <Code>primary</Code> version for the important buttons. This is what it should look like when rendered: (this is a live example, click on them!)</p>
      <AlignCenter>
        <ExampleButton onClick={() => { alert('You clicked the normal button!') }}>Normal button</ExampleButton>
        <ExampleButton primary onClick={() => { alert('You clicked the primary button!') }}>Primary button</ExampleButton>
      </AlignCenter>
      <p>First, let's import styled-components and create a <Code>styled.button</Code>:</p>
      <CodeBlock language="jsx" code={importSc} />
      <p>This <Code>Button</Code> variable here is now a React component that you can use like any other React component! This unusual backtick syntax is a new JavaScript feature called a tagged template literal. You know how you can call functions with parenthesis? (<Code>myFunc()</Code>) Well, now you can also call functions with backticks! (<Code>myFunc``</Code>, <Link inline href="/docs/advanced#tagged-template-literals">here is an explanation</Link> of how that works exactly)</p>

      <p>If you render our lovely component now (just like any other component: <Code>&lt;Button /&gt;</Code>) this is what you get:</p>
      <AlignCenter>
        <FirstButton>I'm a &lt;Button /&gt;!</FirstButton>
      </AlignCenter>
      <p>It renders a button! That's not a very nice button though 😕 we can do better than this, let's give it a bit of styling and tickle out the hidden beauty within!</p>
      <CodeBlock language="jsx" code={firstStyling} />
      <AlignCenter>
        <SecondButton>I'm a styled &lt;Button /&gt;</SecondButton>
      </AlignCenter>
      <p>As you can see, styled-components let's you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc. It also binds styles to components, which has some interesting properties. (learn more about <Link inline href="/docs/basics#motivation">the ideas behind styled-components here</Link>)</p>
      <p>The last step is that we need to define what a primary button looks like. To do that we interpolate a function into our template literal, which gets passed the props of our component:</p>
      <CodeBlock language="jsx" code={finishedStyling} />
      <p>All we're saying here is that when the <Code>primary</Code> property is set we want to add some more <Code>css</Code> to our component, in this case change the background and color.</p>
      <p>That's all, we're done! Take a look at our finished component:</p>
      <LiveEdit
        code={finishedButtonExample}
        noInline
      />
      <p>Nice 😍 That's a live updating editor too, so play around with it a bit to get a feel for what it's like to work with styled-components!</p>
      <p>Once you're done take a look at the <Link href="/docs" inline prefetch>documentation</Link>, specifically the <Link href="/docs/basics" inline prefetch>Getting started</Link> section! Enjoy ✨</p>
    </Content>
  </div>
)

export default Index
