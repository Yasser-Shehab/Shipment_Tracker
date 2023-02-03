import './Logo.scss';

export const Logo = (props: any) => {
  return (
    <div>
      <img src={props.logo} alt='Bosta Logo' className='logo' />
    </div>
  );
};
