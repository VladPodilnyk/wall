import { ReactNode } from "react";



export const PageContainer: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div className="flex flex-col m-4">
      {children}
    </div>
  );
};