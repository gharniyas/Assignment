import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import "../styles/Layout.css";
import { sidebarData } from '../data';
import Bodycontent from '../Components/Content/Bodycontent';
import Assiduus_Global_Logo from "../Images/Assiduus_Global_Logo.png"
import images from "../Images/images.png"
import Input from 'antd/es/input/Input';
import {FaBell} from 'react-icons/fa6';
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'


const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const LayoutWrapper = () => {

  return (
    <Layout  className="customLayout" >
      <Header className='header'
      >
        <div>
         <img src={Assiduus_Global_Logo} alt="Assiduus Logo" className="logo" />
         </div>
         
         <div className='headerRight'>
         <Input  className="inputSearch" size="large"  prefix={<AiOutlineSearch/>} />
         <FaBell className='bellIcon'/>
         <img src={images} alt="User logo" className='userLogo'/>
         <IoMdArrowDropdown className='dropdown'/>
        
 
         
         </div>



        
      </Header>
      <Content >
        
        <Layout
          style={{
            padding: '24px 0',
           
          }}
        >
          <Sider
            style={{
              
            }}
            width={200}
          >
            <Menu   
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items ={sidebarData}
            />
            
          </Sider>
          <Content
            className='contentChart'
          >
            <Bodycontent/>
          </Content>
        </Layout>
      </Content>
      
    </Layout>
  );
};
export default LayoutWrapper;