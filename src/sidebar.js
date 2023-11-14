import { BiSolidDashboard, BiSolidUser } from "react-icons/bi";
import { MdAccountBalanceWallet, MdContacts } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

export const sidebarData = [
  {
    key: 1,
    label: "Dashboard",
    icon: <BiSolidDashboard />,
    
  },
  {
    key: 2,
    label: "Accounts",
    icon: <MdAccountBalanceWallet />,
    
  },
  {
    key: 3,
    label: "Payroll",
    icon: <FaDollarSign />,
  },
  {
    key: 4,
    label: "Reports",
    icon: <IoDocumentTextSharp />,
  },
  {
    key: 5,
    label: "Advisor",
    icon: <BiSolidUser />,
  },
  {
    key: 6,
    label: "Contacts",
    icon: <MdContacts />,
  },
];
