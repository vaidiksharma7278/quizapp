import './footer.css'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/vaidik10/" target="_blank" title="Vaidik Sharma LinkedIn">
       Vaidik Sharma
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Quiz<span>App</span>
      </strong>
    </div>
  );
};

export default Footer;