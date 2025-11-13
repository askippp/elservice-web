import CardCountServices from "../../ui/cards/CardCountServices";

export default function ContentAdminLayout({ children }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">Plan, prioritize, and accomplish your tasks with ease</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardCountServices title="Total Service" count={24} percentage="7%" />
          <CardCountServices title="Ended Service" count={17} percentage="7%" />
          <CardCountServices title="Running Service" count={10} percentage="7%" />
          <CardCountServices title="Delay Service" count={4} percentage="7%" />
        </div>
      </div>
      {children}
    </div>
  );
}
