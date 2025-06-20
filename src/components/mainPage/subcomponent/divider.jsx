function divider(props) {
  return props.margin ? (
    <div
      className="divider"
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#f0f0f0",
        margin: props.margin,
      }}
    ></div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#f0f0f0",
        margin: "1rem 0",
      }}
    ></div>
  );
}

export default divider;
