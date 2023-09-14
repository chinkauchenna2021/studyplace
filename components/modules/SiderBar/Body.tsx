import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function SideBar(){
    return (
 <Sidebar className="!h-screen" breakPoint="sm" collapsedWidth='100px'>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
    );
}