import Header from "../../Components/Header/Header";
import About from "./Pages/About/page";

export default function Home() {
  return (
   <div className="w-10/12 h-auto m-auto">
    <Header/>
    <About/>
   </div>
  );
}
