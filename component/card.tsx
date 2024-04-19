export default function card({ children }: { children: React.ReactNode }) {
  const CardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0, 0.2)",
    border: "1px solid #dd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={CardStyle}>{children}</div>;
}
