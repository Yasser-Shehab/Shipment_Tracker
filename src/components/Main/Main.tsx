import './Main.scss';
import searchIcon from '../../assets/Images/SearchIcon.svg';

const Main = () => {
  return (
    <section className='main-container'>
      <h4 className='header-section'>تتبع شحنتك</h4>
      <div className='search-container'>
        <input type='text' placeholder='رقم التتبع' className='search-input' />
        <button className='search-button'>
          <img src={searchIcon} alt='Search Icon' />
        </button>
      </div>
    </section>
  );
};

export default Main;
