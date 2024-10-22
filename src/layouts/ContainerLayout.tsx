interface ContainerLayoutProps {
  children?: React.ReactNode;
  direction?: 'column' | 'row';
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  children,
  direction = 'row',
}) => {
  return (
    <div
      className={`bg-[#ffffff] dark:bg-[#020408] w-full h-svh flex ${direction === 'column' ? 'flex-col' : 'flex-row'}`}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
