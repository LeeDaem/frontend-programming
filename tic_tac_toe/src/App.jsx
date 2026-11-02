import './App.css';
import Article from './components/Article'
import TopArticle from './components/TopArticle';

function App() {
  return (
    <div className='app'>
      <p className='font-title text-2xl text-blue-700 md:text-red-700 lg:text-green-700'>{new Date().toLocaleDateString()}</p>
      <section className='top-section'>
        <TopArticle title="상단기사1" content="기사내용1" imageUrl="/favicon.svg"/>
        <TopArticle title="상단기사2" content="기사내용2" imageUrl="https://ko.vite.dev/assets/vite-light.t8GCa_VF.svg"/>
      </section>
      <section className='main-section'>
        <Article title="메인기사11" content="기사내용1"/>
        <Article title="메인기사2222" content="기사내용222222"/>
        <Article title="메인기사3" content="기사내용3"/>
      </section>

    </div>
  );
 
}

export default App;