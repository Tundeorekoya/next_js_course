
export default function dashboard({
  children,
  user,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
