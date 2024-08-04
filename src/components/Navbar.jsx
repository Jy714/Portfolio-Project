import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import xhs from "../assets/xiaohongshu.png.webp"


const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">

        {/* left-part */}
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        </div>
        {/* right part */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.xiaohongshu.com/user/profile/621b282c000000001000e628?xhsshare=CopyLink&appuid=621b282c000000001000e628&apptime=1722776422&share_id=cb0b5e35da284da9ac0ba7be2fd53efc" target="_blank"><img src={xhs} width={36} /></a>
          <a href="https://www.instagram.com/joshua_yong228/" target="_blank"><FaInstagram /></a>
          <a href="https://x.com/joshua_yong228?s=11" target="_blank"><FaTwitterSquare /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
