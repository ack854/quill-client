import SideMenu from "../sidemenu-page/side-menu";

const Layout = ({ children }: {children: any}) => {
  return (
    <div className="h-screen">
      <div className="relative ml-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-flow-row gap-6 w-full">
          <div className="md:col-span-1">
            <SideMenu />
          </div>
          <div className="md:col-span-4 mt-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
