import './Main.scss';

const Main = () => {
  return (
    <section className='main-container'>
      <h4>تتبع شحنتك</h4>
      <div className='search-container'>
        <span>
          <input type='text' placeholder='رقم التتبع' />
        </span>
        <span></span>
      </div>
    </section>
  );
};

export default Main;
