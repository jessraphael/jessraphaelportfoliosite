import { FC } from 'react';

type Props = {
  title: string;
  href: string;
  closeSidebar?: () => void;
};

const NavItem: FC<Props> = ({ title, href, closeSidebar }) => {
  return (
    <>
      <div>
        <a
          className="text-md flex cursor-pointer flex-col items-center text-center text-black dark:text-white "
          href={href}
          onClick={closeSidebar}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;
