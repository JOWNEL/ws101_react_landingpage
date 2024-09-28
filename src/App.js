
import './App.css';




import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/footer';









function App() {
  return (
    <div className="App">
      <Navbar/>

      <Home
      home='Web development is a critical part of bringing business ideas to life. In the 21st century, a solid web presence is essential for any business. This is because it gives potential customers a glimpse into the company’s culture and values, whilst also helping with branding and marketing. It also provides customers with a consistent experience across different platforms.'
      />
      
      <About
      about1='A well-developed website allows businesses and individuals to reach a global audience, providing 24/7 access to information, products, and services. This breaks down geographical barriers and makes it possible to connect with users anywhere 
               in the world.'


      about2='Web development drives economic activity by supporting e-commerce, enabling businesses to sell products and services online. It also creates job opportunities in the tech industry, from developers to designers to digital marketers.'
   
      about3='Websites facilitate effective communication between businesses and their customers. They provide platforms for sharing information, engaging with users through interactive features, and offering customer support.'



      />
      
      <Footer/>

      
     
      

      
    </div>
  );
}

export default App;
