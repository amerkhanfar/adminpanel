import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notifications, Userprofile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
const NavButton = ({ title, icon, color, dotcolor, customFunc }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="realtive text-xl rounded-full hover:bg-light-gray p-3"
    >
      <span
        style={{ background: dotcolor }}
        className="absolute inline-flex rounded-full w-2 h22"
      ></span>
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
    </div>
  );
};

export default Navbar;
