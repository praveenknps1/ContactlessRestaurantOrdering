import Reader2 from "react-qr-scanner";

const Reader2Wrapper = (props) => {
  const { propA = "defaultA", propB = "defaultB", ...rest } = props;

  return <Reader2 propA={propA} propB={propB} {...rest} />;
};

export default Reader2Wrapper;
