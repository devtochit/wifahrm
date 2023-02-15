import {AdminLayout} from './index' 
const Layout = ({ children }) => {
  return (
    <div>
      <AdminLayout />
      {children}
    </div>
  );
};

export default Layout;
