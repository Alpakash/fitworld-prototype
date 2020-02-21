export default {
  borderDiv: `
    width: 100px;
    height: 100px;
    border: 1px solid black;
`,
  button: `
    width: 150px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    color: ${ (props: { theme: { main: any; }; }) => props.theme.main };
    border: 2px solid ${ (props: { theme: { main: any; }; }) => props.theme.main };
    `
}
