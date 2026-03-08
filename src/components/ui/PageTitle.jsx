export default function PageTitle({ children }) {
  return (
    <div className="pageBox">
      <h1 className="pageTitle">{children}</h1>
      <p className="pageDesc"></p>
    </div>
  );
}