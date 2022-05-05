const MyComponent = (props) => {
  return <div>핑크마카롱~~~~~ {props.name}</div>;
};
MyComponent.defaultProps = {
  name: '루피',
};
export default MyComponent;
