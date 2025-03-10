import Header from ".//Header";
import Navbar from "../../components/navbar/navbar";
import BalanceCard from "./BalanceCard";
import WalletInfo from "./WalletInfo";
import MyCards from "./MyCards";
import InviteFriends from "./InviteFriends";
import ScheduledDeposits from "./ScheduledDeposits";

const index = () => {
  return (
    <div className="mx-auto bg-gray-100 min-h-screen pb-[142px] w-[100%] max-w-[375px] ">
      <Header />
      <BalanceCard />
      <WalletInfo />
      <MyCards />
      <InviteFriends />
      <ScheduledDeposits />
      <Navbar />
    </div>
  );
};

export default index;
