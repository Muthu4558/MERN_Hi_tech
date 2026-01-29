import { Link } from "react-router-dom"

const ServiceLink = ({ to, icon, children, full }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl
      hover:bg-[#F6F3ED] transition text-[#1F2F45] font-medium
      ${full ? "col-span-2" : ""}`}
  >
    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1F2F45]/10">
      {icon}
    </span>
    {children}
  </Link>
)

export default ServiceLink
