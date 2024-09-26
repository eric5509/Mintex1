"use client";
import BackDropNavCard from "@/components/BackDropNavCard";
import BackdropTitle from "@/components/BackdropTitle";
import Button from "@/components/Button";
import CompBottomNav from "@/components/CompBottomNav";
import CreateToken from "@/components/CreateToken";
import Input from "@/components/Input";
import KingOfCoin from "@/components/KingOfCoin";
import LimitMarket from "@/components/LimitMarket";
import MarketCap from "@/components/MarketCap";
import Notification from "@/components/Notification";
import Post from "@/components/Post";
import Rectangle from "@/components/Rectangle";
import Title from "@/components/Title";
import TokenCreated from "@/components/TokenCreated";
import TonCharge from "@/components/TonCharge";
import Topnav from "@/components/Topnav";
import TrendingTitle from "@/components/TrendingTitle";

export default function page() {
  


  return (
    <div>
      <Notification />
      <BackdropTitle />
      <BackDropNavCard />
      <CreateToken />
      <CompBottomNav />
      <Title />
      <Rectangle />
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
  );
}
