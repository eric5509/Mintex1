import Button from "@/components/Button";
import Input from "@/components/Input";
import KingOfCoin from "@/components/KingOfCoin";
import LimitMarket from "@/components/LimitMarket";
import MarketCap from "@/components/MarketCap";
import Post from "@/components/Post";
import TokenCreated from "@/components/TokenCreated";
import TonCharge from "@/components/TonCharge";
import Topnav from "@/components/Topnav";
import TrendingTitle from "@/components/TrendingTitle";

export default function page() {
  return (
    <div>
      <KingOfCoin />
      <TonCharge />
      <TokenCreated />
      <Input />
      <LimitMarket />
      <TrendingTitle />
      <Topnav />
      <Post />
      <MarketCap />
    </div>
  )
}
